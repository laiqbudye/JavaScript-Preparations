//Arrow Functions

// Arrow functions are same as normal functions but we can write it in shorter form. the only difference is with THIS keyword.

// for normal functions THIS is dyanamically scoped i.e how the function get called.. (here this points to immediate left of dot) obj1.print() , so this points to obj1

// for arrow functions THIS is lexically scope i.e where THIS is written.

//normal function

function printName(name){
  console.log(this);     // window obj
  console.log(name);    // Laiq
}

printName('Laiq');


// same function with arrow function

const printName = (name) => {
  console.log(this);     // window obj
  console.log(name);    // Laiq
}

printName('Laiq');
