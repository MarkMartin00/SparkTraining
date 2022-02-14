console.log("::: EXECUTION STACK - FUNCTIONS :::");

// console.log("::: Global Execution Context :::");
// first(); // 1
// console.log("::: Back inside Global Execution Context :::"); // 7


// function first() {
//     console.log("Inside first function"); // 2
//     second(); // 3
//     console.log("Exiting first function"); // 6
// }

// function second() {
//     console.log("inside second function"); // 4
//     console.log("exiting second function"); // 5
// }




// console.log("::: EXECUTION STACK - LOOPS :::");


// console.log("::: Global Execution Context :::");
// loopFunc(); // 1
// console.log("::: Back inside Global Execution Context :::"); // 8

// function loopFunc() {
//     console.log("Entering LoopFunc"); // 2
//     var a = 0;
//     while (a < 5) {
//         console.log(a); // 3
//         innerFunc(); // 4
//         a++;
//     }
//     console.log("Leaving LoopFunc"); // 7
// }

// // // keeps getting called until while condition is false
// function innerFunc() {
//     console.log("Entering innerFunc"); // 5
//     console.log("Leaving innerFunc"); // 6
// }