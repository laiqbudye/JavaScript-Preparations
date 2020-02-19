classes 

Class is just a syntactical sugar in JS.

Underneath the hood it performs prototypal inheritace only. it is just a new and easy way of writing it.

e.g
we have animal constructor function from which we can create other animals. 

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
