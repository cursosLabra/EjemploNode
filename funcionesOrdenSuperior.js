function suma3(x) { 
	return x + 3; 
}

var suma3 = function(x) {
	return x + 3;
};

var aplica2 = function (f,x) { 
  return f (f (x)); 
};

console.log(aplica2(suma3,4));

console.log(aplica2(function (x) { return x * x; },5));

