var express = require('express');

var host = '127.0.0.1';
var port = 3000;
var app = express();

app.get('/', function(req, res){
  res.send('Hola desde Express');
});

app.get('/user/:id', function(req, res){
	console.log(req.route);
    res.send('user ' + req.params.id);
	});

app.listen(port);




console.log('Aplicación funcionando en ' + host + ':' + port + '/');