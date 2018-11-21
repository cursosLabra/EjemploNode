const http = require('http'),
      fs = require('fs'),
      url = require('url'),
      qs = require('querystring');

const server = http.createServer((req, res) => {
 switch (req.method) {
	case 'POST':
		var body = '';
		req.on('data', data => { body += data;
		if (body.length > 1e6) req.connection.destroy();
		});
		req.on('end', () => {
  		  var POST = qs.parse(body);
          res.end("Hola " + POST.cliente + "! Tu email es:" + POST.correo);
		});
	break;
	case 'GET':
		if (url.parse(req.url, true).pathname == '/') {
          fs.readFile('form.html','utf8',function (err,datos) {
            res.setHeader('content-type', 'text/html');
            res.end(datos);
          });
		}
	break;
 default:
  console.log("Método no soportado" + req.method);
}}).listen(3000);
