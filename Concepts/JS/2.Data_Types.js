
//JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

//1. Primitive data type   - data type can store only single value at a time.
//2. Non-primitive (reference) data type

//1.Primitive Data Types

  1.String 
  
  //A string in JavaScript must be surrounded by quotes.

    let str = "Hello";
    let str2 = 'Single quotes are ok too';
    let phrase = `can embed another ${str}`;

    //In JavaScript, there are 3 types of quotes.

    //Double quotes: "Hello".
    //Single quotes: 'Hello'.
    //Backticks: `Hello`.

    //Backticks are “extended functionality” quotes. 
    //They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

    let name = "John";

    // embed a variable
    alert( `Hello, ${name}!` ); // Hello, John!

    // embed an expression
    alert( `the result is ${1 + 2}` ); // the result is 3
  
  ************************************************************************************************************************************
  
  2.Number
      let n = 123;
      n = 12.345;
  //The number type represents both integer and floating point numbers.

      var c = 1 / 0;  // Infinity
  //Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
  
//NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
  var z = "laiq" + 5;   // 'laiq5'
  var y = undefined + 5;  // NaN

************************************************************************************************************************************
  3.Boolean
  
  //The boolean type has only two values: true and false.

  //This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
  
  ************************************************************************************************************************************

  4.Undefined
  //In JavaScript, undefined means a variable has been declared but has not yet been assigned a value, such as:

    var TestVar;
    alert(TestVar); //shows undefined
    alert(typeof TestVar); //shows undefined

    typeof(undefined);   -------> undefined
  ************************************************************************************************************************************

  5.Null
  //null is an assignment value. It can be assigned to a variable as a representation of no value:

    var TestVar = null;
    alert(TestVar); //shows null
    alert(typeof TestVar); //shows object

    typeof(null);   -------> object
  

  // very very IMP

  null === undefined // false
  null == undefined // true
  null === null // true
  ************************************************************************************************************************************
  6. BiInt
  
var a = Number.MAX_SAFE_INTEGER;
console.log(a);     // 9007199254740991

// here a is max safe integer value in js. if we plan to add 1 or 2 to a then it will give some unexpected results.
// sometimes it will give correct value and sometimes not. so to overcome this problem BigInt comes in picture.

var b = BigInt(9007199254740991);  // 9007199254740991n  //ES2020

// and if we add something to b then it will give correct results as it is BigInt value.

console.log( b + 5n); //9007199254740996n

  ************************************************************************************************************************************

    7. Symbol
    
  ************************************************************************************************************************************

      //NON PRIMITIVE DATA TYPES
      
      1.Object
