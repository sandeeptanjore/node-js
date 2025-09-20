/*
* 1. Write a function named `makeTea` that takes one parameter, 'typeOfTea'
* and returns a string like 'Making Green Tea' when called with 'green tea'.
* Store the result in a variable called 'teaOrder'.
* */

const makeTea = (typeOfTea) =>{
    return `Making ${typeOfTea}`;
}

console.log(makeTea('green tea'));

/*
* 2. Create a function named 'orderTea' that takes one parameter, 'teaType'
* Inside this function, create another function called 'confirmOrder' that returns
* a message like 'Order confirmed for chai'.
* Call 'confirmOrder' from within 'orderTea' and return the result.
* */

const orderTea =(teaType) =>{
    const confirmOrder =()=>{
      return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
};

console.log(orderTea('green tea'));
console.log(orderTea('Cafe Misto from Starbucks'));

/*
* 3. Write a function named 'processTeaOrder' that takes another function,
* 'makeTea', as a parameter and calls it with argument 'earl grey'.
* Return the resul of calling 'makeTea'.
* **/
const makeMyTea =(typeOfTea) =>{
    return `Make Tea: ${typeOfTea}`;

};

const processTeaOrder = (teaFunction) =>{
    return teaFunction('earl grey');
};

console.log(processTeaOrder(makeMyTea));

/*
* 4. Write a function named 'createTeaMaker' that returns another function.
* The returned function should take one parameter 'teaType' and return a message
* like 'Making green tea'
* Store the returned function in a variable named 'teaMaker' and call
* it with 'green tea'
* */

const createTeaMaker = () =>{
    return function (teaType){
        return `Making ${teaType}`;
    };
}

let teaMaker = createTeaMaker();
console.log(teaMaker ('Cafe Misto'));