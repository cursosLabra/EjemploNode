pideNum("Teclea un número", function(num) {
	console.log("El doble de tu número es " + (num * 2) );
	process.exit();
	});

function pideNum(msg, callback) {
	 process.stdin.resume();
	 process.stdout.write(msg + ": ");
	 
	 process.stdin.once('data', function(data) {
	   if (isNaN(data)) {
	     process.stdout.write("Debe ser un número\n");
	     pideNum(msg, callback);
	   } else {
	     callback(data);
	   }
	 });
}
