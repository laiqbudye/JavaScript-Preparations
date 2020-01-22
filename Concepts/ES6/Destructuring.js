
//1. What is Destructuring?

//Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, 
//into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.

//Destrucring of Arrays

let numArray = [10,20,30];
let [a,b] = numArray;

console.log("a: " + a + " b: " + b);    // a: 10 b: 20


// If we do like below

let [a, ,b] = numArray;       // a: 10 b: 30
// then second element will be skipped and b will be 30
// Note: but this will not work for objects


// If we add more variable than array length then?
let [a,b,c,d] = numArray; // a: 10 b: 20 c: 30 d: undefined 


//2. Rest Operator
//We can copy array elements using rest operator also as below:-

let [...b] = numArray;  // b: 10,20,30

let [a,...b] = numArray;   //a:10, b:20,30


//3. Destructring of Objects

// Uses of Destructuring in objects

let personObject = { name: 'Laiq', lastname: 'Budye', address: 'Pune' };

let {name, lastname} = personObject;    // you have to give property name in let{}.  here {} is not define object it's desturcturing syntax

console.log('Name: ' + name + ' LastName: ' + lastname);    //Name: Laiq  Lastname: Budye

// below is the tricky thing that you can not skip and expect to work it like array

let {name, , lastname} = personObject;  // this will throw an error here, Syntax error: Unexpected token


//for more info:- https://wesbos.com/destructuring-objects/
