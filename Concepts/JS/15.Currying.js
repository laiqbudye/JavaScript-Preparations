
//Given a function with 3 parameters, the curried version will take one argument and return a function that takes the next argument, 
//which returns a function that takes the third argument. The last function returns the result of applying the function to all of its 
//arguments.


// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

// Currying doesn’t call a function. It just transforms it.

// we can achieve currying in two ways:

// 1. using bind method
// 2. Function closures

// 1.using bind method

var multiply = function(a,b){
    return a*b;
}

var multiplybytwo = multiply.bind(this,2);      //.. here it will bind this and 2 with multiply func and store that in multiplybytwo

multiplybytwo(5);   //10

var multiplybythree = multiply.bind(this,3);

multiplybythree(5);   //15



************************************************************************************************************************************
    
// 2.Using function closures
    
var multiply = function(a){
    return function(b){
        return a*b;
    }
}


var multiplybytwo = multiply(2);    // here value 2 will get assign for a, and it get closured

multiplybytwo(10);      // it will multiply 10 with 2 which is a closure variable.

