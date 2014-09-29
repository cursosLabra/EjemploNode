var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AlumnoSchema   = new Schema({
	nombre: String,
	apellidos: String
});

module.exports = mongoose.model('Alumno', AlumnoSchema);