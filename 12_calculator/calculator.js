const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((previousValue, currentValue) => previousValue + currentValue ,0)
};

const multiply = function( arr ) {
	return arr.reduce((previousValue, currentValue) => previousValue * currentValue)
};

const power = function( a, b ) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  if(a == 0) return 1;
  let b = a;
  for (let i = 1; i < a; i++) {
    b = b * i;
    }
    return b;
};
console.log(factorial(3));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
