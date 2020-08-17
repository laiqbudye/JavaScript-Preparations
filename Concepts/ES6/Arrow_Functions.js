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

-----------------------------------------------------------
  
  
var obj = {
    name1: 'Iqbal',
    print: function(){
        setTimeout(function(){
            console.log(this.name1);   // undefined, as this is poining to window heree
        },0)
    }
}

obj.print();

// this is problem with normal function as it is dynamically scoped ie. this obj inside print method points to obj,,, but inside setTimeout func it is pointing to window obj.

//we can solve this issue by using arrow function
var obj = {
    name1: 'Iqbal',
    print: function(){
        console.log(this);
        setTimeout(() => {
            console.log(this.name1);   // Iqbal
        },0)
    }
}
// here THIS is lexically scoped, means line 50 will get lexical this passed by settimeout func,,, & settimeout gets lexical this passed by print func which is pointing to obj.

// we can also solve this issue by using bind method

var obj = {
    name1: 'Iqbal',
    print: function(){
        console.log(this);
        setTimeout(function() {
            console.log(this.name1);   // Iqbal
        }.bind(this),0)
    }
}


// also there is most widely used approach to solve this as below

var obj = {
    name1: 'Iqbal',
    print: function(){
        var that = this;
        setTimeout(function() {
            console.log(that.name1);  // Iqbal
        }.bind(this),0)
    }
}


