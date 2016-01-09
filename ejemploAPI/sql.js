var express    = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 3000; 


var app        = express();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'node',
  password : 'node'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});


connection.end();

var router = express.Router();

router.use(function(req, res, next) {
	console.log('router funcionando...');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'Bienvenido al API!' });	
});
