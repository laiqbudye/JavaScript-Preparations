
// Prototypes 

//In JS every function has prototype property which refers to an object, from which it inherits the properties/methods.

// e.g
// we can create an object using object.create which will allow us to look on the object which is passed inside it.
function Animal (name, energy) {
  let animal = Object.create(Animal.prototype)        // it is allowing us to look onto animal.prototype in case of failed lookup
                                                      //also object.create sets animal.__proto to Animal.prototype
  animal.name = name
  animal.energy = energy

  return animal
}

Animal.prototype.run = function(){
    console.log("Running")
}

let horse = Animal("Raja", 50);
horse.name;     //Raja
horse.run();    //Running   // it gets called from prototype

************************************************************************************************************************************************
  
//   Use of NEW Keyword
  
  function Animal (name, energy) {
//   let this = Object.create(Animal.prototype)        // line 29 & 33 are done implicitly by JS if we create an object using new keyword.
  this.name = name
  this.energy = energy
//   return this
}

Animal.prototype.run = function(){
    console.log("Running")
}

let horse = new Animal("Raja", 50);     // it will create an object of type animal and set its __proto__ to Animal.prototype
horse.name;     //Raja
horse.run();    //Running   // it gets called from prototype


***********************************************************************************************************************************
  
//   e.g
  
  const arr = [];             // which is equivlent to const arr = new Array();

arr.push("1");   // from where this push method came from?   its from Array.prototype

// in the above e.g arr first look for push method in itself, if doesnt found then it go to Array.prototype which is linked to arr.__proto__
// if still not found again it will go up like arr.__proto__.__proto__

arr.__proto__.__proto__ === Array.prototype.__proto__     // true (referring to main object from which all objects, array, functions get create)

arr.__proto__.__proto__.__proto__    // null, whenenver we cross base object in look up it returns NULL.

arr.__proto__ === Array.prototype   // true

***********************************************************************************************************************************
  
  
//   for…in loop
// The for..in loop iterates over inherited properties too.

// For instance: 

let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal         //never assign values like this, it causes performance issues
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats

// .. to fix above problem 

for(let prop in rabbit){
  if(rabbit.hasOwnProperty(prop)){        // returns only own properties
    console.log(prop);                    // jumps 
  }
}
