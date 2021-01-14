// WAP to detect string is palindrome or not without using inbuilt functions.
//i/p:- madam
//o/p:- true


function isPalindrome(str) {
  let strlen = str.length;
  for (let i = 0; i < strlen / 2; i++) {
    if (str.charAt(i) != str.charAt(strlen - 1 - i)) {
      return false;
    }
  }
  return true;
}

isPalindrome("madam");  // true
