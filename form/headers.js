var http=require('http');

var server = http.createServer();
server.on('request', procesa);
server.listen(3000);

function procesa(request,response) {
	console.log("Cabeceras solicitadas:")
	var headers = request.headers;
	for (h in headers) console.log(h + ":" + headers[h]);
	response.setHeader("Content-Type", "text/html");
	response.write("<p>Hola</p>");
	response.end();
}