const express = require('express');
const app = express();
const users = require('./users');

app.get('/users', function (req,res) {
	res.format({
		'text/html' : users.html,
		'text/plain': users.text,
		'application/json': users.json,
		'application/xml': users.xml
	});
});

app.listen(3000);
console.log('Express started on port 3000');
