var fs = require('fs');
var input = process.argv[2], output = process.argv[3];

fs.readFile(input, 'utf8', function(err, data) {
 if (err) throw "No se puede leer " + input + "\n" + err;
 data = data.toUpperCase();
 fs.writeFile(output,data,'utf8', function(err) {
  if (err) throw "No se puede escribir " + output + "\n" + err;
  console.log("Contenidos guardados en..." + output);
 });
});
console.log("Cargando..." + input);
