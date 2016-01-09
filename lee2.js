var fs = require('fs');
var input1 = "fichero1.txt";
var input2 = "fichero2.txt";

fs.readFile(input1, 'utf8', function(err, datos1) {
	if (err)
		throw err;
	console.log("Datos del primero: " + datos1.length);
	fs.readFile(input2, 'utf8', function(err, datos2) {
		if (err)
			throw err;
		console.log("Datos del segundo: " + datos2.length);
		if (datos1.length > datos2.length) {
			console.log("Mayor el primero");
		} else {
			console.log("Mayor el segundo");
		}
	});

});

console.log("Leyendo " + input1);
console.log("Leyendo " + input2);
