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
  VisitedCities = [];

for (let i = 0; i < cities.length; i++){
  do {
     
   }while(cities!=='Paris')
}