const http = require('http'),
      fs = require('fs'),
      url = require('url'),
      qs = require('querystring');

const server = http.createServer(function(req, res) {
			switch (req.method) {
			case 'POST':
				var body = '';
				req.on('data', function(data) {
					body += data;
					if (body.length > 1e6)
						req.connection.destroy();
				});
				req.on('end', function() {
					var POST = qs.parse(body);
					res.end("Hola " + POST.cliente + "! Tu email es:"
							+ POST.correo);
				});
				break;
			case 'GET':
				if (url.parse(req.url, true).pathname == '/') {
					datos = "<form action=\"procesa\" method=\"POST\">"
							+ "<label>Nombre: <input name=\"cliente\"></label><br>"
							+ "<label>Email: <input name=\"correo\" type=\"email\"></label><br>"
							+ "<button>Enviar</button></form>"
					res.end(datos);
				}
				break;
			default:
				console.log("Método no soportado" + req.method);
			}

		});

server.listen(3000);
console.log('Server listenning at  port 3000');
