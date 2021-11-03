//There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

//It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ...argN) => expression

//In other words, it’s the shorter version of:

let func = function(arg1, arg2, ...argN) {
  return expression;
};


//For e.g,
let sum = (a, b) => a + b;

// This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};


alert( sum(1, 2) ); // 3



// if we are passing only one argument to function then we can omit brackets around arguments. e.g

let printName = name => console.log(name);

printName("Laiq");


//if we are not passing any argument to the function then also we have to write paranthesis. we cant omit them in that case.

let abc = () => console.log("This is without arguments");
abc();


//For instance, to dynamically create a function:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome(); // Greetings!



//for Multi line Arrow Functions

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3



************************************************************************************************************************
  
Arrow functions over normal functions

both Arrow functions & normal functions are used to define functions, but its important to decide which one to chosse.
below are some differeneces:-
  
  1. this Value
  
  Normal Function
    - this is dynamically scoped in normal function.i.e. value of this depends on how function got called.
        
    // Regular function
        function myFunction() {
          console.log(this);
        }
         myFunction(); //global obj
    

    // method Invocation
    const myObject = {
        method() {
          console.log(this);
        }
      };
    myObject.method(); // myObject


    // constructor invocation
    function MyFunction() {
      console.log(this);
    }
    new MyFunction();   // MyFunction {}

    // nested function
    const myObject = {
        myMethod() {
            console.log(this); // logs myObject
            function callback() {
                console.log(this); // logs global obj
            };
            callback()
        }
    }

    myObject.myMethod();


   // to solve the above problem, we have to use below approach
    const myObject = {
        myMethod() {
            var that = this;
            console.log(this); // logs myObject

            function callback() {
                console.log(that); // logs myObject
            };
            callback()
        }
    }

    myObject.myMethod();


  // same problem can be solved using arrow function.  

  Arrow Function
    - the behaviour of this inside an arrow function is different from normal function.
    - this is lexically scoped in Arrow function. i.e value of this depends on where it is written.
    - it doesnt define its own execution context
    - THIS VALUE INSIDE OF AN ARROW FUNCTION ALWAYS EQUALS THIS VALUE FROM THE OUTER FUNCTION
    
    const myObject = {
        myMethod() {
            console.log(this); // logs myObject
            const callback = () => {
                console.log(this); // logs myObject
            };
            callback()
        }
    }

    myObject.myMethod();


  2. Constructor
    Normal function
      - regular functions can easily construct objects
      
       function Car(color) {
          this.color = color;
        }
        const redCar = new Car('red');
        redCar instanceof Car; // => true
        
        
     Arrow function
       - as this resolves lexically in arrow functions, they cant be used as constructors.
        
        const Car = (color) => {
          this.color = color;
        };
        const redCar = new Car('red');  // TypeError: Car is not a constructor


  3. Arguments object
    arrow functions dont have "arguments" object
    
    function myRegularFunction() {
      const myArrowFunction = () => {
        console.log(arguments);    // here as arrow fn do not have arguments, they print arguments from its parent function  // logs { 0: 'a', 1: 'b', length: 2 }
      }
      myArrowFunction('c', 'd');
    }
    myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }
  


    4. methods
      Normal Function
      
      class Hero {
          constructor(heroName) {
              this.heroName = heroName;
          }
          logName() {
              console.log(this.heroName);   // undefined.... here this will point to the Timeout obj of settimeout
          }
      }
      const batman = new Hero('Batman');

      setTimeout(batman.logName, 1000);
  
        
      Arrow function

      class Hero {
          constructor(heroName) {
              this.heroName = heroName;
          }
          logName = () => {    // here it binds this lexically to the class instance
              console.log(this.heroName);   // Batman .. as we have arrow fn here, it doesnt matter how it got called... it checks  where it is written
          }
      }
      const batman = new Hero('Batman');

      setTimeout(batman.logName, 1000);



