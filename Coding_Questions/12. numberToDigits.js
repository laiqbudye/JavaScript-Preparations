//WAP which will return Number into separate Digits.

i/p: [12, 34] => 1, 2, 3, 4

function numberToDigits(numArray) {
    
    for(let i=0; i< numArray.length; i++){
        let digits = [];
        
        while(numArray[i] > 0){
            digits.unshift(numArray[i] % 10);
            numArray[i] = parseInt(numArray[i] / 10);
        }
        console.log(digits);
    }
    
}

numberToDigits([12,34,56]);   // [1,2] [3,4] [5,6]
