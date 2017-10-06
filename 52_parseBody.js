const http = require('http');
const qs = require('querystring')

http.createServer(procesa).listen(3000);

function procesa(req, resp) {
	parseBody(req, resp, saluda);
}

function saluda(post, req, resp) {
	resp.end(" nombre: " + post.nombre + 
			", edad: " + post.edad);
}

function parseBody(req, resp, next) {
	var body = '';
	req.on('data', function(data) {
		body += data;
		if (body.length > 1e6) {
			console.log("Body too big!");
			req.connection.destroy();
		}
	});
	req.on('end', function() {
		var post = qs.parse(body);
		next(post, req, resp);
	});
}