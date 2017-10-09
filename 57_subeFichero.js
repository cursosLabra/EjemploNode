const formidable = require('formidable'), fs = require('fs'), http = require('http')
http.createServer((req, resp) => {
    switch (req.method) {
        case 'GET':  pideFichero(req,resp); break;
        case 'POST': procesaFichero(req,resp); break;
    }}).listen(3000);

function procesaFichero(req,resp) {
    let form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        resp.writeHead(200, {'content-type': 'application/json'});
        fs.readFile(files.fichero.path,'utf8', (err,datos) => {
            if (err) throw err;
            let json = JSON.parse(datos)
            resp.end(JSON.stringify(json));
        })});
    return;
}
function pideFichero(req,resp) {
    resp.writeHead(200, {'content-type': 'text/html'});
    resp.end('<h1>Cargar fichero JSON</h1>' +
        '<form action="/" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="fichero"><br>'+
        '<input type="submit" value="Enviar">'+
        '</form>'
    );
}
