const http = require('http');
const fs = require("fs");

http.createServer(procesa).listen(3000);

function procesa(req,resp) {
    fs.readFile('form.html','utf8',function (err,datos) {
        resp.setHeader('Content-Type', 'text/html');
        resp.end(datos);
    });
}


