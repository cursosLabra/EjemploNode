class Alumno {
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

class Alumnos {
  constructor() {
    this.alumnos = {};
  }

  getAlumno(id) {
    if (id in this.alumnos) alumnos[id];
    else return null;
  }

  insertaAlumno(id,nombre, apellidos, edad) {
    this.alumnos[id] = {
      "nombre": nombre,
      "apellidos": apellidos,
      "edad": edad
    }
  }
}

module.exports = Alumnos;


let a = new Alumnos();
a.insertaAlumno("ID1","Juan", "Torres", 23);

let juan = new Alumno("Juan","Torre");
juan.edad = 34;
juan.envejecer();
console.log(juan);
