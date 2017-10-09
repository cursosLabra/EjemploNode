const http = require('http');
const server = http.createServer();
server.on('request',procesa);
server.on('connection', avisa);
server.listen(3000);
console.log('Servidor arrancado');

function avisa(s) {
    console.log(`Conexión detectada: ${Date(Date.now())} en ${s.localAddress}`);
}

function procesa(request, response) {
    let url = request.url;
    console.log(`URL solicitada: ${url}`);
    response.end("Hola");
}
