var express = require('express');
var app = express();
var port = 3000;

app.get('/alumno/:nombre', function(req, res){
  console.log(req.route);
  res.send('Hola ' + req.params.nombre + "!");
});

app.listen(port);
console.log("Servidor arrancado en puerto " + port);