var http=require('http');
var options = 
 { hostname: 'www.uniovi.es', port: 80, path: '/', method: 'GET' };

var total='';
var req = http.request(options, function(response) {
  response.on("data", function(datos) {
    total+=datos;
    console.log("%d bytes recibidos ", datos.length);
  });
  response.on("end", function() {
    console.log("Datos totales = " + total);
  });
});
req.end();
