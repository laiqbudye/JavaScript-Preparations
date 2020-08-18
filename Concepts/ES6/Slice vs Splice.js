//Splice

//splice is an array method which returns removed element from an array.
//this method mutates(changes) original array
//this method can be used for adding/removing elements in an array

//splice can take n no. of args...

//1. index - (Required) - this is starting point. 
//2. optional - no. of args to be removed. if set to 0, then no elements remove,  if set to 2 then including index position element it will remove two elements
//3. optional - The new item(s) to be added to the array.

//e.g
var array=[1,2,3,4,5];
console.log(array.splice(2));
// shows [3, 4, 5], returned removed item(s) as a new array object.
 
console.log(array);
// shows [1, 2], original array altered.
------------------------------------------------------------------------------------------------------
var array2=[6,7,8,9,0];

console.log(array2.splice(2,1));     // shows [8]
 
console.log(array2.splice(2,0));     //shows [] , as no item(s) removed.
 
console.log(array2);                // shows [6,7,9,0]
----------------------------------------------------------------------------------------------------

var array3=[6,7,8,9,0];
console.log(array3.splice(2,0,1,2,3));          // []
console.log(array3);      // [6, 7, 1, 2, 3, 8, 9, 0]

----------------------------------------------------------------------------------------------------

var array4 = [6,7,8,9,0];
console.log(array4.splice(3,1,11));    //[9]   // third index.. remove 1 element..... add new element 11
console.log(array4);   // [6, 7, 8, 11, 0]




//2.Slice
// as the name suggests slice method returns piece of an array from the original array.
//slice does not mutate(change) the original array
//this method takes 2 args

//1.index(required) - An integer that specifies where to start the selection... includes index element also like splice
//2.end (optional) - An integer that specifies where to end the selection but does not include.

//if second param is not defined then it will consider till end of the array.
//if you want to slect elemens from end of an array... then give negative values.

//e.g
var array=[1,2,3,4,5]
console.log(array.slice(2));    // [3, 4, 5], returned selected element(s).
console.log(array);     //[1,2,3,4,5]


console.log(array.slice(-2));     //  [4, 5], returned selected element(s).
console.log(array);         //  [1, 2, 3, 4, 5], original array remains intact.


var array2=[6,7,8,9,0];
console.log(array2.slice(2,4));   // shows [8, 9] //here it excludes end index... but includes first index

 console.log(array2.slice(-3,-1));     // shows [8, 9]
