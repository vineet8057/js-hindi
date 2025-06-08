// const tinderUser = new Object();

 const tinderUser = {}
 tinderUser.Id = "123abc"
 tinderUser.name = "jhon"
 tinderUser.age = 23
 tinderUser.city = "USA"

//  console.log(tinderUser);

const regularUser = {
    email: "jhon@gmail.com",
    fullName: {
        userFullNmae: {
        firstName: "jhon",
        lastName: "xyz"}
    }

}
// console.log(regularUser.fullName.userFullNmae.firstName);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({},obj1, obj2)
// const obj3 = {obj1, obj2}
console.log(obj3);


