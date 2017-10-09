/*
 * Ejemplo de clase Alumno
 * Cada alumno tiene un nombre y una edad
 */

exports.Alumno  = class {

	constructor(nombre) {
		this.nombre = nombre ;
		this.edad = 0 ;
	}

	setEdad(edad) {
        this.edad = edad;
        return this
    }

    saluda() {
		console.log(`Hola, me llamo ${this.nombre} y mi edad es ${this.edad}`)
	}
}
