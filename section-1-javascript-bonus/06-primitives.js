//Primitive
 //string, Boolean, Null, Number, Undefined, Symbol

// Non-primitive
  //Objects
    //Arrays, Functions, Objects

let balance = 120

// console.log(typeof(balance));
// console.log(anotherBalance.valueOf());

let anotherBalance = new Number(120);
console.log(typeof(anotherBalance)); //object
console.log(typeof(balance)); //number
// console.log(anotherBalance);

//boolean
let isActive = true;
let isReallyActive = new Boolean(true);

//null and undefined
let firstName = null;
let lastName = undefined;
console.log(firstName);
console.log(lastName);

//String

let myString = "hello";
let myString1 = new String("hello");
let userName = "hitesh";

let greetMessage = `Hello, ${myString}`;
console.log(greetMessage);

let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1);