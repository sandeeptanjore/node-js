/*
* 1. Declare an array named 'teaFlavours' that contains the strings
* 'green tea', 'black tea' and 'oolang tea'
* Access the first element of the array and store it in a variable
* called 'firstTea
*/

let teaFlavours = ['green tea', 'black tea','oolang tea'];
let firstTea = teaFlavours[0];
console.log(firstTea);

/*
* 2. Declare an array named cities containing
* London, Tokyo, Paris and New York.
* Access the 3rd element in the array and store it in a variable named
* 'favouriteCity'
* */

const cities = ['London', 'Tokyo', 'Paris', 'New York'];
const favouriteCity = cities[2];
console.log(favouriteCity);

/*
* 3. You have an array named 'teaTypes' containing
* herbal tea, white tea and masala chai. Change the
* second element of the array to jasmine tea
* */

let teaTypes = ['herbal tea', 'white tea', 'masala chai'];
teaTypes[1] = 'jasmine tea'
console.log(teaTypes);


/*
* 4. Declare an array named 'citiesVisited' containing
* 'Mumbai' and 'Sydney'.
* Add 'Berlin' to the array using 'push' method
*/

let citiesVisited =['Mumbai' ,'Sydney'];
citiesVisited.push('Berlin');
console.log(citiesVisited);

/*
* 5. You have an array named 'teaOrders' with 'chai', 'iced tea',
* 'matcha' and 'earl grey'.
* Remove the last element using the pop method and store it in a variable
* called 'lastOrder'
* **/

let teaOrders = ['chai','iced tea','matcha', 'earl grey'];
lastOrder = teaOrders.pop();
console.log(lastOrder);
console.log(teaOrders);

/*
* 6. You have an array named 'popularTeas' containing
* 'green tea', 'oolang tea', and 'chai'. Create a soft copy of this
* array named softCopyTeas - shallow copy
* **/

// 1st way : spread operator
let popularTeas = ['green tea', 'oolang tea' ,'chai', 'Cafe Misto'];
let softCopyTeas = [...popularTeas];
console.log(softCopyTeas);

//2nd way: using slice method
let sliceArray = popularTeas.slice();
console.log(sliceArray);

//3rd way: using shallow copy
let shallowCopyArray = Array.from(popularTeas);
console.log(shallowCopyArray);

/*
* 7. You have an array named 'topCities'
* containing 'Berlin', 'Singapore', 'New York'.
* Create a hard copy of this array named hardCopyCities
* **/

//hard copy ===> deep copy

let topCities = ['Berlin' ,'Singapore' ,'New York'];
let hardCopyCities = JSON.parse(JSON.stringify(topCities));
console.log(topCities);
console.log(hardCopyCities);
topCities.push('Bombay');
console.log(topCities);
console.log(hardCopyCities);

/*
* 8. You have two arrays: europeanCities containing 'Paris' and 'Rome'
*  and 'asianCities' containing 'Tokyo' and 'Bangkok'
* Merge these two arrays into a new array named 'worldCities'
* */

const europeanCities = ['Paris' ,'Rome'];
const asianCities = ['Tokyo', 'Bangkok'];
const worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

/*
* 9. You have an array named 'teaMenu' containing 'masala chai',
* 'oolong tea', 'green tea' and 'earl grey'
* Find the length of the array and store it in a variable called 'menuLength'
* */

const teaMenu=  ['masala chai','oolong tea', 'green tea' ,'earl grey'];
const menuLength = teaMenu.length;
console.log(menuLength);

/*
* 10. You have an array named 'cityBucketList' containing
* 'Kyoto', 'London', 'Cape Town' and 'Vancouver'
* Check if 'London' is in the array and store the result in
* a variable named 'isLondonInList'
* */

const cityBucketList = ['Kyoto', 'London', 'Cape Town','Vancouver'];
const isLondonInList = cityBucketList.includes('London');
console.log(isLondonInList);