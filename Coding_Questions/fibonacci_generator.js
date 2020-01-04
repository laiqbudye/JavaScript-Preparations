// Create a fibonacci generator which will generate fibonacci numbers. (condition - do not pass any number as an argument to the function)

function genrator(){
    var lastnum = 1, secondlastnum = 0, result = 0;
    return function adder(){
        result = lastnum + secondlastnum;
        console.log(result);
        secondlastnum = lastnum;
        lastnum = result;
    }
}

var a = genrator();

a();   //1
a();   //2
a();   //3
a();   //5
a();   //8
