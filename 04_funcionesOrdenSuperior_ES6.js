const suma3 = x => x + 3
const aplica2 = (f,x) => f (f (x))

console.log(aplica2(suma3,4));
console.log(aplica2(x => x * x,5));

