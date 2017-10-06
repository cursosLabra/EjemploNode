const numero = Math.floor(Math.random() * 100);
console.log("Numero a adivinar: " + numero);
adivina(numero, function() {
	console.log("Acertaste!");
	process.exit();
});

function adivina(numero,callback) {
	pideNum("Teclea un número", function(intento) {
	if (intento == numero) {
		callback();
	} else if (numero < intento) {
		console.log("Es menor");
		adivina(numero,callback);
	} else {
		console.log("Es mayor");
		adivina(numero,callback);
	}
	});
}

function pideNum(msg, callback) {
	 const stdin = process.stdin, stdout = process.stdout;
	 
	 stdin.resume();
	 stdout.write(msg + ": ");
	 
	 stdin.once('data', function(data) {
	   data = data.toString().trim();
	 
	   if (isNaN(data)) {
	     stdout.write("Debe ser un número\n");
	     pideNum(msg, callback);
	   } else {
	     callback(data);
	   }
	 });
}
