
//This - this is an object that function is a property of

// e.g

function printName(){
console.log(this);    
}

printName();               // window object

// here at line number 10 where we called printName, JS will look that line as window.printName().  
// so as per our definition printName is a property of window object, thats why here this will refer to window object.

var obj = {
name: "Laiq",
print: function(){
console.log(this.name);
console.log(this);
}
}

obj.print();    // laiq,    obj{}

// in the above example this refers to object obj whose property is print.

// for better understandin, this refers to the object which is placed at just before dot notation.
// e.g

obj1.print();         // this refers to obj1
animal.eat();           // this refers to animal
obj1.obj2.print();          // this refers to obj2



// e.g

const a = function(){
  console.log(this);
  const b = function(){
  console.log(this);
  }
  const c = {
  hi: function(){
  console.log(this);
  }
 }
  c.hi();         // c { hi: fun......}
}b();         // window obj
}
a();    // window obj



// imp note:- THIS KEYWORD IS NOT LEXICALLY SCOPED i.e IT DOES NOT MATTER WHERE IT IS WRITTEN, IT MATTERS HOW THE FUNCTION IS CALLED/INVOKED
// see example below:-

const obj = {
name: "Billy",
sing(){
console.log(this);        //obj{}
var anotherfunction = function(){
console.log(this);        //window
}
anotherfunction();
} 
}
obj.sing();

// we can solve above problem by one of the ways from below:

// 1. var that = this

const obj = {
name: "Billy",
sing(){
console.log(this);        //obj{}
 var that = this;
var anotherfunction = function(){
console.log(that);        //obj{}
}
anotherfunction();
} 
}
obj.sing();


// 2. bind method

const obj = {
name: "Billy",
sing(){
console.log(this);        //obj{}
var anotherfunction = function(){
console.log(this);        //obj{}
}
return anotherfunction.bind(this);   // here this refers to obj, so inside anoterfunction it will refer to obj only
} 
}
obj.sing();


// 3. Arrow function

// Arrow functions are lexically scoped, i.e they refer to the object in which they are written instead of how they get called.
const obj = {
name: "Billy",
sing(){
console.log(this);        //obj{}
var anotherfunction = () => {
console.log(this);        //obj{}
}
anotherfunction();
} 
}
obj.sing();



