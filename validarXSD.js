var fs = require('fs');
var libxmljs = require('libxmljs')


var xmlFile = process.argv[2];
var xsdFile = process.argv[3];

fs.readFile(xmlFile, function (err, dataxml) {
    if (err) throw "Cannot open " + xmlFile + "\n" + err;
    fs.readFile(xsdFile, function (err, dataxsd) {
        if (err) throw "Cannot open " + xsdFile + "\n" + err;
        var xml = libxmljs.parseXml(dataxml);
        var xsd = libxmljs.parseXml(dataxsd);
        if (xml.validate(xsd)) {
        	console.log("Es válido");
        } else {
        	console.log("No válido\n" + xml.validationErrors);
       	}
    });
});
