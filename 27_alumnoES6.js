module.exports = class Alumno {
  constructor(nombre,apellidos) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = 0;
  }

  set edad(edad) {
    this._edad = edad
  }

  envejecer() {
    this._edad ++;
  }

  get edad() { return this._edad }

}
