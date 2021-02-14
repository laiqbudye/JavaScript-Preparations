
function throttle(fn, delay){
    let inThrottle;

    return function(){
        let context = this;
        let args = arguments;

        if(!inThrottle){
            fn.apply(context, args);
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
