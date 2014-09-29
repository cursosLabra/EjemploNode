function prueba(callback) {
 setTimeout(callback, 200);
}

var color = 'azul';

prueba(function() {
  console.log('El color es ' + color);
});

color = 'verde';
