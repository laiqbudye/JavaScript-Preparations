
function throttle(fn, delay){
    let timer;

    return function(){
        let context = this;
        let args = arguments;

        if(!timer){
            fn.apply(context, args);
            timer = true;

            setTimeout(function(){
                timer = false;
            }, delay)
        }
    }
}

function print(){
    console.log("Printing");
}

var a = throttle(print, 2000);
