
//IIFE - stands for Immediately Invoked Function Expressions

(function(){
console.log("Hiii!!!");
})();       // Hiii

// this is an IIFE which will get execute as soon as it triggers line no.6

//IIFE is a function expression. we can write it like below aslo:-


(function(){
console.log("Hiii!!!");
}());       // Hiii


//if we have multiple files in one project and if we define var a = 100 in first file and var a = 200 in second file then  JS will take 
// second "a" as JS executes code from top to bottom. in such situations to avoid variable collision we can use IIFE.

// live examples

// we have used IIFE in our component store games.
// JQuery is also written inside IIFE.

// Why use IIFE?
//An Immediately Invoked Function Expression is a good way at protecting the scope of your function and the variables within it.
