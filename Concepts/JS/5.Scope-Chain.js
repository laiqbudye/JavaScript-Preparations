
//What is Scope?

//it is an area to which variable or function is accessible.

//Why is Scope Important?
// The main benefit of scope is security. That is, the variables can be accessed from only a certain area of the program. 
// Using scope, we can avoid unintended modifications to the variables from other parts of the program.
// The scope also reduces the namespace collisions. That is, we can use the same variable names in different scopes.

// There are three types of scope in JavaScript — 1) Global Scope, 2) Function Scope, and, 3) Block Scope.


//when any varibale used inside function, JS engine will try to find that variable in its current scope first, if its not found then it will
// search in its parent scope & so on til global scope.

function a(){
  var x = 'laiq';
  console.log(y);   // error
  function b(){
    var y = 'iqbal'
    console.log(x);     // laiq
    function c(){
        var z = 'budye'
        console.log(z);     // budye
      }
   }
}


//as in the above example function c can access values from function a & b. but a can not access values from c.


### Dont confuse between lexical scope and lexical enviornment.

//Lexical Scope - it is the scope of variable / function in which particular variable is accessible. it is determined at compile-time.
 
//Lexical Enviornment - it is the place where identifier-variable mapping is defined. identifier is the name of the varible/function.
// and variable is the actual reference to the object, [including function object and array object] or primitive value).

// e.g

lexicalEnvironment = {
  a: 25,
  obj: <ref. to the object>
  outer: <outer lexical environemt>      // this is linking to outer enviornment. JS will look up to the outer enviorment from here.
}


// e.g

let greeting = 'Hello';
function greet() {
  let name = 'Peter';
  console.log(`${greeting} ${name}`);
}
greet();
{
  let greeting = 'Hello World!'
  console.log(greeting);
}


// When the above script loads, a global lexical environment is created, which contains variables and functions defined inside the 
// global scope. For example:

globalLexicalEnvironment = {
  greeting: 'Hello'
  greet: <ref. to greet function>
  outer: <null>
}

// Here outer lexical environment is set to null because there is no outer scope after global scope.

// After that, a call to the greet() function is encountered. So a new lexical environment is created for the greet() function. 
//For example:

functionLexicalEnvironment = {
  name: 'Peter'
  outer: <globalLexicalEnvironment>
}

// Here outer lexical environment is set to globalLexicalEnvironment because its outer scope is the global scope.
