/*
 * Ejemplo de tipo abstracto para gestionar lista de alumnos
 * Cada alumno tiene un nombre y una edad
 */

// Internamente se representan como una sola lista
let alumnos = [];

// Se inicializan un par de valores
alumnos.push({ "nombre": "pepe", "edad": 23 });
alumnos.push({ "nombre": "Luis", "edad": 34 });

// Funciones que se exportan
// Utilizan patrón callback,
// invocándose con una función next(error, valor) que se llama al terminar


exports.getAlumno = function(id,next) {
  console.log(`Buscando alumno ${id} alumnos:`);
  console.log(alumnos);
  let alumno = alumnos[id];
  if (alumno == undefined) 
	  next(new Error("Cannot find record with id " + id));
  else 
	  next(null,alumno);
};

exports.insertaAlumno = function (nombre,edad,next) {
	if (nombre == null) next("Campo nombre es obligatorio");
	else if (edad == null) next("Campo edad es obligatorio");
	else {
		var record = { "nombre": nombre, "edad": edad };
		alumnos.push(record);
		next(null,alumnos);
	}
};

exports.borraAlumno = function (id,next) {
 if (alumnos[id] != undefined) { 
	alumnos.splice(alumnos.indexOf(alumnos[id]),1);
	next(null,alumnos);
 } else 
	next(new Error("No existe alumno con id " + id));
};

exports.modificaAlumno = function(id,nombre,edad,next) {
 if (alumnos[id]!= undefined) {
	alumnos[id] = { "nombre": nombre, "edad": edad};
	next(null,alumnos);
 }
 else
	next(new Error("No se puede modificar alumno que no existe. id = " + id)) ; 
};

exports.toHTML = function() {
 return '<ol>' + alumnos.map(function(alumno){
    return '<li>' + alumno.nombre + ' ' + alumno.edad + '</li>';
 }).join('') + '</ol>' ;
}; 


exports.toText = function() {
 return alumnos.map(function(alumno){
	return ' - ' + alumno.nombre + ' ' + alumno.edad + '\n';
  }).join('');	
};

exports.toJson = function() {
	return JSON.stringify(alumnos);
};

exports.toXML = function() {
  return '<alumnos>' + alumnos.map(function(alumno){
	   return '<alumno nombre =\"' + alumno.nombre + '\">' +
		        '<edad>' + alumno.edad + '</edad>' +
		      '</alumno>';
   }).join('') +
	   '</alumnos>';
};