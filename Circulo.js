function Circulo(x, y, r) {
	
 function r_squared() {
  return Math.pow(r, 2);
 }
 
 function area() {
  return Math.PI * r_squared();
 }
 
 return {
  area: area
 };

}

module.exports = Circulo