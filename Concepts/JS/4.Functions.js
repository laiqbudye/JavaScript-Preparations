###Functions

//A function is a set of statements that take inputs, do some specific computation and produces output.
//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).

//Function Declaration/Definition
//To create a function we can use a function declaration.

//It looks like this: it is also called as function definition.
//Function declaration/definition get hoisted

function showMessage() {  
  alert( 'Hello everyone!' );               //function Declaration
}

//Fnction Expression does not get hoisted.
//Function Expression

//JavaScript function can also be defined using an expression.
//function expression can be stored in a variable:

var x = function (a, b) {
  return a * b                            // function Expressions
};

x();  // now function is inside of X. if we execute x then it will run the function.

//after a function expression has been stored in a variable, the variable can be used as a function. 
//functions stored in variables do not need function names. They are always invoked (called) using the variable name.

//Similar to the var statement, function declarations are hoisted to the top of other code. 
//Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.



// WE can copy one function to another function also.

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too 



### ARGUMENTS keyword

// with each execution context we get two things.
//1. this 
//2. arguments

// arguments is an object which holds the values that we pass to the function.

function add(a,b){
  console.log(arguments);    // Arguments{0: 5, 1: 6}
  console.log(Array.from(arguments));   // [5, 6]...... convert an object to array
  console.log(arguments[0]);    //5
  console.log(arguments[1]);    //6
}

add(5,6);

// if we dont pass any arguments to the function then arguments will return an empty object.

function print(){
  console.log(arguments);   //  {}
}

