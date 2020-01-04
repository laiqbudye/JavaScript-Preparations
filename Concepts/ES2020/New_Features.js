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
