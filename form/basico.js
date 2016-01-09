var http=require('http');

/*var server = http.createServer();
server.on('request', procesa);
server.listen(3000); */
http.createServer(procesa).listen(3000);

function procesa(request,response) {
	console.log("URL solicitada = " + request.url);
	console.log("Headers");
	console.log(request.headers);
	response.setHeader("Content-Type", "text/html");
	response.write("<p>Hola</p>");
	response.end();
}

