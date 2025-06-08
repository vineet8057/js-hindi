// Singleton object

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Vineet",
    "full Nmae": "Vineet kumar",
   [ mySym]:" mykey1",
    age: 18,
    location: "Bijnor",
    email: "vineet@gamil.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Wednesday", "Friday"]
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Nmae"]);
// console.log(jsUser[mySym]);

jsUser.email = "vineetkumar@gmail.com"
// Object.freeze(jsUser)
jsUser.email= "vineetdakshh@gmail.com"
// console.log(jsUser);


jsUser.greeting = function (){
    console.log("hello JS user");
}

jsUser.greetingtwo = function (){
    console.log(`hello ja user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());



