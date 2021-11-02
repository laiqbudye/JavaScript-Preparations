
// Promise introduced in ES6. before promised we were using callback funtions.
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// promise has 3 states: pending(default), fulfilled, reject. 
// once it changes its state from pending to fulfilled or reject then promise gets over. it wont run again.


// Prior to promises we have callbacks to perform some async operations.

e.g
// write 3 functions, where 2nd function depends on result from 1st function & 3rd function depends on result from 2nd function

function first(value, callback){
    callback(value + 2, false)
}

function second(value, callback){
    callback(value + 2, false)
}

function third(value, callback){
    callback(value + 2, false)
}

first(2, function(firstResult, err){
    if(!err){
        second(firstResult, function(secondResult, err){
            if(!err){
                third(secondResult, function(thirdResult, err){
                    if(!err){
                        console.log("Third Result:- ", thirdResult);   // 8
                    }
                })
            }
        })
    }
})


// as we can see in the above code, we have passed "2" & a callback to function first & then passing the result to second function, same thing happening for function third.
// so when our functions got incresed, this code will be very difficult to manage. this also known as "CALLBACK HELL / PYRAMID OF DOOM".

*********************************************************************************************************************************
  
//   to overcome this issue promises comes into picture which transforms same code in minimal lines
  
let promise = new Promise((resolve, reject) => {
    resolve(2)
})

promise.then(first).then(second).then(third).then(res => console.log(res))
.catch(err => {
    console.log(err);
})

function first(value){
    return value + 2
}

function second(value){
    return value + 2
}

function third(value){
    return value + 2
}

// at line 51, we have passed function names inside .then block, which executes those function with previous calculated value
// e.g .then(first), here it will execute function first with value as 2 (which is resolved on line 48) & so on

********************************************************************************************************************************

Promise Basics

First:- 
let promise = new Promise((resolve, reject) => {
    resolve("I got resolved")
})

promise.then((res)=> {                 // .then method takes 2 cb functions as arguments, 1st cb gets execute when promise resolves, 2nd cb gets execute promise fails
    console.log(res)    // I got resolved
},
(err) => {
    console.log(err)   // Some error
})



Second:- 
let promise = new Promise((resolve, reject) => {
    reject("Some error")
})

promise.then((res)=> {
    console.log(res)
},
(err) => {
    console.log(err)   // Some error
})



Third:-  we can use .catch block which will get execute when promise fails

let promise = new Promise((resolve, reject) => {
    reject("Some error")
})

promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err);   // Some error
}).finally(() => {
    console.log("from final")      // this block will get execute in every scenario i.e promise resolves or rejected
})


*********************************************************************************************************************************
  example fro techsith tutorial
  
  let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' remove Garbage');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + ' won Icecream');
  });
};

cleanRoom().then(function(result){      // this result is a value/message that we are passing from resolve method.
	return removeGarbage(result);
}).then(function(result){
	return winIcecream(result);
}).then(function(result){
	console.log('finished ' + result);
})
