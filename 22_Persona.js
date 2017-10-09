const EDAD_VOTO = 18
const persona = {
    nombre: "Juan",
    edad: 20
}
function puedeVotar() {
    return persona.edad > EDAD_VOTO
}
module.exports = persona;
module.exports.puedeVotar = puedeVotar;

