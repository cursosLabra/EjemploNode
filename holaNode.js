var http = require('http');
var host = '127.0.0.1';
var port = 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola desde Node\n');
}).listen(port, host);

console.log('Servidor arrancado en ' + host + ':' + port + '/');

