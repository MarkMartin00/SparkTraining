console.log("Create an array: ");
let oddArray = [3,5,7,13];
console.log(oddArray);
var x;
x = prompt ("Pick a number!");
alert("You chose "+ x);
function isNumber (number) {
    return number === oddArray
}
console.log(isNumber(oddArray));