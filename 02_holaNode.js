const http = require('http');
const host = '127.0.0.1';
const port = 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola desde Node\n');
}).listen(port, host);

console.log('Servidor arrancado en ' + host + ':' + port + '/');

