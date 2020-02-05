//There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

//It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ...argN) => expression

//In other words, it’s the shorter version of:

let func = function(arg1, arg2, ...argN) {
  return expression;
};


//For e.g,
let sum = (a, b) => a + b;

// This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};


alert( sum(1, 2) ); // 3
