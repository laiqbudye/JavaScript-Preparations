//Javascript has introduced ES2020 with 5 cool new features.

//1. GlobalThis
// why we need GlobalThis??

// in JS window, this, self, frames all these refer to window object.
// but if you are using web worker then only "self" will work there.
// in node.js there is seprate object called global. so to make it common on all platforms JS has introduced globalThis object.

conosle.log(globalThis);    //Window {parent: Window, opener: null, top: Window, length: 1, frames: Window, …}

//2. Promise.allSettled()


//3. Nullish CoalSecing Operator


//4. Optional chaning operator 


//5. BigInt

//BigInt

var a = Number.MAX_SAFE_INTEGER;
console.log(a);     // 9007199254740991

// here a is max safe integer value in js. if we plan to add 1 or 2 to a then it will give some unexpected results.
// sometimes it will give correct value and sometimes not. so to overcome this problem BigInt comes in picture.

var b = BigInt(9007199254740991);  // 9007199254740991n  //ES2020

// and if we add something to b then it will give correct results as it is BigInt value.

console.log( b + 5n); //9007199254740996n
