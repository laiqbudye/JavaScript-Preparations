
// there arer 2 pillars of JS

//1.Closure   2. Prototypes

//Closure allow a function to access variable from an enclosing scope or enviornment even after it leaves the scope in which it is declared.

// in my words, closure allows to access variables from an outer function even after that outer function get executed and popped of from stack.

// e.g

function a(){
var name = "Laiq";
return function b(){
  var midName = "Iqbal";
  console.log(name + " " + midName);    //Laiq Iqbal
  return function c(){
    var lastName = "Budye";
    console.log(name + " " + midName + " " + lastName);     //Laiq Iqbal Budye
  }
}
}

a()()();  

// in the above function a is returning func b which is again returning func c. while executinng, function a gets called which will return 
// func b and gets popped of from stack,  same func b will return func c and get popped of from stack.
// now func c still have access to variable name and midName from func a & b respectively. how is that possible??

// this is possible because of closure.
// when function a gets pop off from stack garbage collector will look for var name, and it looks that somethig is referencing that variable,
// so it will leave that variable as it is and move it to the closure. in this way closure works internally.
