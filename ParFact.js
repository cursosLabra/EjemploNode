function par(x) { return (x % 2 == 0); }
function factorial(x) {
    if (x < 0) throw "valor negativo";
    if (x == 0) return 1
    else return x * factorial(x - 1);
}

module.exports.par = par;
module.exports.factorial = factorial;
