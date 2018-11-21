const fs = require('fs');
const {promisify} = require('util');
const f1 = "fichero1.txt";
const f2 = "fichero2.txt";
const f3 = "fichero3.txt";

const readFileAsync = promisify(fs.readFile);

async function main() {
 const datos1 = await readFileAsync(f1,'utf8');
 const datos2 = await readFileAsync(f2,'utf8');
 const datos3 = await readFileAsync(f3,'utf8');
 const total = datos1.length + datos2.length + datos3.length
 console.log(`Datos totales leídos: ${total}`)
}
main();
