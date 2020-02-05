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



// if we are passing only one argument to function then we can omit brackets around arguments. e.g

let printName = name => console.log(name);

printName("Laiq");


//if we are not passing any argument to the function then also we have to write paranthesis. we cant omit them in that case.

let abc = () => console.log("This is without arguments");
abc();


//For instance, to dynamically create a function:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome(); // Greetings!



//for Multi line Arrow Functions

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
