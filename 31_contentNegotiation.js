var express = require('express');
var app = express();
var alumnos = require('./alumnos');

app.get('/alumnos', function (req,res) {
 res.format(
  { 'text/html' : function () {
	   res.set('Content-Type', 'text/html');
       res.send(alumnos.toHTML());
	 },
   'text/plain': function () {
	   res.set('Content-Type', 'text/plain');
       res.send(alumnos.toText());
	},
  'application/json': function() {
	   res.set('Content-Type', 'application/json');
       res.send(alumnos.toJson());
	 },
  'application/xml': function() {
	   res.set('Content-Type', 'application/json');
       res.send(alumnos.toXML());
  }});
});

app.listen(3000);
console.log('Servidor arrancado');
