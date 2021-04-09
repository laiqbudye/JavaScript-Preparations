//WAP which will return Number into separate Digits.

i/p: [12, 34] => 1, 2, 3, 4

function numberToDigits(numArray) {
    let result = [];
    
    for(let i=0; i< numArray.length; i++){
        let digits = [];       
        while(numArray[i] > 0){
            digits.unshift(numArray[i] % 10);
            numArray[i] = parseInt(numArray[i] / 10);
        }
        result = result.concat(digits);
    }
    return result;
}

numberToDigits([12,34,56, 23]);  // [1, 2, 3, 4, 5, 6, 2, 3]




--------------------------------same example with inBuilt functions ----------------------------

function numberToDigits(numArray) {
    let result = [];
    for(let i = 0; i< numArray.length; i++){
        let digits = numArray[i].toString().split('');   // converting number to string & splitting the number
        result = result.concat(digits);
    }
    return result.map(number => +number);
}

numberToDigits([12,34,232]);  // [1, 2, 3, 4, 2, 3, 2]
