var app = angular.module('nominaApp', ['ngResource', 'ngSanitize']);

app.controller('NominaController', function($scope, $resource, $timeout) {

    /**
     * init controller and set defaults
     */
    function init () {

      // empty lstNomina model
      $scope.lstNomina = [];
	  $scope.toggleObject = {item: -1};
	  $scope.toggleObject1 = {item1: -1};
	  
      getNomina();
	  getListNomina();
	  getPercepciones();
	  getDeducciones();
	  
	   $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
    	$('.collapse').on('show.bs.collapse', function () {
    	    $('.collapse.in').collapse('hide');
    	});
	   });
	   
	// $('.collapse').on('show.bs.collapse', function () {
		// $('.collapse.in').collapse('hide');
		// console.log('ahora entró');
	// });
     }
	
	
     $scope.setSelected = function () {
		console.log('entro');
		
		
	}
	 
	function getListNomina(paging)
	{
		$scope.datos = $resource('/getListNomina');
		
        // GET request using the resource
        $scope.datos.query( { }, function (res) {

		if( angular.isUndefined(paging) ) {
          $scope.lstListNomina = [];
        }
		
        $scope.lstListNomina = $scope.lstListNomina.concat(res);

        });
	}
	
	function getNomina(paging)
	{
	    $scope.datos = $resource('/getNomina');

        // GET request using the resource
        $scope.datos.query( { }, function (res) {

        if( angular.isUndefined(paging) ) {
          $scope.lstNomina = [];
        }

        $scope.lstNomina = $scope.lstNomina.concat(res);

      });
	}

	function getPercepciones(paging)
	{
	    $scope.datos = $resource('/getListPercepciones');

        // GET request using the resource
        $scope.datos.query( { }, function (res) {

        if( angular.isUndefined(paging) ) {
          $scope.lstPercepciones = [];
        }

        $scope.lstPercepciones = $scope.lstPercepciones.concat(res);
		
      });
	}
	
	function getDeducciones(paging)
	{
	    $scope.datos = $resource('/getListDeducciones');

        // GET request using the resource
        $scope.datos.query( { }, function (res) {

        if( angular.isUndefined(paging) ) {
          $scope.lstDeducciones = [];
        }

        $scope.lstDeducciones = $scope.lstDeducciones.concat(res);
		
      });
	}

	
    init();
});


app.directive('onFinishRender', function ($timeout) {	
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
			
			$(".minus").tooltip({
				title: "<h4>Restar</h4>", 	
				html: true, 
			});
			
			$(".plus").tooltip({
				title: "<h4>Aumentar</h4>", 	
				html: true, 
			});
			 console.log($(".minus").length); 
        }
    }
});