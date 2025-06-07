// # Primitive

// 7 types : string, Number, Null, Undefined, Symbol, bigInt, Boolean
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123")
const anotherId = symbol('123');

// console.log(id === anotherId);


// # Reference (Non primitive)

// Array, Objects, Function

const heros = ["shaktiman","nagraj ","dhama"];
let newObj= {
 name: "vineet",
 age: 22,
}
const myFunction = function(){
    console.log("hello word");
    
}
console.log(typeof myFunction);
