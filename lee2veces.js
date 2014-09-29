var fs = require('fs');
var input1 = "fichero1.txt";
var input2 = "fichero2.txt";

var cb1 = function(err1, datos1) {
	
 var cb2 = function(err2,datos2) {
  if (err2) throw err2;
  if (datos1.length > datos2.length) {
	  console.log("Datos " + input1 + " > datos " + input2);
  } else {
	  console.log("Datos " + input1 + " <= datos " + input2);
  }
  
 };
 
 if (err1) throw err1;
 fs.readFile(input2,'utf8',cb2);
 console.log('leyendo ' + input2);
};

fs.readFile(input1, 'utf8', cb1);
console.log("leyendo " + input1);
