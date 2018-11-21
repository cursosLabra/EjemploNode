const fs = require('fs');
const f1 = "fichero1.txt";
const f2 = "fichero2.txt";
const f3 = "fichero3.txt";

fs.readFile(f1,'utf8', (err,datos1) => {
  if (err) throw `Cannot read from ${f1}` ;
  fs.readFile(f2,'utf8', (err,datos2) => {
      if (err) throw `Cannot read from ${f2}` ;
      fs.readFile(f3,'utf8', (err,datos3) => {
          if (err) throw `Cannot read from ${f3}` ;
          total = datos1.length + datos2.length + datos3.length
          console.log(`Datos totales leídos: ${total}`)
      })
  })
})

