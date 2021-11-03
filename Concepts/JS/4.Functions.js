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



// write a program which will add numbers without using parameters.

function add(){
    let result = 0;

    for(let i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

add(1,2,3,4,5,6,7,8);     // 36



Pure Functions:-
  - Pure Functions are functions that return same output every single time when we pass same inputs.
  - they dont include any side effects
  - they should not change any value outside the function
    e.g
    //impure function
    const array = [1,2,3,4];

    function addElementToArray(element){
        array.push(element)    // here we are pushing value in global array ie. changing global array from inside function.. so this is impure function
    }

    addElementToArray(5);
    console.log(array);   // [1,2,3,4,5]  
    

    // impure function
    const array = [1,2,3,4];

    function addElementToArray(a, element){
        a.push(element)   // here again we are changing input value.. so this is impure function
    }

    addElementToArray(array, 5);
    console.log(array);  // [1,2,3,4,5]  


    //Pure function
    const array = [1,2,3,4];

    function addElementToArray(a, element){
        return [...a, element];    // here we are not changing any value in global scope nor changing any input value
    }

    let newArr = addElementToArray(array, 5);
    console.log(newArr);  // [1,2,3,4,5]  
    console.log(array);   // [1,2,3,4]  

    console.log(newArr);  // [1,2,3,4,5]   
    console.log(array);   // [1,2,3,4] 

// so we can see in the above example, it is returning same output each time when passed same inputs. also it is not changing any value i.e this is PURE function.
