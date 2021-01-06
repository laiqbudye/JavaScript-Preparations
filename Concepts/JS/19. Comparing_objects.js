There are two types we can compare the objects.

1. shallow comparison
2. deep comparison



As we know the objects or arrays are references in javascript.

{} === {}  // false, as these two objects points to diferent memory location.

1. shallow comparison
in shallow comparison of two objects it checks for strict equality of immediate properties.

const state = {
    favNumber: 42,
    name: "Bob"
}


const state2 = {
    favNumber: 42,
    name: "Bob"
}

in this case it will check for state.favNumber === state2.favNumber  &&  state.name === state2.name   // true, it will chek type & content both (===)
so the above two objects are shallow equal.

but if we have nested object/ array inside it like,

const state = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}


const state2 = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}


here it will chek for strict equality of state.favNumber === state2.favNumber  &&  state.name === state2.name  // true
 and also chek for complex types like array or objects
 
 state.address === state2.address //false,  here it will chek for references of an objets, which are different in this case
 
 so the above two objects are not shallow equal in this case.
 

for more reference:- https://scrimba.com/scrim/c2Paa6uV
 
 
 
 2. Deep Comparison

 in the deep comparison it checks for strict equality of all the properties including nested objects.
 
 
 const state = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}


const state2 = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}


in the above example it will chek for each & every property including nested objects/arrays for strict equality.


examples are as follows:-
    
    user1 = {
    name: "John",
    address: {
        line1: "55 Green Park Road",
        line2: "Purple Valley"  
    }
}

user2 = user1;
// user1 === user2 true
// shallowEqual(user1, user2) true
// deepEqual(user1, user2) true



user2 = {
    name: "John",
    address: user1.address
}
// user1 === user2 false
// shallowEqual(user1, user2) true
// deepEqual(user1, user2) true



 user2 = {
    name: "John",
    address: {
        line1: "55 Green Park Road",
        line2: "Purple Valley" 
    }
}
// user1 === user2 false
// shallowEqual(user1, user2) false
// deepEqual(user1, user2) true

for more reference:- https://www.mattzeunert.com/2016/01/28/javascript-deep-equal.html
 
 
 
 
