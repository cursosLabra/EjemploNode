const express = require('express');
const app = express();
const port = 3000;

app.get('/usuario/:nombre', function(req, res){
	console.log(req.route);
    res.send('Hola ' + req.params.nombre + "!");
});

app.listen(port);
console.log("Servidor arrancado en puerto " + port);
