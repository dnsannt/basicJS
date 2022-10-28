const promt = require('prompt-sync')();

var firstName = promt("Enter your first name : ");
var lastName = promt("Enter your last name : ");
var age = promt("Enter your age : ");
var married = promt("Status : ");

console.log("Your Full Name is :",firstName,lastName);
console.log("age :", age);
console.log("status: ", married);
