
// Every function has access to following properties:-
// 1.Name - function name, this is optional, function can be anonymous also
// 2.Code - this is the block which gets execute when function is invoked.
// 3.call()
// 4.apply()
// 5.bind()

// 1. Call & Apply
// these method can be used for function borrowing, which will avoid code repitition.
// when we call any function JS internally calls call method on  that function.

// e.g

function eat(){
console.log("I am eating");
}

eat();      // JS internally call it as eat.call();

// call method calls the function with given this scope and arguments. we can specify explicitly that to which object this should refer.

// The main differences between bind() and call() is that the call() method:
// 1. Accepts additional parameters as well
// 2. Executes the function it was called upon right away.
// 3. The call() method does not make a copy of the function it is being called on.


// call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters 
// to be passed in individually, whereas apply() expects an array of all of our parameters. Example:

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);    // here we borrowed function from pokemon object.
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms


//2.Bind

// bind does not execute function right away, instead it returns new function with specified this scope which we can use later.

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms




// for more info visit:- https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
