function prueba(callback) {
 setTimeout(callback, 500);
}

let color = 'azul';

function verColor() { console.log(`El color es ${color}`); }

verColor();
prueba(verColor);

color = 'verde';
verColor();
