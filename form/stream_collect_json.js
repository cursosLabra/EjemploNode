var http = require('http');

var server = http.createServer(function (req, res) {

  req.setEncoding('utf8');

  var body = '';
  req.on('data', function (trozo) {
    body += trozo;
  });

  req.on('end', function () {
    try {
      var datos = JSON.parse(body);
    } catch (er) {
      res.statusCode = 400;
      return res.end('error convirtiendo a Json: ' + er.message);
    }

    res.write("Json recibido: " + JSON.stringify(datos));
    res.end();
  });
});

server.listen(3000);

