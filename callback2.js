var fs = require('fs');
var input = "fichero.txt";

fs.readFile(input, 'utf8', function (err, datos) {
 if (err) throw err;
 datos = datos.toUpperCase();
 console.log(datos);
});

console.log("Leyendo..." + input);
 
