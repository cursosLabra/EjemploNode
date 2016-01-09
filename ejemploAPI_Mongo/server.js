var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 3000; 

var mongoose   = require('mongoose');
mongoose.connect('mongodb://@localhost:27017/test'); 
var Alumno     = require('./app/models/alumnos');

var router = express.Router();

router.use(function(req, res, next) {
	console.log('router funcionando...');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'Bienvenido al API!' });	
});

router.route('/alumnos')

	.post(function(req, res) {
		
		var alumno = new Alumno();		
		alumno.nombre = req.body.nombre;  
        alumno.apellidos = req.body.apellidos;
		console.log("Creando alumno " + alumno);
		alumno.save(function(err) {
			if (err)
				res.send(err);
			res.json({ message: 'Alumno creado!' });
		});

		
	})
	
	.get(function(req, res) {
		Alumno.find(function(err, alumnos) {
			if (err)
				res.send(err);
			res.json(alumnos);
		});
	});

router.route('/alumnos/:alumno_id')

	.get(function(req, res) {
		Alumno.findById(req.params.alumno_id, function(err, alumno) {
			if (err)
				res.send(err);
			res.json(alumno);
		});
	})

	.put(function(req, res) {
		Alumno.findById(req.params.alumno_id, function(err, alumno) {

			if (err)
				res.send(err);

			alumno.nombre = req.body.nombre;
			alumno.apelidos = req.body.apellidos;
		    console.log("Actualizando alumno " + alumno);
			alumno.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Alumno actualizado!' });
			});

		});
	})

	.delete(function(req, res) {
		Alumno.remove({
			_id: req.params.alumno_id
		}, function(err, alumno) {
			if (err)
				res.send(err);

			res.json({ message: 'Alumno borrado' });
		});
	});

app.use('/api', router);
app.listen(port);

console.log('Servidor arrancado en puerto ' + port);
