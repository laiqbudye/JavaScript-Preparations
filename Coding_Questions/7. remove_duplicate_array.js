//Write a code which will remove duplicate elements from an array.


//1. ES6 approach using filter method

var arr = [1,2,3,4,3,1,2];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

var uniqArr = removeDuplicates(arr);



//2. Es6 approach with set

var arr = [1,2,3,4,3,1,2];

var uniqArr = [...new Set(arr)];



//3. using for loop

var arr = [1,2,3,4,3,1,2];

function unique(data){
let uniqarr = [];
  
  for (let i=0; i < data.length; i++){
    if(uniqarr.indexOf(data[i]) < 0){
      uniqarr.push(data[i]);
    }
  }
  return uniqarr;
}


unique(arr)
