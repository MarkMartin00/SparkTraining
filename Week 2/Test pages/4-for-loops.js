console.log("::: FOR LOOPS :::");
/*
    for loops will also loop code continuously; however, the syntax provides more control for exactly how many times our loop runs and when. For loops are better when you know (or can easily find out) how many times you want to loop your code
*/

// for loop example
for (let i = 0; i < 5; i++) {
    console.log("The variable i is: " + i);
}

// the following example would loop forever...try to avoid this

// for (;;) {
//     console.log("oh no");
// }

/*
    Note, we can establish our for-loop, condition and modifications in many different ways:
*/
console.log("=== === ==="); // So that our console is a bit easier to read

for (let x = 9; x >= -50; x-=2) {
    console.log("The variable x is: " + x);
}

// console.log("=== === ===");
for (let y = 3; y == 3; y = 15) {
    console.log("The variable y is: " + y);
}

/*
    for-loops are most commonly used with Arrays, or some other collection of information
*/
console.log("");

let letterArray = ["A","B","C","D","E","F","G"];
                //  0   1   2   3   4   5   6  <---- indexes

for (let index = 0; index < letterArray.length; index++) {
    console.log("Index: " + index + " Value: " + letterArray[index]);
}

letterArray[0]; // "A"
letterArray[1]; // "B"
letterArray[2]; // "C"

console.log("::: FOR-OF LOOPS :::");
// add a value to an new index, this creates undefined values in between
letterArray[25] = "Z";
console.log(letterArray);

// for-of loops and regular for loops iterate over undefined values
    // they also cannot target indexes
for (let letter of letterArray) {
    console.log(letter);
}

console.log("::: FOR-IN LOOPS :::");
// iterates over elements that are not undefined
    // you can also work with both values and indexes
for (let index in letterArray) {
    console.log("Index: " + index + " Value: " + letterArray[index]);
    console.log();
}