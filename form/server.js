var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring');

var server = http.createServer(function (req,res){
    var url_parts = url.parse(req.url,true);
    switch (req.method) {
    case 'POST': 
    	var body = '';
        console.log('Request found with POST method');     
        req.on('data', function (data) {
            body += data;
            if (body.length > 1e6)
                req.connection.destroy();
        });
        req.on('end', function () {
            var POST = qs.parse(body);
            res.end("Sent data are name:"+POST.name+" age:"+POST.age);
        });
    	break;
    case 'GET':
    	if(url_parts.pathname == '/')
        fs.readFile('./form.html',function(error,data){ 
        console.log('Serving the page form.html');
        res.end(data);    
        });

        else if(url_parts.pathname == '/procesa'){
        	res.end("Nombre:"+ url_parts.query.nombre+
        			 ", edad:" + url_parts.query.edad);
        }
      
    break;
    default: 
    	console.log("Unsupported method" + req.method);
    }


});

server.on('connection', function (stream) {
  console.log('Conexión detectada: ' + Date(Date.now()));
});

server.listen(8080);
console.log('Server listenning at  port 8080');
