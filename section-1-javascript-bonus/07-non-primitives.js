const userName ={
    firstName:"hitesh",
    isLoggedIn:true,
};

userName.isLoggedIn = false;
userName.firstName = "Sandeep"


console.log(userName.isLoggedIn);
console.log(typeof userName);
console.log(userName);


let today  = new Date();
console.log(today);
console.log(today.getDate());