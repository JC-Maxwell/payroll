
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.getNomina = function(req, res){
	
	var lstNomina = [];
	
	var objeto1 = {
      "EmpleadoNombre": "JUAN CARLOS CORDERO ALVAREZ",
      "EmpleadoPercepciones": "+$18,536.00",
      "EmpleadoDeducciones": "-$3,450.00",
	  "EmpleadoHorasExtra": "=$15,566.00",
	  "EmpleadoStatusTimbre": "PENDIENTE POR TIMBRAR",
	  "EmpleadoID": 1
    };
	lstNomina.push(objeto1);
	
	var objeto2 = {
      "EmpleadoNombre": "JUAN CARLOS CORDERO ALVAREZ",
      "EmpleadoPercepciones": "+$18,536.00",
      "EmpleadoDeducciones": "-$3,450.00",
	  "EmpleadoHorasExtra": "=$15,566.00",
	  "EmpleadoStatusTimbre": "PENDIENTE POR TIMBRAR",
	  "EmpleadoID": 2
    };
	lstNomina.push(objeto2);
	
	var objeto3 = {
      "EmpleadoNombre": "JUAN CARLOS CORDERO ALVAREZ",
      "EmpleadoPercepciones": "+$18,536.00",
      "EmpleadoDeducciones": "-$3,450.00",
	  "EmpleadoHorasExtra": "=$15,566.00",
	  "EmpleadoStatusTimbre": "PENDIENTE POR TIMBRAR",
	  "EmpleadoID": 3
    };
	lstNomina.push(objeto3);
	
	var objeto4 = {
      "EmpleadoNombre": "JUAN CARLOS CORDERO ALVAREZ",
      "EmpleadoPercepciones": "+$18,536.00",
      "EmpleadoDeducciones": "-$3,450.00",
	  "EmpleadoHorasExtra": "=$15,566.00",
	  "EmpleadoStatusTimbre": "PENDIENTE POR TIMBRAR",
	  "EmpleadoID": 4
    };
	lstNomina.push(objeto4);
	
	res.send(lstNomina);
};

exports.getListNomina = function(req, res){
	
	var lstNomina = [];
	
	var objeto1 = {
      "EmpleadoNombre": "NOMINA SEMANAL DE 27 DE DIC AL 02 DE ENERO DEL 2015"
    };
	lstNomina.push(objeto1);
	
	var objeto2 = {
      "EmpleadoNombre": "NOMINA SEMANAL DE 27 DE DIC AL 02 DE ENERO DEL 2015"
    };
	lstNomina.push(objeto2);
	
	var objeto3 = {
      "EmpleadoNombre": "NOMINA SEMANAL DE 27 DE DIC AL 02 DE ENERO DEL 2015"
    };
	lstNomina.push(objeto3);
	
	var objeto4 = {
      "EmpleadoNombre": "NOMINA SEMANAL DE 27 DE DIC AL 02 DE ENERO DEL 2015"
    };
	lstNomina.push(objeto4);
	
	res.send(lstNomina);
};

exports.getListPercepciones = function(req, res){
	
	var lstPercepciones = [];
	
	var objeto1 = {
      "EmpleadoPercepcionesNombre": "001 Salarios y percepciones",
	  "EmpleadoPercepcionesMonto": "+12,500"
    };
	lstPercepciones.push(objeto1);
	
	var objeto2 = {
      "EmpleadoPercepcionesNombre": "001 Salarios y percepciones",
	  "EmpleadoPercepcionesMonto": "+12,500"
    };
	lstPercepciones.push(objeto2);
	
	var objeto3 = {
      "EmpleadoPercepcionesNombre": "001 Salarios y percepciones",
	  "EmpleadoPercepcionesMonto": "+12,500"
    };
	lstPercepciones.push(objeto3);
	
	res.send(lstPercepciones);
};

exports.getListDeducciones = function(req, res){
	
	var lstDeducciones = [];
	
	var objeto1 = {
      "EmpleadoDeduccionesNombre": "001 Deducciones y retenciones",
	  "EmpleadoDeduccionesMonto": "-$2,500"
    };
	lstDeducciones.push(objeto1);
	
	var objeto2 = {
      "EmpleadoDeduccionesNombre": "001 Deducciones y retenciones",
	  "EmpleadoDeduccionesMonto": "-$2,500"
    };
	lstDeducciones.push(objeto2);
	
	var objeto3 = {
      "EmpleadoDeduccionesNombre": "001 Deducciones y retenciones",
	  "EmpleadoDeduccionesMonto": "-$2,500"
    };
	lstDeducciones.push(objeto3);
	
	var objeto4 = {
      "EmpleadoDeduccionesNombre": "001 Deducciones y retenciones",
	  "EmpleadoDeduccionesMonto": "-$2,500"
    };
	lstDeducciones.push(objeto4);
	
	res.send(lstDeducciones);
};