const http = require('http');
const server = http.createServer();
server.on('request',procesa);
server.listen(3000);
console.log('Servidor arrancado');

function procesa(request,response) {
    console.log("URL solicitada = " + request.url);
    response.setHeader("Content-Type", "text/html");
    response.write("<p>Hola</p>");
    response.end();
}

