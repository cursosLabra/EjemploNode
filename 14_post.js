var http= require('http'),
    url = require('url'),
    qs  = require('querystring');
 
http.createServer(procesa).listen(3000);
console.log("Servidor arrancado");
 
function procesa(req,resp) {
 switch (req.method) {
	case 'POST':
		parseBody(req,resp,saluda); 
		break;
	default:
		resp.end("Solo acepto peticiones POST...");
		break;
	};
}
 
function saluda(post,req,resp) {
	resp.end("Nombre " + post.nombre + ", edad= " + post.edad);
}
 
function parseBody(req, resp, next) {
	var body = '';
    req.on('data', function (data) {
        body += data;
        if (body.length > 1e6) {
        	console.log("Body too big!");
            req.connection.destroy();
        }
    });
    req.on('end', function () {
        var post = qs.parse(body);
        next(post,req,resp);
    });
}