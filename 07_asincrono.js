function prueba(callback) {
 setTimeout(callback, 200);
}

var color = 'azul';
console.log('El color es ' + color);

prueba(function() {
  console.log('El color es ' + color);
});

color = 'verde';
console.log('El color es ' + color);
