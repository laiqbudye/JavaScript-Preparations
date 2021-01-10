// Why we need Map?

// Maps are used to store data in the form of key value pairs. They are same as objects with difference as below:-
// We can give object as key to another object.

// Normal Object

var x = {};
var y = {};
var z = {};
x[y] = 'laiq';
x[z] = 'budye';                   //here object x will store only last object key which is z and will ignore y... hence we need MAPS
console.log(x);                   // [object Object]: "budye"


// Objects allows keys to be string only. If we pass number or object as a key to object then it implicitly converts it into string
// to overcome this issue MAP comes in picture.

//Map allows ant type of keys, number object funcion anything


// Difference between Map & Objects  (watch this 2 min video:- https://www.youtube.com/watch?v=nValTHkLkf8)
  //1. type of key (map allows any type.... object allows only string)
  //2. Iterable (map is iterable.... object is not)
  //3. size (map.size() returns number of keys.... object not, we need to get object.Keys() which will return array then find length of that)
   //4. JSON.Stringify()  (cant strigify map directly..... can stringify objects)

// MAP

var x = {};
var y = {};
var z = {};
x[y] = 'laiq';
x[z] = 'budye';                   

var map = new Map();
map.set(y, 'laiq');
map.set(z, 'budye');     // here map will store both the keys 
console.log(map);        // [[Entries]]
                         //  0: {Object => "laiq"}
                         //  1: {Object => "budye"}
                            
// Then what is WeakMap

var map = new Map();
var weakmap = new WeakMap();

(function(){
    var a = {x: 12};
    var b = {y: 12};

    map.set(a, 1);
    weakmap.set(b, 2);
})();

// The above IIFE is executed there is no way we can reference {x: 12} and {y: 12} anymore.
// Garbage collector goes ahead and deletes the key b pointer from “WeakMap” and also removes {y: 12} from memory. 
// But in case of “Map”, the garbage collector doesn’t remove a pointer from “Map” and also doesn’t remove {x: 12} from memory.

// Summary: WeakMap allows garbage collector to do its task but not Map.

