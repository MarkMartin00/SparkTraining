console.log("::: CALLBACK FUNCTIONS :::");

/* 
    This is the same dataDetails function we have used in the past
*/
function dataDetails(data) {
    console.log("Input Value is: " + data + " it is of type: " + typeof(data));
}

function myFunc() {
    console.log("Hello World");
}

// We can pass in functions into other functions
dataDetails(myFunc);

/*
    Since Javascript functions are considered 'first-class functions' We can assign a function to be the value stored within variables. These are called function expressions.

    Anonymous functions don't have names, like the one below. They are good for a one-time use. Setting a function to be the value of a variable allows you to call that variable as if it were a function. Using a function in this manner means the function itself isn't hoisted.
*/

let funcVariable = function () {
    console.log("This is a variable, whose value is a function!");
}

funcVariable();

/* 
    When we pass a function as the argument of another function, that is called a 'callback' function.

    This concept can be confusing for new developers, but imagine the following scenario:

        function multiply (a, b) {
            return a * b;
        }

    Is is easy to understand that this function would take two numbers, and multiply their values together...This function assumes that the parameters 'a' and 'b' are both numbers. We apply this same principle when using callback functions. We assume that one of the variables given to the function is a function. The parenthesis are only given a valid context with callback functions when we know to expect a function.

*/

function addPrint(a, b, c) {
    let sum = a + b;
    c(sum);
}

// function declaration
function popup(input) {
    alert(input);
}

// function expression
let print = function (input) {
    console.log(input);
}

// addPrint(4, 5, popup);


// use an anonymous function
addPrint(4, 5, function(input) { console.log(input)} );



// Using an anonymous function: these functions take in a function, time in milliseconds
// setTimeout(function() {console.log("timeout!")}, 5000);
// setInterval(() => {console.log("interval!")}, 1000);

// () => {} <--- this is an arrow function, syntactic sugar (does same thing but nicer to write)