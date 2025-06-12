function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("T");
    
}
// sayMyName();

// function addTwoNumber(number1, number2)
// {
//   console.log(number1+number2);
  
//}
function addTwoNumber(number1, number2)
{
  let result = number1 + number2
  return result;
  
}
const result = addTwoNumber(3,7);
// console.log("Result: ", result);

function loginUserMessage(Username){
    return`${Username} just logged in`
}
// console.log(loginUserMessage("vineet"))


function calculateCartPrice(...num1){
  return num1
}

// console.log(calculateCartPrice(200, 300, 500,2000));

const user = {
  Username: "vineet",
  price: 199
}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.Username} and price is ${anyobject.price}`);  
  
}

handleObject(user);