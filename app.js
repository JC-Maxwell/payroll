
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/angular', express.static(__dirname + '/node_modules/angular')); // redirect Angular
app.use('/angular-resource', express.static(__dirname + '/node_modules/angular-resource')); // redirect Angular-resource
app.use('/angular-sanitize', express.static(__dirname + '/node_modules/angular-sanitize')); // redirect Angular-sanitize

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/getNomina', user.getNomina);
app.get('/getListNomina', user.getListNomina);
app.get('/getListPercepciones', user.getListPercepciones);
app.get('/getListDeducciones', user.getListDeducciones);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
