1. 
var arr = [10,20,30,40]

for(var i = 0; i<arr.length; i++) {
    setTimeout(function(){ 
        console.log(arr[i])
    }, 2000)
}

------------------------------------------------------

2. 
const person = [ 
  {id:1, name: 'abc', salary: 1000},   
  {id:2, name: 'def', salary: 2000},   
  {id:3, name: 'ijk', salary: 3000},   
  {id:4, name: 'lmn', salary: 4000}
];

avgSal(person);


function avgSal(data){
    
};  // write code to find average salary


------------------------------------------------------

3. 
function foo(){
    console.log('foo');
}

function bar(){
    setTimeout(foo,2000);
    console.log('bar');
}

function baz(){
    setTimeout(function(){console.log("10 seconds passed")}, 0);
    bar();
}


console.log('start');
foo();
bar();
baz();
console.log('end');

//o/p
start
foo
bar
bar
end
10 seconds passed
foo
foo


------------------------------------------------------

4.
function printName(name){
    return function(name){
        return name;
    }
};

printName("abc")("pqr")

------------------------------------------------------

5. 
var a = 10;

function print() {
	var a = 100;   
	return function () {      
		console.log(a);  
	} 
}

print()();

------------------------------------------------------

6. 

function add(a,b){   
	return a + b;
}

add(1,3);     // convert this function to add(a)(b);


O/P
function add(a) {
    return function(b) {
        return a + b;
    }
}

add(2)(4);

------------------------------------------------------

7. 
console.log(a);
console.log(b);
xyz();
pqr();


var a = 10;

let b = 20;

function xyz() {
    console.log("printing xyz");
}

const pqr = function() {
    console.log("printing pqr");
}

------------------------------------------------------

8. 
var num = 10;

function printNum(){
    num = 20;
    return function(){
        var num;
        console.log(num);
    }
}

printNum()();
console.log(num);

------------------------------------------------------

9. 
var a = 10;

(function(){
   a = 20;
})()

console.log(a);

------------------------------------------------------

10.
console.log("start")

setTimeout(function(){
   console.log('first') 
},0)

let p = new Promise((resolve, reject) => {
    resolve('second')
})


setTimeout(function(){
   console.log('third') 
},2000)

console.log("end")

p.then(res => console.log(res))
