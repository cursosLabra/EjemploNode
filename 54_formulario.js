var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring');
var Corrector = require("./Corrector");

var server = http.createServer(function(req, res) {
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
					var enunciado = JSON.parse(POST.enunciado);
					var examen = JSON.parse(POST.examen);
					var respuesta = Corrector().corrige(enunciado,examen);
					res.setHeader("Content-Type", "application/json");
					res.end(JSON.stringify(respuesta));
				});
				break;
			case 'GET':
				if (url.parse(req.url, true).pathname == '/') {
					datos = "<form action=\"procesa\" method=\"POST\">"
							+ "<label>Enunciado: <textarea name=\"enunciado\" rows=\"5\" cols=\"50\"></textarea></label><br>"
							+ "<label>Examen: <textarea name=\"examen\" rows=\"5\" cols=\"50\"></textarea></label><br>"
							+ "<button>Corregir</button></form>"
					res.end(datos);
				}
				break;
			default:
				console.log("Método no soportado" + req.method);
			}

		});

server.listen(3000);
console.log('Server listenning at  port 3000');
