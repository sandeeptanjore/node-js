let num1 = 5;
let num2 = 8;
console.log("I am regular upper code");
if (num1 > num2){
    console.log("num1 is greater than num2");
};

console.log("I am regular bottom code");

// Checking if a string is equal to another string
let userName = "chai";
let anotherUserName = "chai"

if(userName === anotherUserName){
    console.log("userName is equal to anotherUserName");
}

let score = 44;

if(typeof score === "number"){
    console.log("Yes, it is a number");
}else{
    console.log("No, it is not a number");
}

// Checking if a boolean value is true or false

let isTeaReady = false;

if (isTeaReady){
    console.log("Tea is ready");
}else{
    console.log("Tea is not ready");
}

// Checking if an array is empty or not:

let items = [];

console.log(items.length);

if (items.length ===0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}