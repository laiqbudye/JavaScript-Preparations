
// If src is set, the script content is ignored.
// A single <script> tag can’t have both the src attribute and code inside.


<script src="file.js">
  alert(1); // the content will be ignored, because src is set
</script>

**********************************************************************************************
  
//SEMICOLON

//A semicolon may be omitted in most cases when a line break exists.

//This would also work:

alert('Hello')
alert('World')

alert(3 +
1
+ 2);  //o/p ---> 6

**********************************************************************************************

// USE STRICT

//The "use strict" directive switches the engine to the “modern” mode, changing the behavior of some built-in features. 
//Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.

//Strict mode isn’t enabled here:
-----------------------------------------------
alert("some code");
// "use strict" below is ignored--it must be at the top

"use strict";

// strict mode is not activated here


//Only comments may appear above "use strict".
-------------------------------------------------
//by using this it will require
//1. Function parameter names must be unique (function sum (x, x) {...})
//2. Requires all property names in an object literal to be unique (var x = {x1: "1", x1: "2"})
//3. Attempts to delete undeletable properties will throw (delete Object.prototype)
//4. prevents to accodental declaration of variables  e.g shouldShowPrompt = false;    // this will throw an error as there is no let, var or const.
 
//for more visit:- https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it

  **********************************************************************************************
  
  ###Execution Context

// everything in js is done inside execution context.
// whenever we start running JS code a global execution context is created, when we call a function then brand new Execution context is created for that function

// whenever browser runs any JS code, it first create xecution context in which our code gets run.
// in the execution context it creates two things
//1. global Object (window object)
//2. this 
  

//it is very important in JS, it contains two parts.
1. memory - here is stores all the code in key: value pair. e.g. a: 10 for var a = 10;
2. code - actual code runs
  
  ***********************************************************************************************
// VARIABLE
  
// variable is a container in which we can store data and can use it later as per our need.


  // We can declare varibale by three types. 
  //1. Var
  
  var a = 10;   // anything declared with var has a funcion scope.

  //2. Let
  let b = 20;   // anything declared with let has block scope.

  //3.const
  const c = 30;   // same as let, it also has block scope but we cant reassign value to const.

// but we can add or delete values (push/pop) from const.

const a= {
    b: '10'
}

a.c = '20';   //-------------> {b:'10',c:'20'}

delete a.c;   //-------------> {b:'10'}

//same will apply for arrays also

const b = [10,20,30];

b.push(40);   // 10,20,30,40

b.pop();    //10,20,30
