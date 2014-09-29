var http= require('http'),
    url = require('url'),
    qs  = require('querystring');
 
var alumnos = require('./alumnos.js');
 
http.createServer(procesa).listen(3000);
console.log("Servidor arrancado");
 
function procesa(req,resp) {
	var urlparsed = url.parse(req.url,true);
	var id = urlparsed.query['id'];
	
	switch (req.method) {
		case 'GET': 
			if (id) listarAlumno(id,req,resp);
		    else showAlumnos(req,resp);
			break;
		case 'DELETE':
			if (id) borrarAlumno(id,req,resp);
			else notAllowed("Intento de borrar todos los alumnos",resp);
			break;
		case 'POST':
			if (id) notAllowed("No se puede hacer POST sobre un alumno concreto",resp);
			else parseBody(req,resp,crearAlumno); 
			break;
		case 'PUT':
			if (id) {
			 parseBody(req,resp,function (post) {
				modificarAlumno(post,id,req,resp);
			 });
			} else 
				notAllowed("Intento de modificar todos los alumnos",resp);
			break;
		};
}
 
function isEmpty(query) {
	return Object.keys(query) == 0 ;
}
 
function listarAlumno(id,req,resp) {
	getAlumno(id,function (err,alumno) {
		if (err) notAllowed("No se encuentra alumno " + id, resp);
		else {
			resp.write(JSON.stringify(alumno));
			resp.end();
		}
	});
}
 
function showAlumnos(req,resp) {
	var accept = req.headers["accept"];
	console.log("Accept = " + accept);
	resp.setHeader('content-type','text/html');
	resp.end(alumnos.toHTML());
}
 
function borrarAlumno(id,req,resp) {
	console.log("Borrando alumno " + id);
	alumnos.borraAlumno(id, function(err,alumnos) {
	 if (err) notAllowed("No se puede borrar " + id, resp);
	 else showAlumnos(req,resp);
	});
}
 
function crearAlumno(post,req,resp) {
	var nombre = post.nombre, edad = post.edad;
	console.log("Creando alumno " + nombre + ", edad= " + edad);
    alumnos.insertaAlumno(nombre, edad, function(err,alumnos) {
    	if (err) notAllowed("No se puede crear alumno", resp);
    	else showAlumnos(req,resp);
    });
}
 
function modificarAlumno(post,id,req,resp) {
	var nombre = post.nombre, edad = post.edad;
	alumnos.modificaAlumno(id,nombre,edad,function(err,als) {
		if (err) notAllowed("No se puede modificar alumno " + id,resp);
		else showAlumnos(req,resp);
	});
}
 
 
function notAllowed(msg, resp) {
	resp.statusCode = 405;
	resp.write(msg);
	resp.end();
}
 
function parseBody(req, resp, next) {
	var body = '';
    req.on('data', function (data) {
        body += data;
        if (body.length > 1e6) {
        	console.log("Body too big!");
            req.connection.destroy();
        }
    });
    req.on('end', function () {
        var post = qs.parse(body);
        next(post,req,resp);
    });
}