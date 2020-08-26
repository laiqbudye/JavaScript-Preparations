// Array.sort()

//sort method sorts the number, strings, objects.

//e.g
const arr = [5,8,1,4,9,7]

arr.sort()

console.log(arr);  //  [1, 4, 5, 7, 8, 9]

--------------------------------------------------------------------------

const arr = [85,18,21,244,9,777]

arr.sort()

console.log(arr);  // [18, 21, 244, 777, 85, 9]

//in the above example we can see some weird o/p. this is because of sort method does sorting on the basis of first letter... (first it convert number to string, and then do sorting
on the basis of first letter of the string)

// we can solve this problem by passing custom function to sort method.

const arr = [85,18,21,244,9,777]
arr.sort(compare)   // [9, 18, 21, 85, 244, 777]
console.log(arr);

function compare(a,b){
    return a-b;    // this is for ascending result
    return b-a;    // this is for descending result
}


//ES6 version of same example

const arr = [85,18,21,244,9,777]
arr.sort((a,b) => a-b)   // [9, 18, 21, 85, 244, 777]
console.log(arr);

-------------------------------------------------------------------------------------------------------------------

// sorting of Strings
    
const arr = ['red', 'blue', 'Laiq']
arr.sort()  
console.log(arr);  // ["Laiq", "blue", "red"]


//for strings it sorts CAPITAL letters first then small

const arr = ['red', 'blue', 'Laiq', 45, 1]
arr.sort()  
console.log(arr);  // [1, 45, "Laiq", "blue", "red"]
