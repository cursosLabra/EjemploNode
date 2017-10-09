function rect(a, b) {

 function area() {
  return a * b;
 }

 return {
   area: area
 };

}

module.exports = rect;

