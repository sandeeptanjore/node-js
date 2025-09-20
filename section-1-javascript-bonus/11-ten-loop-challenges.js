/**
 * 1. Write a `for` loop that loops through the array
 * ['green tea','black tea', 'chai','oolang tea'] and stops the loop when it finds 'chai'.
 * Store all teas before 'chai' in a new array named 'selectedTeas'
 */

let allTeas = ['green tea', 'black tea', 'chai', 'oolang tea'],
  selectedTeas = [];

for (let i = 0; i < allTeas.length; i++){
  if (allTeas[i] === 'chai') {
    break;
  }
  selectedTeas.push(allTeas[i]);
}

console.log(selectedTeas);

/**
 * 2. Write a `for` loop that loops through the array
 * `['London', 'New York', 'Paris', 'Berlin']` and skips 'Paris'.
 * Store the other cities in a new array named `VisitedCities`
 */

let cities = ['London', 'New York', 'Paris', 'Berlin'],
  visitedCities = [];

for (let i = 0; i < cities.length; i++){
  if (cities[i] === 'Paris'){
        continue;
  }
     visitedCities.push(cities[i]);

}

console.log(visitedCities);

/*
* 3. Use a `for-of` loop to iterate through the array
* `[1,2,3,4,5]` and stop when the number `4` is found. Store the numbers before `4` in an array named smallNumbers
* */

let numbers= [1,2,3,4,5],
    smallNumbers =[];

for (let number of numbers){
  if (number===4){
    break;
  }
  smallNumbers.push(number);
}

console.log(smallNumbers);

/*
* 4. Use a `for-of` loop to iterate through the array
* `['chai', 'green tea','herbal tea','black tea']` and skip 'herbal tea'.
* Store the other teas in an array named 'preferredTeas'
* */

let teas = ['chai', 'green tea','herbal tea','black tea'],
    preferredTeas =[];

  for(let tea of teas){
    if (tea==='herbal tea'){
      continue;
    }
    preferredTeas.push(tea);
  }
  console.log(preferredTeas);

  /*
  * 5. Use a `for-in` loop to loop through an object containing city populations.
  *   Stop the loop when population of `'Berlin'` is found and store all previous cities' population in a
  *   new object called `cityNewPopulations`.
  * */

  let citiesPopulation = {
    'London': 8900000,
    'New York' : 8400000,
    'Paris': 2200000,
    'Berlin': 3500000,
  },
      cityNewPopulations ={};

  for (const city in citiesPopulation){
    //key = value
    if (city === 'Berlin'){
      break;
    }
    cityNewPopulations[city] = citiesPopulation[city];
  }
  console.log(cityNewPopulations);

// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));

/*
* 6. Use a `for-in loop to loop` to loop through an object containing city populations.
* Skip any city with a population below 3 million and store the rest in a new object named
* `largeCities`
* */

let worldCities ={
  'Sydney': 5000000,
  'Tokyo': 9000000,
  'Richelieu': 100000,
  'Berlin': 350000,
  'Paris': 2200000,
  'New Delhi': 12200000,
  'London': 3200000,
  'Milton Keynes': 60000000,
},
    largeCities={}

for (const eachCity in worldCities){
   if (worldCities[eachCity] >3000000){
     largeCities[eachCity] = worldCities[eachCity]
   }
}

console.log(largeCities);

/*
* 7. Write a `forEach` loop that iterates through the array
* ['earl grey', 'green tea', 'chai','oolang tea'].
* Stop the loop when `'chai'` is found, and store all previous tea types in an array named 'availableTeas'
* */

let teaNames = ['earl grey', 'green tea', 'chai', 'oolang tea'],
    availableTeas = [];
let foundChai = false;

teaNames.forEach(teaName => {
  if (teaName === 'chai') {
    foundChai = true;
  }
  if (!foundChai) {
    availableTeas.push(teaName);
  }
});

console.log(availableTeas); // ['earl grey', 'green tea']

/*
* 8. Write a 'forEach' loop that iterates through the array
*  `['Berlin', 'Tokyo', 'Sydney','Paris']`
* Skip `'Sydney'` and store the other cities in a new array called travelledCities
* */

let citiesOfTheWorld =['Berlin', 'Tokyo', 'Sydney','Paris', 'Mumbai', 'Vancouver'],
    travelledCities=[];
citiesOfTheWorld.forEach((cities) =>{
  if (cities==='Sydney'){
    return;
  }
    travelledCities.push(cities);
});
console.log(travelledCities);

/*
* 9. Write a `for` loop that iterates through the array 
* `[2,5,7,9]`.
* Skip the value `7` and multiply the rest by 2. Store the results
* in a new array called `doubledNumbers`.
* */

let setOfNumbers = [2,5,7,9];
let doubledNumbers = [];

console.log('Method 1: ');
for(let i = 0; i < setOfNumbers.length; i++){
  if(setOfNumbers[i] !== 7){
    doubledNumbers.push(setOfNumbers[i] * 2);
  }
}
console.log('Doubled Numbers are: ' + doubledNumbers.join(', '));

// // Simple separator that works in WebStorm
// console.log('\n--- Separator ---\n');

console.log('Method 2: ');
doubledNumbers = []; // Reset the array

for(let j = 0; j < setOfNumbers.length; j++){
  if(setOfNumbers[j] === 7) {
    continue;
  }
  doubledNumbers.push(setOfNumbers[j] * 2);
}

console.log('Doubled Numbers are: ' + doubledNumbers.join(', '));

