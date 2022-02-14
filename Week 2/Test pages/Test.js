// debugging statement
console.log("Hello!");

// --------------------Creating variables--------------------
// -- declare --
let myVariable;
console.log(myVar);
// --assign --
myVariable = "my value";
// --initialization
let myOtherVariable = 20;

// -----------------Declaration------------------------
// -------let: can be re-assigned, cannot be re-declared.
//let myVariable = 10; Can't do.
myVariable ="Can do"
// -----const: cannot be re-assigned or re-declared
const myConst = 5;
//const myConst = 15; can't do
//myConst = 15; can't do
// ------var: can access before creation. Can be re-assigned and re-declared.
var myVar = "value";
console.log(myVar);

// -------------------Functions-------------------------------
function myFunc() {
    console.log("hello from inside my function");
}
myFunc();

// ----------Creating a function----------
function takeInput(input) {
    // console log a string with input included.
    console.log("my parameter's value " + input);
    // create a local variable (only exist in function)
    let information = "locally scoped variable inside of function.";
    // access local variable
    console.log(information);
}
//call takeInput
takeInput("Bob");
takeInput(5);

function returnTwenty() {
    return 20;
}
let myValue =returnTwenty();
let myOtherValue = 50-returnTwenty();
// use variable
console.log(myValue);
console.log(myOtherValue);
console.log("Now at position 4: "+oddArray[3]);

// -------------Data types------------------------
// boolean - true/false values
// number -  any negative or positive numbers
// string - Alpha numeric charaters with
// object - object which hold o lot of 
// null - a datatype meaning "nothing"
// undefined - a datatyped reserved for 
// NaN - Not a number
function dataDetails(data) {
console.log("The input is: " + data + " is of type: " + typeof data);
}
dataDetails(true);
dataDetails(100);
dataDetails("Revature");
dataDetails([1,2,3,4]);
dataDetails(null);
dataDetails(undefined);

// -------------Built in Functions-------------------
//alerts
//alert("This is an alert message");
//prompt
let input = prompt("This is the Prompt Function. Type a message:");
console.log("The input from the prompt function was: " + input);
let number = prompt("Give me a number:");
console.log(typeof number);
// results come up with "String." to change to just a "Number" use syntax,
//let fifteen = Number("15");
//console.log(fifteen + 1);

console.log(number);
console.log(number + 1);
let value =Number(prompt("Give me another number:"));
console.log(value + 5);
//-----------------------------Array------------------------
let array = ["apples","strawberries"];

let iceCream =prompt("Do you like Ice Cream?\n"
+"y for yes");
if(iceCream ==="n"){
    array.push("fruit");
}
if(iceCream ==="y"){
    let sundae =prompt("Do you want sprinkles?\n"
    +"y for yes");
    if(sundae =="y") {
    array.push("icecream", "sprinkles");
    }
    else{ 
    array.push("icecream");
    }
}
console.log(array);


