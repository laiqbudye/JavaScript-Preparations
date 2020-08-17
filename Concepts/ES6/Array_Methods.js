// Array methods.

//1.Array.map()

// Array.map returns a new array of elements where you have applied some function on the element
// this method does not change original array.. we can still get origianl array by its name.

//use map only if you are using returned array (if not using use for-each instead) or you have to return value from callback function

//this is an array on which we will apply array methods.
/*------------------------------------------------------------------------------------*/
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
/*-------------------------------------------------------------------------------------*/

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

/*-------------------------------------------------------------------------------------*/

// Create array of company names
const companyNames = companies.map(function(company) {
   return company.name;
 });

/*-------------------------------------------------------------------------------------*/

let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

/*---------------------------------------------------------------------------------------*/

//2. Array.filter()

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// filter method just return true or false based on condition....  so if true mns that item is going to store in new array.. if false then jst ignore that item.
// this method doesnt change the original array.


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

/*-----------------------------------------------------------------------------------*/

// Get 21 and older persons from ages array

//1st way
 let canDrink = [];
 for(let i = 0; i < ages.length; i++) {
   if(ages[i] >= 21) {
     canDrink.push(ages[i]);
   }
 }

//2nd
 const canDrink = ages.filter(function(age) {
   if(age >= 21) {
     return true;
   }
 });

//3rd
const canDrink = ages.filter(age => age >= 21);

/*------------------------------------------------------------------------------------*/


// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

/*------------------------------------------------------------------------------------------*/
// What is difference between Map and Filter??

//They both returns a new array. 
//map returns a new array of elements after applying callback function on each element.
//filter only return elements which satisfied the condition in the callback function.

//Map can change original array elements.
//filter can't change original array elements. it only filters the value with some condition and returns true or false.

//map returns the same number of elements as the original, but the element value will be transformed in some way.
//filter returns the same or less number of elements than the original but not change the original elements values.



//3. Array.find()

//like above two methods this method also take one param as i/p, this method finds an array element and returns true or false.
//find() method returns very first occurence which satisfies the condition & then stops... it does not look after that even if the same element is present in array..

// in easy words, if there are two same elements in array then find method will return only first element from the array.

//e.g
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);  //12



//4.Array.findIndex()

//if we need to find index of an element then we can use this method. this method also take one param as i/p.

const array2 = [5, 12, 8, 130, 44];
const found = array2.findIndex(element => element > 10);
console.log(found);  //1


//5. Array.forEach

//this method is same as general for loop... this method does not return new array... like all the ither methods this also take one function as a param.

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));   // a b c


