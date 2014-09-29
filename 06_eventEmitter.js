var http   = require('http');

var procesa = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola desde Node\n');
}

var server = http.createServer()
server.on('request',procesa);
server.listen(3000);

server.on('connection', function (stream) {
  console.log('Conexión detectada: ' + Date(Date.now()));
});

server.on('connection', function (stream) {
  console.log('Hey!, que yo también he detectado la conexión: ' + Date(Date.now()));
});

console.log('Servidor arrancado');

