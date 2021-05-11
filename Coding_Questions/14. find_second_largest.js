//WAP which will return second largest occured element


function countLetters(data) {
  var obj = {};
  for (let i = 0; i < data.length; i++) {
    if (obj[data[i]]) {
      obj[data[i]] = obj[data[i]] + 1;
    } else {
      obj[data[i]] = 1;
    }
  }
  return obj;
}

var resultObj = countLetters(['aa','bb','aa','aa','cc','cc']);

var newArr = Object.entries(resultObj)

newArr.sort((a,b) => a[1] - b[1])

console.log(newArr[newArr.length -2][0])    // cc
