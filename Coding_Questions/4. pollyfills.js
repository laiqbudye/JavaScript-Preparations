1. pollyfill for Array.map() method

Array.prototype.myMap = function(callback){
    let newArray = [];
    for(let i = 0; i<this.length; i++){
        let result = callback(this[i], i);

        newArray.push(result);
    }
    return newArray;
}

---------------------------------------------------------------------------------------------------

2. pollyfill for Array.filter() method

Array.prototype.myFilter = function(callback){
    let newArray = [];
    for(let i = 0; i<this.length; i++){
        let result = callback(this[i], i);
        
        if(result){
            newArray.push(this[i]);
        }
        
    }
    return newArray;
}

---------------------------------------------------------------------------------------------------

3. pollyfill for bind() method

Function.prototype.mybind = function(context, args1){
    let fn = this;
    return function (args2){
        return fn.apply(context, [args1, args2])
    }
}

function add(a,b) {
    return a+b
}

var mybinded = add.mybind(this,2)

var result = mybinded(18);

console.log(result);

