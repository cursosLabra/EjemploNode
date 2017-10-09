const fs = require('fs');
const input = "fichero.txt";

fs.readFile(input, 'utf8', (err, datos) => {
 if (err) throw err;
 datos = datos.toUpperCase();
 console.log(datos);
});

console.log("Leyendo " + input);
