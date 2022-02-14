/*
    Loops are a tool used to run an associated block (or line) of code until a condition is no longer true/truthy...While and do-while loops are basic forms of loops
*/
console.log(":::: WHILE LOOPS ::::");
let whileCon = 1;

console.log("BEFORE WHILE LOOP");
while (whileCon < 5) {
    console.log("loop start. whileCon is currently: " + whileCon);
    whileCon++;
    console.log("loop end. whileCon is now: " + whileCon);
}
console.log("OUTSIDE OF WHILE LOOP");

/*
    do-while loops are similar to while loops; however, they will ALWAYS run the associated code at least once BEFORE checkin the condition.
*/
console.log(":::: DO-WHILE LOOP ::::");
let doCon = 10;

do {
    console.log("loop start. doCon is currently: " + doCon);
    doCon++;
    console.log("loop end. doCon is now: " + doCon);
} while (doCon < 5);

/*
    The combination of loops and conditional statement is an incredibly powerful tools that drives the creation of algorithms, and a means to solve very complex problems
*/
console.log(":::: LOOPS WITH CONDITIONAL STATEMENTS ::::");
let x = 0;

while (x < 10) {
    console.log(x);
    if (x == 5) {
        break; // break statements can be used with switch statements AND loops
        // continue;  causes infinite loop. x is always 5 (never increments)
    }
    x++;
}

console.log("x after loop ends: " + x);

y = 0;

while (y < 10) {
    console.log(y);
    y++;
    if (y == 5) {
        continue;
    }
    console.log("not five!");
}

console.log("y after loop ends: " + y);
