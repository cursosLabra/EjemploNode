const Negotiator = require('negotiator');
const http = require('http');
const tiposDisponibles =
    ['text/html',
     'application/xml',
     'application/json'
    ];
const alumnos = require('./alumnos');


http.createServer(showAlumnos).listen(3000);

function showAlumnos(req,resp) {
    const negotiator = new Negotiator(req);
    const mediaType = negotiator.mediaType(tiposDisponibles);
    switch (mediaType) {
        case 'application/xml':
            resp.setHeader('content-type',mediaType);
            console.log("XML...")
            resp.end(alumnos.toXML());
            break;
        case 'application/json':
            resp.setHeader('content-type',mediaType);
            console.log("JSON...")
            resp.end(alumnos.toJson());
            break;
        case 'text/html':
            resp.setHeader('content-type', mediaType);
            resp.end(alumnos.toHTML());
            break;
        default:
            resp.setHeader('content-type', 'text/html');
            resp.end(alumnos.toHTML());
    }
}
