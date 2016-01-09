var fs = require('fs');
var input = "fichero.txt";

function procesa(err, datos) {
 if (err) throw "Cannot read " + input + "\n" + err;
 datos = datos.toUpperCase();
 console.log(datos);
}

fs.readFile(input, 'utf8', procesa);
console.log("Leyendo..." + input);
 
