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

// to overcome this issue MAP comes in picture.

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

