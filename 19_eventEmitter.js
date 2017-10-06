const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = new http.createServer();
server.on('connection', function (stream) {
  console.log('Conexión detectada: ' + Date(Date.now()));
});

server.on('request', function (request, response) {
    let headers = request.headers ;
    console.log(headers);
    response.end("<h1>Hola</h1>")
});
server.listen(port, host);
console.log('Servidor arrancado en ' + host + ':' + port + '/');

