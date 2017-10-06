module.exports = class Alumnos {
  constructor() {
    this.alumnos = {};
  }

  getAlumno(id) {
    if (id in this.alumnos) alumnos[id];
    else return null;
  }

  insertaAlumno(id, nombre, apellidos, edad) {
    this.alumnos[id] = {
      "nombre": nombre,
      "apellidos": apellidos,
      "edad": edad
    }
  }
}

