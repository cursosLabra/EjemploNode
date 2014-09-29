var http= require('http'),
    url = require('url'),
	fs  = require('fs'),
	qs  = require('querystring');
 
var fichero = 'form.html';

http.createServer(procesa).listen(3000);
console.log("Servidor arrancado");
 
function procesa(req,resp) {
   fs.readFile('form.html','utf8',function (err,datos) {
	 resp.writeHead(200,'{content-type: text/html}');
	 resp.end(datos);
   });
 console.log("Leyendo contenido fichero " + fichero);
}
