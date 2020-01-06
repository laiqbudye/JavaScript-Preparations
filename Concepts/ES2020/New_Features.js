//Javascript has introduced ES2020 with 5 cool new features.

//1. GlobalThis
// why we need GlobalThis??

// in JS window, this, self, frames all these refer to window object.
// but if you are using web worker then only "self" will work there.
// in node.js there is seprate object called global. so to make it common on all platforms JS has introduced globalThis object.

conosle.log(globalThis);    //Window {parent: Window, opener: null, top: Window, length: 1, frames: Window, …}

/*------------------------------------------------------------------------------------------*/

//2. Promise.allSettled()

//The Promise.allSettled() method returns a promise that resolves after all of the given promises have either resolved or rejected,
//with an array of objects that each describes the outcome of each promise.


var p1 = new Promise((resolve, reject) => setTimeout(resolve, 100));
var p2 = new Promise((resolve, reject) => setTimeout(reject, 100));
var p3 = new Promise((resolve, reject) => setTimeout(resolve, 100));

Promise.allSettled([p1,p2,p3]).then(results => 
                        results.forEach(result => console.log(result))
                        );

/*---------------------------------------------------------------------------------------*/

//3. Nullish CoalSecing Operator

// this feature comes into picture to overcome drawbacks with OR(||) operator.

let x = {
    name : "",
    age : 0
}

console.log(x.name || "Laiq");  // Laiq // ES5
console.log(x.age || 23);       // 23

console.log(x.name ?? "Laiq");  // ""     //ES2020
console.log(x.age ?? 23);       //0       // ES2020


/*--------------------------------------------------------------------------------------*/
            
//4. Optional chaning operator 

// this is best feature when we have to check any method or variable inside two or three nested objects

let x = {
    y : {
        z : {
            name : "Laiq"
        }
    }
}

console.log(x && x.y && x.y.z && x.y.z.name);  // ES5

console.log(x.y?.z?.name);   // ES2020

/*------------------------------------------------------------------------------------*/
//5. BigInt

var a = Number.MAX_SAFE_INTEGER;
console.log(a);     // 9007199254740991

// here a is max safe integer value in js. if we plan to add 1 or 2 to a then it will give some unexpected results.
// sometimes it will give correct value and sometimes not. so to overcome this problem BigInt comes in picture.

var b = BigInt(9007199254740991);  // 9007199254740991n  //ES2020

// and if we add something to b then it will give correct results as it is BigInt value.

console.log( b + 5n); //9007199254740996n
            
/*-----------------------------------------------------------------------------------------*/
