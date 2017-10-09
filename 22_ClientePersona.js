let persona=require('./22_Persona');

console.log(persona.nombre);
console.log(persona.puedeVotar());
persona.edad = 2;
console.log(persona.puedeVotar());
