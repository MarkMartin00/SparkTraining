console.log(":::: IF-ELSE STATEMENTS ::::");

/*
    If statements will check the truthy-falsy value of an expression, and will execute the immediately following line or block of code if the expression is truthy
*/

// checking for truthy falsy!
let bool1 = false;
let bool2 = true;
let number1 = 5;
let number2 = 0;

if (number2) {
    console.log("it's truthy!");
} else {
    console.log("it's falsy!");
}

// logical operators
if (bool1 || bool2) {
    console.log("its truthy!");
}

// relational operators
let x = 5;

if (x < 10) {
    console.log(x + " is less than 10!");
}

// comparison operators
if (x === 10) {
    console.log(x + " is 10!");
}

// weirdness because of type coercion
let result = true && 5;
console.log(result);

// weirdness doesn't matter too much, truthy value still returned
// all you really need to know is whether or not something is truthy or falsy
if (true && 5) {
    console.log("its true!");
}


// Note that the removal of curly braces can have a big impact on your code:
let y = 5;

if (y > 10)
    console.log("y is greater than 10");
    y = "Apple";

console.log(y);
// it's as if you wrote this:
// if (y > 10) {
//     console.log("y is greater than 10");
// }

// y = "Apple";

// another potential mistake:
if (false); {
    console.log("Hi there!");
}

// it's as if you wrote this:
if (false) {
    ;
}

{
    console.log("Hi There!");
}
// using else:
if (5 < 3) {
    console.log("The expression was true!");
} else {
    console.log("The expression was false!");
}

// creating even more branches with else if:

let z = 2;

if (z === 0) {
    console.log("z is 0");
} else if (z >= 1 && z <= 5) { // always going to run
    console.log("z is between 1 and 5");
} else if (z === 2) {
    // This code can NEVER be reached...
    console.log("z is 2");
} else if (z <= 10) {
    console.log("z is still 10 or less");
} else {
    console.log("z is outside of my range");
}

// You can also nest if-else statement blocks to get more complex code when needed:

let age = 14;
let movieRating = "R";
let parentAccompany = false;

// example of psuedocode:
// IF movie rating == R
    // IF age > 18
        // you can watch
    // ELSE IF they have parent
        // you can watch
    // ELSE 
        // you can't watch
// ELSE IF movie rating == T
    //
// ELSE
    // you can watch the movie

if (movieRating == "R") {
    if (age > 18) {
        console.log("you can watch the movie!");
    } else if (age > 13 && parentAccompany) {
        console.log("you can watch the movie!");
    } else {
        console.log("sorry, you CANNOT watch the movie!");
    }
} else if(movieRating == "T") {
    if (age > 13) {
        console.log("you can watch the movie!");
    } else if (age > 10 && parentAccompany) {
        console.log("you can watch the movie!");
    } else {
        console.log("sorry, you CANNOT watch the movie!");
    }
} else {
    console.log("you can watch the movie!");
}

/*
    Ternary Operators (?) act as a shorthand for if-else statements. Ternary operators will return a value based on the truthy-falsy value of the preceeding expression.

    The syntax for Ternary operators is as follows:
    <expression-to-evaluate> ? <expression-to-return-if-true> : <expression-to-return-if-false>
*/
console.log(":::: TERNARY OPERATOR ::::");

true ? console.log("Ternary was True!") : console.log("Ternary was False!");

// using values returned from the ternary operator
let value = 0;
value = true ? 15 : "other";
console.log(value); // prints 15

/*
    An equivalent if-else statement to the above would be as follows
*/

let value1 = 0;

if (true) {
    value1 = 15;
} else {
    value1 = "other";
}

console.log("hello" ? "yes" : "no");