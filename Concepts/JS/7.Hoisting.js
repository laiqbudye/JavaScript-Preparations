
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
//this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether 
//their scope is global or local.

//This is proper definition but i want to make it simple to understand better.

// JS runs the code in two phases:
// 1. Creational Phase
// 2. Executional Phase

// 1. Creational Phase - in this phase JS will go through all the code from top to bottom. Whenever it come across var or function it will 
// assign memory to them in the heap. for var it will just assign undefined and for functions, it will copy the whole function to heap as 
//it is.

// e.g.

var a = 1;
var b = 2;

function add(){
  var c = a+b;
  return c;
}

//after creational phase the abpve code will look like

var a = undefined;
var b = undefined;
function add(){
  ---------     // it will copy the content of the function as it is.
}

// 2. Executional Phase
  
//  after creational phase JS will start exeutional phase, in which it will start executing the code.
//  when it come across function, it will again start creational phase inside that function (do hoisting inside function) & then executional 
//  phase.
  
  

  
  
  //Examples of hoisting
  
  console.log(x);    //undefined
  console.log(y);    //udnefined
  printName();       //"Laiq"
  var x = 10;
  var y = 20;
  function printName(){
  console.log("Laiq");
  }
  
  
// Hoisting of let & CONST
  
// Very IMP:
  
console.log(a);     //ReferenceError: a is not defined
let a = 3;
  

//So are let and const variables not hoisted?
//The answer is a bit more complicated than that. All declarations (function, var, let, const and class) are hoisted in JavaScript,
//while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.
  
  
  
  
// HOISTING OF FUNCTION EXPRESSIONS
  
// Only function declarations are hoisted in JavaScript, function expressions are not hoisted. For example: this code won’t work.
  
  
helloWorld();  // TypeError: helloWorld is not a function
var helloWorld = function(){
  console.log('Hello World!');
}


// As JavaScript only hoist declarations, not initializations (assignments), so the helloWorld will be treated as a variable, not as 
// a function. Because helloWorld is a var variable, so the engine will assign is the undefined value during hoisting.


// So this code will work.


var helloWorld = function(){
  console.log('Hello World!');  prints 'Hello World!'
}
helloWorld();
  

 
//for more info visit: https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda
