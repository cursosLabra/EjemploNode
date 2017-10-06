const Alumnos = require('./27_alumnosES6');
const Alumno = require('./27_alumnoES6');

let a = new Alumnos();
a.insertaAlumno("ID1","Juan", "Torres", 23);

let juan = new Alumno("Juan","Torre");
juan.edad = 34;
juan.envejecer();
console.log(juan);

/*alumnos.getAlumno(1, function(err,a) {
if (err) throw err;
console.log(a); 
}); */
