// WAP which will detect the passed string is alphaNumeric or not.
// i/p:- '1222343' // false
'fgdgdg'  // false
'23efsf'  // true

function isAlphaNumeric(str) {
  return str.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i) !== null
}

isAlphaNumeric('234dfds') // true
