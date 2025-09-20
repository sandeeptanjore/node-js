// for (let key in object) {
//     console.log(key) //shows the property name
//     console.log(object[key]) //shows the property value
// }

let person ={
    firstName: "Sandeep",
    lastName: "Tanjore",
    age: 25,
    city: "Montreal",
    favouriteCity: "London",
    occupation:"Software Developer",
};

// for (let property in person) {
//     console.log(property);
//     console.log(person[property]);
// }

// Method 1: Basic for...in loop (what you already have)
console.log("Method 1: Basic for...in loop");
for (let property in person) {
    console.log(property + ": " + person[property]);
}

console.log("\n" + "=".repeat(40) + "\n");

// Method 2: Using Object.keys()
console.log("Method 2: Using Object.keys()");
Object.keys(person).forEach(property => {
    console.log(`${property}: ${person[property]}`);
});
console.log("\n" + "=".repeat(40) + "\n");


// Method 3: Getting specific properties

console.log("Method 3: Getting specific properties");
console.log("First Name:", person.firstName); // or person["firstName"]
console.log("Age:", person.age);
console.log("Occupation:", person.occupation);

console.log("\n" + "=".repeat(40) + "\n");


