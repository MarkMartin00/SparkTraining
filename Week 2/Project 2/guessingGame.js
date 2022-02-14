console.log("Welcome to Game Time!")
let min=3
let max=10
let target =Math.random() * (max - min +1);
target =Math.floor(target) + min;
var myGuess=0;
console.log("While loop:");
var i = 0;
console.log(target);
while (i<1) {
    myGuess=prompt("Guess a number between 1 and 10.");console.log(myGuess);
    if (myGuess < 1) {
        alert("You did not follow directions. That number is below 1."); i;
        console.log(i);
        continue; 
        }
    if (myGuess > 10) {
        alert("You did not follow directions. That number is above 10."); i;
        console.log(i);
        continue;  
        }
    if (myGuess < target) {
        alert("too low!");
        console.log(i); 
        continue; 
        }
    if (myGuess > target){
        alert("too high!"); i;
        console.log(i); 
        continue;
        }
    if (myGuess = target){
        alert("You got it!");
        ++i;
        console.log(i);
        }       
}
var t=90; t%=5;