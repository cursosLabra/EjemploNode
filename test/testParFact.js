var assert = require('assert');
var parfact = require("../ParFact");

describe('ParFact', function() {
    describe('método par()', function() {
        it('debe devolver true con par(4)', function() {
            assert.equal(true,parfact.par(4));
        });
        it('debe devolver false con par(5)', function() {
            assert.equal(false,parfact.par(5));
        });
    });

    describe('método factorial()', function() {
        it('debe devolver 1 con fact(1)', function() {
            assert.equal(1,parfact.factorial(1));
        });
        it('debe devolver 2 con fact(2)', function() {
            assert.equal(2,parfact.factorial(2));
        });
        it('debe devolver 6 con fact(3)', function() {
            assert.equal(6,parfact.factorial(3));
        });
        it('debe devolver 24 con fact(4)', function() {
            assert.equal(24,parfact.factorial(4));
        });
        it('debe devolver 120 con fact(5)', function() {
            assert.equal(120,parfact.factorial(5));
        });
    });

});