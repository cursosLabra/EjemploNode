function asincrona(callback) {
 setTimeout(callback, 200);
}

var color = 'azul';

asincrona(function() {
  console.log('El color es ' + color);
});

color = 'verde';
