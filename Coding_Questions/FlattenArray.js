// const arr =  [1,2,3,[4,5,6],7,[8,9]];
// const arr1 = [];
// function flattenArray(arr){
//   for(var i = 0;i<arr.length;i++){
//       if(Array.isArray(arr[i])){
//           flattenArray(arr[i]);
//       }else{
//           arr1.push(arr[i]);
//       }
//   }
//   console.log(arr1);
// }

// flattenArray(arr);

//Reduce method

const arr2 =  [1,2,3,[4,5,6],7,[8,9]];

function flattenArrayreduce(arr){
  return arr.reduce(function(array, value){
    return array.concat(Array.isArray(value) ? flattenArrayreduce(value) : value);
  },[])
}

flattenArrayreduce(arr2);
