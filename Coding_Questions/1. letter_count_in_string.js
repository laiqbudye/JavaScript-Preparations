//WAP which will give you each letter count in a given string.
// i/p - amazon
// o/p - a 2, m 1, z 1, o 1, n 1


function countLetters(data) {
  var obj = {};
  for (let i = 0; i < data.length; i++) {
    if (obj[data.charAt(i)]) {
      obj[data.charAt(i)] = obj[data.charAt(i)] + 1;
    } else {
      obj[data.charAt(i)] = 1;
    }
  }
  return obj;
}

var resultObj = countLetters("amazoaaabbbbffffn");

for (let i in resultObj) {
  console.log(i, resultObj[i])
}

// o/p
a 2
m 1
z 1
o 1
n 1
