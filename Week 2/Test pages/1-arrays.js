/* 
    Arrays in Javascript allow us to hold onto multiple pieces of data in a single location, arrays are denoted using square brackets []
*/
console.log("::: ARRAY BASICS :::");
// #1. you can create arrays two different ways
    // literal
    let arr1 = ["hello", "there", "nice", "to"];
    console.log(arr1);
    // constructor
    let arr2 = new Array(5);
    console.log(arr2);
// #2. accessing elements within an array
    // save it into a variable
    let myElement = arr1[2];
    console.log(myElement);
    // or use it directly
    console.log(arr1[2]);
    // accessing last element
        // arrays are OBJECTS
            // create a primitive and check type and print it to console
            let myPrimitive = 5;
            console.log(myPrimitive);
            console.log(typeof myPrimitive);
            // check type of first array and print it to console
            console.log(typeof arr1);
            // print second array to console

            // print out an element from second array
            console.log(arr2[0]);
        // array objects have a property called length
        let arr3 = new Array();
        console.log(arr3);
        // useful for accessing last element (whose index is length - 1)
        console.log(arr1[arr1.length - 1]);
// #3. methods
    // adding and removing
        // pushing and popping (end of array)
        arr2.push(5)
        console.log(arr2);
        arr1.push("meet");
        console.log(arr1);
        // unshift and shift (beginning of array)
        arr2.unshift(1);
        console.log(arr2);
        // splice (middle of array)
            // first param: index to start
            // (optional) second param: how many elements to splice
            // (optional) third param: what to replace with, if anything
        arr1.splice(1, 2, "hi");
        console.log(arr1);
    // others
    arr1.sort().reverse();
    console.log(arr1);
    arr2.fill(2);
    console.log(arr2);
// #4. arrays are not tied to one data type
let multiComplex = ["apple", 75, [true, "word", 89]];

console.log("::: MULTI ARRAY :::");

let multi = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(multi[0]); // get first row
console.log(multi[1]); // get second row
console.log(multi[2]); // get third row

// access some elements

console.log(multi[1][1]); // get 5

