var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; 

var router = express.Router();

router.use(function(req, res, next) {
	console.log('router funcionando...');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'Bienvenido al API!' });	
});

var alumnos = [{id: 1, nombre: "Jose", apellidos: "Fdez"}];
var total = 1 ;

router.route('/alumnos')

	.post(function(req, res) {
		
		var alumno = { nombre: req.body.nombre, apellidos: req.body.apellidos };
		total++;
		alumno.id = total;
        console.log("Nombre en body: " + req.body.nombre);
		console.log("Apellidos en body: " + req.body.apellidos);
		console.log("Añadiendo alumno " + alumno);
		alumnos.push(alumno);
		res.json(alumnos);
	})
	
	.get(function(req, res) {
		console.log("Buscando alumnos ");
		res.json(alumnos);
	});

router.route('/alumnos/:id')

	.get(function(req, res) {
		var id = req.params.id;
		console.log("Buscando alumno con id = " + id);
		findById(alumnos,id,function(err,alumno) {
		 if (err) json(err);
		 json(alumno);
		})
	})

	.put(function(req, res) {
		console.log("Buscando alumno " + req.params.alumno_id + req.body.nombre + req.body.apellidos);
	})

	.delete(function(req, res) {
	    console.log("Borrando alumno " + req.params.alumno_id);
	});

app.use('/api', router);
app.listen(port);

console.log('Servidor arrancado en puerto ' + port);

function findById(alumnos,id,next) {
 for (var i=0; len = alumnos.length; i < len; i++) {
        if (alumnos[i].id === id) {
            next(alumnos[i]);
        }
		
}