const http = require('http');
let total="";
const req = http.get("http://www.uniovi.es", response => {
  response.on("data", datos => {
    total+=datos;
    console.log("%d bytes recibidos ", datos.length);
  });
  response.on("end", function() {
    console.log("Datos totales = " + total.length);
  });
}).on('error', (e) => {
   console.log(`Got error: ${e.message}`);
});
