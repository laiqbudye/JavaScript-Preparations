// WAP to find missing element in an array.

// [1,4,2,5]  => 3

function getMissingNo(arr) {
    let arrlen = arr.length;
    let total = Math.floor((arrlen + 1) * (arrlen + 2) / 2);
    
    for (let i = 0; i < arrlen; i++) {
       total -= arr[i];
     }
     
     return total
}

var missingNum = getMissingNo([1,4,2,5]);

console.log(missingNum);   // 3
