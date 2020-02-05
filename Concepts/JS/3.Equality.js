
// in JS there are two ways by which we can compare the values.

//1. == (Loose Equality)
//2. === (Strict Equality)

// for Loose Equality, JS internally do type coercion i.e. converting value from one type to another (such as string to number, 
// object to boolean, and so on).

if("21" == 21)   // return true
  
if("569" == 569)   // return true
  
alert( null == undefined ); // true



// Strict Equality

//Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared.
//If the values have different types, the values are considered unequal. If the values have the same type, are not numbers, and have the same value, they're considered equal.


if("21" === 21)   // return false
  
if("569" === 569)   // return false
  
alert( null === undefined ); // false



// Strange result: null vs 0
// Let’s compare null with a zero:



alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

// Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons 
//above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently. 
//Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, 
//they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
