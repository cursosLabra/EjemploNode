
resultado = query('SELECT * FROM posts WHERE id = 1');
hacer_algo_con(resultado);

callback = function(resultado) {
	hacer_algo_con(resultado);
}
query('SELECT * FROM posts WHERE id = 1', callback);
	
xx = pepe();

var modulo = require('module_name');

modulo.saluda()



