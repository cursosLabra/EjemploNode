var edadLimite = 18;
process.stdout.write('Teclea tu edad: ');

process.stdin.setEncoding('utf8');

process.stdin.on('data', function (data) {
	var edad = parseInt(data, 10);
	if (isNaN(edad)) {
		console.log('%s no es un número correcto!', data);
	} else if (edad < edadLimite) {
		console.log('Debes tener %d para entrar, ' +
				    'vuelve dentro de %d años',
			    edadLimite, edadLimite - edad);
	} else {
		zonaOculta();
	}
	process.stdin.pause();
});
process.stdin.resume();

function zonaOculta() {
 console.log('Estás dentro!');
}
