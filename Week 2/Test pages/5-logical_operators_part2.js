/*

'Type Conversion/Coersion' attempts to change two expressions
to the same datatype BEFORE checking if they have the same value or performing some operation on them.

boolean context: using logical operators
    - values will be converted to true or false, then back again


For && Operations, the comparison is as follows:
    1 - Evaluate the operands from left to right
    2 - Return the first falsy value if available. 
    3 - If no falsy values exist, return the last truthy value.
*/

// console.log(":::: WHAT IS RETURNED: && OPERATIONS ::::");
console.log(5 && true);     // this will print true
console.log(true && 5);     // this will print 5
console.log(false && 5);    // this will print false
console.log(5 && false);    // this will print false  
console.log(0 && 5);        // this will print 0
console.log(0 && false);    // this will print 0
console.log(false && 0);    // this will print false

/*
For || Operations, the comparison is as follows:
    1 - Evalute the operands from left to right
    2 - Return the first truthy value if available. 
    3 - If no truthy values exist, return the last falsy value.
*/
// console.log(":::: WHAT IS RETURNED: || OPERATIONS ::::");
console.log(5 || true);     // this will print 5
console.log(true || 5);     // this will print true
console.log(false || 5);    // this will print 5
console.log(5 || false);    // this will print 5
console.log(0 || 5);        // this will print 5
console.log(0 || false);    // this will print false
console.log(false || 0);    // this will print 0