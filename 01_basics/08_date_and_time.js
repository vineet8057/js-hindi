// Go to mdn documentation for understanding to date and time

// Dates

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof Date);


// let myCreatDate = new Date(2024, 4, 12);
// console.log(myCreatDate.toDateString());

let myCreatDate = new Date("01-12-2024");
// console.log(myCreatDate.toLocaleDateString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate.toDateString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString(`default`,{
    weekday: "long"
})

