// Write a debouncing program

function debounce(fn, delay){
  let timer;
  
  return function(...args){
    clearTimeout(timer);
    
    timer = setTimeout(function(){
      fn.apply(this, args);
    }, delay)
  }
}

function print(){
  console.log("printing");
}

var run = debounce(print, 2000);   // it will print the msg after 2 seconds
