var http   = require('http');

var procesa = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola desde Node\n');
}

var server = http.createServer()
server.on('request',procesa);
server.listen(3000);

console.log('Servidor arrancado');
