console.log(":::: SWITCH STATEMENTS ::::");
/*
    switch statements are similar to if-else statements; however, they are better suited when you have a good idea of what input you are recieving, or want to check against certain, known values.
*/

let letter = "b";
// the toUpperCase method just allows us to evaluate uppercase and lowercase letters the same
switch (letter.toUpperCase()) {
    case "A":
        console.log("A for Assembly!");
        break;
    case "B":
        console.log("B for Binary!");
        break;
    case "C":
        console.log("C for Compiled!");
        break;
    default:
        // default is similar to else statements...
        console.log("There are too many letters in the alphabet!");
        break;
}

/*
    The break keyword is used to stop the execution of code within the current switch statement, or loop. Otherwise, a switch statement performs what is known as "fall-through logic", in which the proceeding cases will execute when a match is found...
*/
console.log("::::: WITHOUT THE BREAK KEYWORD :::::");
switch (letter.toUpperCase()) {
    case "A":
    case "B":
    case "C":
        console.log("you passed!");
        break;
    default:
        console.log("you failed!");
}

