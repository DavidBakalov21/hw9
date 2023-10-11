function Factorial(x){
let result=1;
if(typeof x === "number"){
    for (let index = x; index >0; index--) {
        result*=index
        
    }
    return result;
}else{
    return "not number"
}

}


function multiply(num) {
    let result = num;

    const innerFunction = function(nextNum) {
        if (typeof nextNum !== "number") {
           return "Argument is not a number";
        }

        result *= nextNum;
        return innerFunction;
    };

    innerFunction.valueOf = function() {
        return result;
    };

    innerFunction.toString = function() {
        return String(result);
    };

    return innerFunction;
}
//alert(multiply(2)(3))
//alert(Factorial("x"))
module.exports = {
    Factorial: Factorial,
    multiply: multiply
};