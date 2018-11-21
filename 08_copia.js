const fs = require('fs');

if (process.argv.length != 4) {
    console.log(`Usage: ${process.argv[0]} ${process.argv[1]}: file1 file2`);
} else {

const input  = process.argv[2];
const output = process.argv[3];

fs.readFile(input, 'utf8', function(err, datos) {
 if (err) throw "Cannot read " + input + "\n" + err;
 datos = datos.toUpperCase();
 fs.writeFile(output,datos,'utf8', function(err) {
  if (err) throw "Cannot write " + output + "\n" + err;
  console.log("Uppercase contents saved in..." + output);
 });
});
		
console.log("Loading..." + input);

}