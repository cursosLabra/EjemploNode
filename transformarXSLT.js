var libxslt = require('libxslt');

var xmlFile = process.argv[2];
var xslFile = process.argv[3];

libxslt.parseFile(xslFile, function (err, xsl) {
  if (err) throw "Cannot open " + xslFile + "\n" + err;
  xsl.applyToFile(xmlFile,function (err,result) {
	  if (err) throw "Cannot apply to file " + xmlFile + "\n" + err;
	  console.log(result);
  });
});

