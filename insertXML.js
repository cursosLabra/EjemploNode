var fs = require('fs');
var libxmljs = require('libxmljs')

var file  = process.argv[2]; 

fs.readFile(file, function (err, contents) {
    if (err) throw "Cannot open " + file + "\n" + err;
    var xml = libxmljs.parseXmlString(contents);
    var newChild = libxmljs.Element(xml, 'new-child');
    xml.root().addChild(newChild);
    fs.writeFile(file, xml.toString(), function (err) {
    console.log("Updated file " + file);
    });
  });
