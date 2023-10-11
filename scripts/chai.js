let chai = require('chai');
let expect = chai.expect;
let MathOps = require('./script2');
describe('Math Functions', function() {
    
    
    describe('Factorial', function() {
        it('return 120, input 5', function() {
            let result = MathOps.Factorial(5);
            expect(result).to.equal(120);
        });

        it('return 1 , input 0', function() {
            let result = MathOps.Factorial(0);
            expect(result).to.equal(1);
        });

        it('return "not number"', function() {
            let result = MathOps.Factorial("test");
            expect(result).to.equal("not number");
        });
        it('return "not number"', function() {
            let result = MathOps.Factorial("test");
            expect(result).to.equal(10000);
        });
    });

   
    describe('multiply', function() {
        it('return 6, input (2)(3)', function() {
            let result = +MathOps.multiply(2)(3);
            expect(result).to.equal(6);
        });
    
        it('return 24, , input (2)(3)(4)', function() {
            let result = +MathOps.multiply(2)(3)(4); 
            expect(result).to.equal(24);
        });
    });
    

});