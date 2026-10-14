const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((total, curr) => total + curr, 0);
};

const multiply = function(a) {
  return a.reduce((total, curr) => total * curr, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(n) {
	let ans = 1;
  for(let i = 1; i <= n; i++) ans *= i;
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
