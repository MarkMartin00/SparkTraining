/*
    An Algorithm is a step-by-step solution to solve a problem. In this code, we will examine two ways to sort numbers in numerical, ascending order, from lowest to highest.

    Selection sort and bubble sort are two popular methods to create a "sorting algorithm". One thing to keep in mind about both of these algorithms is they are both created using tools we have covered thus far in the program! Notice how much flexibility we have with only loops, and if-statements. It will take some time for you to create your own algorithms, but just keep this in mind, these tools are the backbone for solving very complex problems! and you will use them throughout the whole of your programming life!

    One thing to help you is...use console.log as much as you possibly can! New developers do not use debugging tools and statements (such as console.log) nearly enough. The only real way for you to get visibility on your code is to use debugging statements to literally tell yourself what is going on. Even if you have been coding for 50+ years, it can be very difficult to visualize each step of a program in your mind with 100% accuracy. Debugging statements are your best friend.
*/


/*
    This is the Bubble Sort - This sorting method works by comparing each element in a collection side-by-side with its neighbor and swapping their position if one element is smaller/larger than the other.
*/
console.log("::::: ::::: ::::: :::::");
console.log("::: BUBBLE SORT :::");
console.log("::::: ::::: ::::: :::::");

// bubbleArr = [6,7,3,10,1];
// console.log("unsorted array: " + bubbleArr);

// // purpose of first loop is to iterate enough times to ensure array is eventually sorted
// //     it iterates once per element
// for (let i = 0; i < bubbleArr.length; i++) {
//     // debugging statements
//     console.log("\n\nITERATION: " + (i + 1) + " STARTS"); 
//     console.log("current array: " + bubbleArr);
    
//     // second loop starts from beginning to end and swaps with next element, if needed
//     for (let j = 0; j < bubbleArr.length - 1; j++) {
//         // debugging statement that tells us which two values we are comparing
//         console.log("Looking at: " + bubbleArr[j] + " and: " + bubbleArr[j+1]);

//         // if current element is greater than next element, swap
//         if (bubbleArr[j] > bubbleArr[j+1]) {
//             // debugging statement that tells us when we need a swap, and will show us the array before and after switch two values
//             console.log("SWAP NEEDED");
//             console.log("Before Swap: " + bubbleArr);
//             let temp = bubbleArr[j];
//             bubbleArr[j] = bubbleArr[j+1];
//             bubbleArr[j+1] = temp;
//             console.log("After Swap: " + bubbleArr);
//         } else {
//             // debugging statement that tells us when we do NOT require a swap
//             console.log("NO SWAP NEEDED");
//         }
//     }

//     // debugging statements that tell us when our outer loop has concluded
//     console.log("ITERATION " + (i + 1) + " COMPLETE!\n\n");
// }





/* 
    This is the Selection Sort - This sorting method works be looking for the smallest number in a collection and moving it to the front by swapping it's position with a more forward element.
*/
console.log("::::: ::::: ::::: :::::");
console.log("::: SELECTION SORT :::");
console.log("::::: ::::: ::::: :::::");

// create array to sort
// let selectionArr = [6,7,3,10,1];;
// console.log("unsorted array: " + selectionArr);
// 
// iterate over array, except for the last number
// for (let i = 0; i < selectionArr.length - 1; i++) {
//     console.log("\n\nITERATION: " + (i + 1) + " STARTS"); 
//     console.log("current array: " + selectionArr);

//     // create a variable to keep track of the minimum index
//     let minIndex = i;

//     // iterate over the array, starting 1 element after the outer loop's current index
//     for (let j = i+1; j < selectionArr.length; j++) {
//         // debugging statement to tell us what the current number and minIndex values are
//         console.log("Looking at: " + selectionArr[minIndex] + " and: " + selectionArr[j]);
//         // if current number is less than the minimum index, point to smaller value
//         if (selectionArr[j] < selectionArr[minIndex]) {
//             // debugging statement that will tell us the current "minIndex" value
//             console.log("current min: " + selectionArr[minIndex]);
//             // ... change the minumum index value to be the index value of current number
//             minIndex = j;

//             // debugging statement that will tell us what the new "minIndex" value is
//             console.log("new min: " + selectionArr[minIndex]);
//         } else {
//             // debugging statement that will tell us when the current "minIndex" value is already smaller
//             console.log("current min is smaller");
//         }
//     }

//     // perform swap once inner loop ends

//     // create a variable to keep track of the larger number we are working with
//     // also seen as temp
//     let larger = selectionArr[i];

//     // debugging statement that tells us which numbers we are swapping (if any)
//     console.log("Larger number: " + larger + " :: Smaller number: " + selectionArr[minIndex]);
//     selectionArr[i] = selectionArr[minIndex];
//     selectionArr[minIndex] = larger;

//     // debugging statements that tell us when our outer loop has concluded
//     console.log("ITERATION " + (i + 1) + " COMPLETE!\n\n");
// }



