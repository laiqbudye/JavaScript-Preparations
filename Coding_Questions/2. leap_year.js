WAP to check whether it is a leap year or not without using any inbuilt functions.
i/p - 1996 
0/p true

function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    return true;
  } else {
    return false;
  }
}

isLeapYear(2021);  // false
isLeapYear(2020);  // true
