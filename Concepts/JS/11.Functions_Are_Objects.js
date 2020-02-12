
// In JS functions are objects. e.g

var a = new Function('num','return num');

a(2);   //2

//here we have created function usiing function constructor. it takes multiple parameter out of which 
//last parameter is always the code to be execute on calling.

function print(){
console.log("Laiq");
}

print();    //Laiq

// we can do like 
print.name;  // print     // this refers to the function name
print.lastname : 'Budye';

// here for above example js will create a special callable object underneath the hood.
// which will look like this

const specialobj = {
lastname: 'Budye',         // refers to the property that we have added explicitly
name: 'print',            // refers to the function name of the function
() : console.log("Laiq");   // refers to code of the function
}
