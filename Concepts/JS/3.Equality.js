
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
