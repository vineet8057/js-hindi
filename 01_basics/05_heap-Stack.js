// stack (Primitive), heap (Non-Primitive)
let myName = "vineet kumar";
let anotherName = myName;

anotherName ="MR. dakshhh";
console.log(myName);

console.log(anotherName);

let userOne = {
    userEmail: "user@gmail.com",
    upi: "user@ybl"    

}
let userTwo = userOne;

userTwo.userEmail = "vinnetkumar@gmail.com";
console.log(userOne.userEmail);
console.log(userTwo.userEmail);

