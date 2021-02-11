//Write a code which will remove duplicate elements from an array.


//1. ES6 approach using filter method

var arr = [1,2,3,4,3,1,2];

function removeDuplicates(arr){
  arr.filter((item, index) => arr.indexOf(item) === index);
}

var uniqArr = removeDuplicates(arr);
