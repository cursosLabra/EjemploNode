const http = require('http');
const server = http.createServer();
server.on('request',procesa);
server.listen(3000);
console.log('Servidor arrancado');

function procesa(request, response) {
    let url = request.url;
    console.log(`URL solicitada: ${url}`);
    response.end("Hola");
}


