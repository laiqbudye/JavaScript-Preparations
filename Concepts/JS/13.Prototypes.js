
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
