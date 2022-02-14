//Your work belongs in this file.

//--------------------------------------------------------
// -------------Built in Functions-------------------
//alerts
//alert("This is an alert message");
//prompt
//let input = prompt("This is the Prompt Function. Type a message:");
//console.log("The input from the prompt function was: " + input);
//let number = prompt("Give me a number:");
//console.log(typeof number);
// results come up with "String." to change to just a "Number" use syntax,
//let fifteen = Number("15");
//console.log(fifteen + 1);

//console.log(number);
//console.log(number + 1);
//let value =Number(prompt("Give me another number:"));
//console.log(value + 5);
//--------------------------------------------------------

/* Example
Prompt the user for some information */
let yourName = prompt("What is your name?");
// I changed the prompt command to a let command to prompt and alert us of our name and our movie choice.


//Now let's print the information
console.log("Your name is " + yourName);

//.... How do we access the result of the prompt?
//We must save the result to a variable

//Let's try again
let favMovie = prompt("What is your favorite movie?");

console.log("Your favorite movie is", favMovie);

let favColor = prompt("What's your favorite color?");
console.log("Your Favorite color is" + favColor);

/* Your turn 
Ask the user a question.
Print the result */

/*Exmaple
Recall the alert function from the Hello World assignment.
Alert users to the prompted value */
alert("Your name is "+ yourName);
alert("Your favorite movie is "+ favMovie);
alert("Your favorite color is also "+ favColor);
/*Your turn
Use alert to print 
The result of your question is ___ 
___ is the actual result. */

/* Explanation
alert, console.log, and prompt are all built in
javascript functions. There are many more, but these 
are a good place to start. 

Note that when you use console.log you can give as input 
comma separated values and console.log will print them 
with a space for each comma.

This does not work for alert. Instead we are doing 
something in alert called String concatenation. 
More on this in later labs. For now all you need
to know is that you can use the + operator between 
Strings and other values, getting back a String with
the value included in it. */ 