
process.stdout.write('Teclea tu nombre: ');

process.stdin.setEncoding('utf8');

process.stdin.on('data', function (nombre) {
	console.log("Hola " + nombre);
	process.stdin.pause();
});
 process.stdin.resume();

