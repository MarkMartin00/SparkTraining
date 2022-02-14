console.log("::: FUNCTION REVIEW :::");

// can take in parameters, can return a value
function myFunction(parameter) {
    return "This is my parameter: " + parameter;
}

// can store returned value in a variable
    // notice we are calling a function
let returnedValue = myFunction("hello");
console.log(returnedValue);

// or can use returned value outright
console.log(myFunction("hello"));

/*
    Scopes are isolate sections of our code. As a general rule, any variables created within a particular scope are lost once we leave that scope*. In other words, variables cannot be accessed outside of the scope they are created.

    *'hoisting' can break this general rule...

    Hoisting [informal definition]: The declaration of variables (declared with var) AND function definitions are 'moved' to the top of your code.

    Variables declared with var are hoisted in one of two places.
    1 - When outside of a function, they are hoisted to the top of your code file (technically this is to the top of the global context)
    2 - When inside of a function, they are hoisted to the beginning of that function

    Global variables are accessible throughout
    Local variables are local to a function or flow control statement
    
    - If you are trying to access a variable, JS will first check in the current scope.
    - If variable cannot be found, it checks in the next highest scope and onward.
*/

console.log("::: SCOPES :::");

// global scope
let l = "Let variable";
var v = "Var variable";
const c = "Const variable";

function myFunc() {
    // function scope
    let l = 11111;
    var v = 22222;
    const c = 33333;

    if (true) {
        // block scope
        let l = "Green Eggs";
        var v = "Ham";
        const c = "Cat in the Hat";
        console.log("if statement [let]: " + l);
        console.log("if statement [var]: " + v);
        console.log("if statement [const]: " + c);
    }
    console.log("function [let]: " + l);
    // vars are hoisted to top of function or global scope
    console.log("function [var]: " + v); 
    console.log("function [const]: " + c);
}

myFunc();
console.log("outside [let]: " + l);
console.log("outside [var]: " + v);
console.log("outside [const]: " + c);



/*
    Due to hoisting, you can use the declarative keyword, var, again in the same scope with no problems, but the same cannot be said for 'let' and 'const'
*/

// let l = "New Let Variable"; // This doesnt work...
// const c = "New Const variable"; // Neither does this...
// var v = "New Var variable"; // This seemingly does, but it actual replaces existing v

// console.log("outside [var]: " + v);

/*
    We cannot access variables that are declared inside of a "smaller" scope
*/ 

function secondFunc() {
    var funcVar = "Hello World";
    console.log(funcVar);
}

secondFunc();
// console.log(funcVar);

// block scope is part of higher scope
if (true) {
    var f = "something else";
    let i = "something";
    console.log(f);
    console.log(i);
}

console.log(f);
// console.log(i);
/*
    Pass By Value

    The parameters you establish for functions reside in a different scope than variables created outside of a function. In this case "num1" and "num2" are creating local variables that are used inside of the function below, but we also have separate variables created outside of the function.

    If you invoke this function, it DOES NOT IMPLICITLY USE THE VARIABLES DECLARED OUTSIDE OF THE FUNCTION (the values 15, and 25). We must pass information into this invoked function. 'num1' and 'num2' within the function are the local variable names used to reference the information passed to the function

*/
let num1 = 15;
let num2 = 25;

// function add(num1, num2) {
//     console.log("Local variables before change: " + num1 + " " + num2);
//     num1 = 5;
//     num2 = 5;
//     console.log("Local variables after change: " + num1 + " " + num2);
// }

// add(num1, num2);

// console.log("Gobal variables after function call: " + num1 + " " + num2);
// change the names to differentiate between the parameters and variables outside of function

function add(parameter1, parameter2) {
    console.log(parameter1 + " " + parameter2);
    parameter1 = 5;
    parameter2 = 5;
    console.log(parameter1, parameter2);
}

add(num1, num2);

console.log("Gobal variables after function call: " + num1 + " " + num2);
