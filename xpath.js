var fs = require('fs');
var libxmljs = require('libxmljs')

var input  = process.argv[2], xpath = process.argv[3]; 

fs.readFile(input, function (err, contents) {
    if (err) throw "Cannot open " + input + "\n" + err;
    var xml = libxmljs.parseXmlString(contents);
    var result = xml.get(xpath);
    console.log("Resultado: " + result);
  });
