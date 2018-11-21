function prueba(f,x) {
 setTimeout(f, 500);
}

let color = 'azul';

function verColor(x) { 
 console.log(`verColor(${x}): ${color}`); 
}

verColor(1);
prueba(() => verColor(2));
color = 'verde';
verColor(3);
