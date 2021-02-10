// Write a debouncing program

function debounce(fn, delay){
  let timer;
  return function(){
    let context = this;
    let args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
    }, delay)
  }
}

function print(){
  console.log("printing");
}

var run = debounce(print, 2000);   // it will print the msg after 2 seconds
