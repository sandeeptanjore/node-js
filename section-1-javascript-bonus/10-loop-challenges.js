/*
* 1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5
* and stores the result in a variable named 'sum'
* */

let counter = 1,
    sum = 0;

while(counter <6){
    sum = counter + sum;
    //counter++;
    counter = counter + 1;

}

console.log(`Solution 1 ===> Sum of numbers from 1 to 5 is: ${sum}`);

/*
* 2. Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'
* **/

let 
    countdown = []
    i = 5;

while (i > 0) {
    countdown.push(i)
    i = i - 1; 
    }

console.log('Solution 2 ===> Countdown array is: ' , countdown);

/** 
 * 3. Write a 'do while' loop that prompts a user to enter their favourite tea type
 * until they enter "stop". Store each tea type in an array named "teaCollection"
 */
let teaCollection = [];
let tea;

do {
   tea= prompt(`Enter your favourite tea (type "stop" to finish) `);
    if (tea !== 'stop') {
        teaCollection.push(tea);
    }
} while (tea !== 'stop');

console.log("Solution 3 ===> Your tea collection:", teaCollection);

/**
 * 4. Write a 'do while' loop that adds numbers from 1 to 3 and
 * stores the result in a variable called 'total'
 */

let total = 0,
    count = 1;
 
do {
    total = total + count;
    count = count + 1;
} while (count < 4);

console.log(`Solution 4 ===> Total of 1 to 3 is ${total}`);


/*
5. Write a "for" loop that multiplies each elementin the array ` [2,4,6]` by 2 and stores the results in
a new array named `multipliedNumbers`
*/

let multipliedNumbers = []
let numbers = [2, 4, 6];
let takeNumber = 0;

for (let i =0; i < numbers.length; i++){
  multipliedNumbers.push(numbers[i] * 2);
 
}

console.log('Solution 5 ===> Results of multiplication: ', multipliedNumbers);


/**
 * 6. Write a for loop that lists all the cities in the array 
 * `["Paris", "New York", "Tokyo", "London"] and stores each city in a new array called
 * `cityList`
 */

let cities = ["Paris", "New York", "Tokyo", "London"],
    cityList = [];

for (let i = 0; i < cities.length; i++){
    cityList.push(cities[i]);
}

console.log('Solution 6 ===> City List is: ' , cityList);