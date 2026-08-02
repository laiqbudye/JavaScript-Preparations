
function throttle(fn, delay){
    let inThrottle;

    return function(...args){

        if(!inThrottle){
            fn.apply(this, args);
            inThrottle = true;

            setTimeout(function(){
                inThrottle = false;
            }, delay)
        }
    }
}

function print(){
    console.log("Printing");
}

var a = throttle(print, 2000);
