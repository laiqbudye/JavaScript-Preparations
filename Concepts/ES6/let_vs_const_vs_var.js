
Var has function scope.

e.g

var a = 100;
var a = 200;     

// it will print 200; it will override previous var a.




let has block scope.

e.g

let b = 300;
var b = 400;

// it will throw an error.  Uncaught SyntaxError: Identifier 'b' has already been declared
----------------------------------------------------------------------------------------------------------
var b = 400;
let b = 300;

// for this also it will throw error. Uncaught SyntaxError: Identifier 'b' has already been declared
---------------------------------------------------------------------------------------------------------
  
let b = 300;
const b = 500;
// for this also it will throw error. Uncaught SyntaxError: Identifier 'b' has already been declared



const has block scope

e.g
var c = 600;
const c = 500;

// for this also it will throw error. Uncaught SyntaxError: Identifier 'c' has already been declared


