// classes 

// Class is just a syntactical sugar in JS.

// Underneath the hood it performs prototypal inheritace only. it is just a new and easy way of writing it.

// e.g  USING NORMAL PROTOTYPES CONCEPT
// we have animal constructor function from which we can create other animals. 

function Animal (name, energy) {
  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}


function Dog (name, energy, breed) {
  Animal.call(this, name, energy)			// here we are inheriting properties from animal class

  this.breed = breed				// addig properties that we need only for Dog
}

Dog.prototype = Object.create(Animal.prototype)		//setting Dog's prototype to animals prototype as we have to inherit its methods from animals prototype 

Dog.prototype.bark = function () {			// adding Dog specific method
  console.log('Woof Woof!')
  this.energy -= .1
}

Dog.prototype.constructor = Dog			// due to line Dog's constructor was set to animals constructor, now we have assigned it to Dog's constructor


const leo = new Dog('Leo', 7,"Golden")

*****************************************************************************************************************************************
  
//   USING ES6 CLASSES CONCEPT
      
 class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  sleep() {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  play() {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

class Dog extends Animal {                // this is same as line no.37, here it inherits all properties/methods of an Animal class
  constructor(name, energy, breed) {      // this is same as line no.32
    super(name, energy) // calls Animal's constructor
    this.breed = breed
  }
  bark() {
    console.log('Woof Woof!')
    this.energy -= .1
  }
}

const leo1 = new Dog('Leo', 9,"RED")
