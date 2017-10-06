const alumnos = require('./25_alumnos');
alumnos.getAlumno(1, function(err,a) {
if (err) throw err;
console.log(a); 
});
