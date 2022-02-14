/* ------------------- BigInt ---------------------------*/
// limit of number type precision
let num = 5**400;
console.log(num);
// bigInts are represented by the n at the end of the value
let bigInt = 5n**400n;
console.log(bigInt);
// cannot mix bigint and number in operations (without casting)
let x = 10n;
let y = 5;
let z = (Number)(x) + y;
console.log(z);

// converting to and from infinity
    // make a very large number with the help of Number.MAX_VALUE
    let j = Number.MAX_VALUE * 10;
    console.log(j);
    // cast Number.MAX_VALUE to a BigInt 
    let k = (BigInt)(Number.MAX_VALUE) * 10n;
    console.log(k);
// casting back to number gives us infinity
console.log(Number(k));
