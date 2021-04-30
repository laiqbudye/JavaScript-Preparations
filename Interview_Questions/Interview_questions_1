//MORE QUESTIONS ON 

1. https://dev.to/macmacky/70-javascript-interview-questions-5gfi#6-what-is-event-propagation

2. https://www.edureka.co/blog/interview-questions/javascript-interview-questions/

//INTERVIEW QUESTION
// flat nested arrays using JS... without inbuilt flat method

const flatten = function(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

flatten([0, 1, 2, [[[3, 4]]]])  // [0, 1, 2, 3, 4]




-----------------------------------------------------------------------------------------------------------------------------------------

//1. call by value vs ref 
var arr = [1,2,3,4,5]
var count = 10;

function modify(array, number){
     array.push(6);
     number = number + 10;
}

modify(arr, count);
console.log(arr, count);



//2. variable Hoisitng

console.log(a);
console.log(b);

var a = 10;
var b = 20;



//3. function Hoisting

print();
write();

function print(){
    console.log("Printing...")
}

var write = function(){
    console.log("Writing...")
}


//4. Scope
var num = 10;

function printNum(){
    num = 20;
    return function(){
        var num;
        console.log(num);
    }
}

printNum()();
console.log(num);



//5. scope
var a = 10;

(function(){
   a = 20;
})()

console.log(a);


//6. closure 

//how to solve this to print 10,20,30,40 as output

var arr = [10, 20, 30, 40]

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log(arr[i])
    }, 2000)
}


//7. Currying
// convert add(a,b) to add(a)(b)

function add(a,b){   
	return a + b;
}

add(1,3);     // convert this function to add(a)(b);



//8. Async JS
console.log("first");

setTimeout(function(){
    console.log("second");
},0);

setTimeout(function(){
    console.log("third");
},2000)

console.log("forth");


//9.

function printName(name){
    return function(name){
        return name;
    }
};

printName("abc")("pqr")



//10. Promise
const p1 = new Promise((resolve, reject) => {
    reject(Error('Error Occurred'));
  })
  .catch(error => console.log(error))
  .then(error => console.log(error));



//11. Array methods
// write code to find average salary

const person = [
    { id: 1, name: 'abc', salary: 1000 },
    { id: 2, name: 'def', salary: 2000 },
    { id: 3, name: 'ijk', salary: 3000 },
    { id: 4, name: 'lmn', salary: 4000 }
];

avgSal(person);  


// ------------------------------ Logical questions

//1. WAP which will return each letter count in a given string without using any inbuilt functions.
// i/p - amazon
// o/p - {a 2, m 1, z 1, o 1, n 1}


//2. //WAP which will return Number into separate digits.

// i/p: [12, 34]
// o/p: [1, 2, 3, 4]


//3. flatten the array without using Array.flat() method.

// i/p: [1, 2, 3, [4, 5, 6], 7, [8, 9]]
// o.p: [1, 2, 3, 4, 5, 6, 7, 8, 9]


//4. Write a code which will remove duplicate elements from an array using 
// any of the Array method or using for loop

// i/p: [1,2,3,4,3,1,2];
// o.p: [1,2,3,4]


//5. WAP which will convert first letter of each word to uppercase
// i/p:- hello i am abc pqr xyz
// o/p:- Hello I Am Abc Pqr Xyz
