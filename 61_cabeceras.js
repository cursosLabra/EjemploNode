const express = require('express');
const app = express();

app.get('/headers', function(req,res){
	res.set('Content-Type','text/plain');
	var s = '';
	for(let name in req.headers)
		s += name + ': ' + req.headers[name] + '\n';
		res.send(s);
	});

app.listen(3000);
console.log('Express started on port 3000');
