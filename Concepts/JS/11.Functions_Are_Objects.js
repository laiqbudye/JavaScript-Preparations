
// In JS functions are objects. e.g

var a = new Function('num','return num');

a(2);   //2

//here we have created function usiing function constructor. it takes multiple parameter out of which 
//last parameter is always the code to be execute on calling.

function print(){
console.log("Laiq");
}

print();    //Laiq

// we can do like 
print.name;  // print     // this refers to the function name
print.lastname : 'Budye';

// here for above example js will create a special callable object underneath the hood.
// which will look like this

const specialobj = {
lastname: 'Budye',         // refers to the property that we have added explicitly
name: 'print',            // refers to the function name of the function
() : console.log("Laiq");   // refers to code of the function
}


// Functions are FIRST CLASS CITIZENS in js because

// 1. we can assign functions to the varible

var a = function(){
console.log("I am function");
}

// 2. we can pass one function to another as a parameter

function a(){
console.log("I am A");
}

function b(fn){
  fn();
}

b(a);      // I am A

//3. we can return one function form other function

function x(){
  return function y(){
  console.log("I am Y");
  }  
}

x();      //return function y()
x()();      //I am Y


//because of all this functions are FIRST CLASS CITIZENS in JS.


//HOF - HIGHER ORDER FUCTIONS

// hof is a function which takes other function as a parameter or return function as its o/p.
