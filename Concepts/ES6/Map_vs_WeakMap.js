//Objects
  object can be used to store data in the form of key-value pair.
  key should be in string format. if we pass any other type of key then JS internally converts that into string.
  
  e.g
  1.  let obj = {}
    
      let store = {}
      store[obj] = 'hello';   //[object Object]: "hello"


  JS objects only allows one key as object, if we pass multiple keys as objects then last one will be considered.
  e.g
    let x = {}
    let a = {num: 1}
    x[a] = "hello"    
    console.log(x)   //[object Object]: "hello"



    let x = {}
    let a = {num: 1}
    let b = {num: 2}
    
    x[a] = "hello"       // this will get overriden by next line as obj supports only one obj as key
    x[b] = "world"   
    cnsole.log(x)   //[object Object]: "world"
    
   
// to solve these prblms MAPS comes into picture.
  

// Why we need Map?

// Maps are used to store data in the form of key value pairs. They are same as objects with difference as below:-

//Map allows ant type of keys i.e number, object, funcion, anything


// Difference between Map & Objects  (watch this 2 min video:- https://www.youtube.com/watch?v=nValTHkLkf8)
  //1. type of key (map allows any type.... object allows only string)
  //2. Iterable (map is iterable.... object is not)
  //3. size (map.size() returns number of keys.... object not, we need to get object.Keys() which will return array then find length of that)
   //4. JSON.Stringify()  (cant strigify map directly..... can stringify objects)

// MAP

var x = {};
var y = {};
var z = {};                   

var map = new Map();
map.set(y, 'laiq');
map.set(z, 'budye');     // here map will store both the keys 
console.log(map);        // [[Entries]]
                         //  0: {Object => "laiq"}
                         //  1: {Object => "budye"}


// Map allows any type of value to be a key
var x = {};
var y = {};
var z = {};                   

var map = new Map();
map.set(y, 'laiq');
map.set(z, 'budye');    
map.set(123, "hello")
map.set("str", "world")
map.set(true, "hiiiii")
console.log(map);  //[[Entries]]
//                 0: {Object => "laiq"}
//                 1: {Object => "budye"}
//                 2: {123 => "hello"}
//                 3: {"str" => "world"}
//                 4: {true => "hiiiii"}
//                 size: 5



//maps does not include entry if they have same key
e.g
var x = {};
var y = {};
var z = {};                   

var map = new Map();
map.set(y, 'laiq');
map.set(z, 'budye');    
map.set(123, "hello")
map.set("str", "world")
map.set("str", "world1")    // if same key then it will take latest one in o/p
console.log(map);  // [[Entries]]
                  // 0: {Object => "laiq"}
                  // 1: {Object => "budye"}
                  // 2: {123 => "hello"}
                  // 3: {"str" => "world1"}
                  // size: 4


methods on MAP
1. map.set(key, val) - to add entry in a map
2. map.get(key) - to get value by keyname
3. map.clear() - removes all elements from map
4. map.delete() - removes an entry by key name
5. map.keys()
6. map.values()
7. map.entries()
8. map.size() - returns the no. of elements in map

                            
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



// Map vs Weakmap
// 1. keys can be anything in map. in weakmap keys can only be objects & functions (if we pass key as number string undefined then it will throw an error)
// 2. map have a size property, weakmap doesnt
// 3. maps are iterable, weakmaps are not
