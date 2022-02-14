console.log("::: TRUTHY FALSY :::");
/*
    Javascript allows every datatype to be converted/coerced into a boolean value
        - if a value can be coerced into the boolean true, it is truthy
        - if a value can be coerced into the boolean false, it is falsy

    As a rule: Every datatype is truthy EXCEPT:
    -boolean false
    -number 0
    -NaN (not a number)
    -Empty String ("")
    -null
    -undefined

    basically, if the data represents a "lack of information" (or is boolean false) then it has a falsy value.

    false is...well, false
    0 is (more or less) a "lack of numbers"
    NaN is more or less a "lack of understanding of a number"
    Empty String is the "lack of characters in a string"
    null is the "lack of a value"
    undefined is the "lack of enough information to determine a datatype"
*/

/* 
    This is the same function from the "javascript_datatypes.js" file, however we have added another check for truth-falsy values using '!!' - This is the 'not' operator twice. The 'not' operator converts a value to the opposite boolean value. Using it twice, as we have, acts like a 'double negative', giving us the actual boolean value of a datatype.
*/
function dataDetails(data) {
    console.log("Input Value is: " + data + " it is of type: " + typeof(data) + " It has a truthy-falsy value of: " + !!data);
}

// console.log("::: BOOLEANS :::");
dataDetails(true);          // boolean true - truthy
dataDetails(false);         // boolean false - falsy

// console.log("::: NUMBERS :::");
dataDetails(100);           // normal number - truthy
dataDetails(1/0);           // Infinity - truthy
dataDetails(16*"apples");   // NaN - falsy
dataDetails(0);             // 0 - falsy

// console.log("::: BIG INT :::");
let bigInt = BigInt(Number.MAX_VALUE) + 2n;
dataDetails(bigInt);        // bigint - truthy

// console.log("::: STRINGS :::");
dataDetails("word");        // Normal string - truthy
dataDetails("");            // empty string - falsy

// console.log("::: OBJECTS :::");
dataDetails( [63,true,"Hello World"] ); // all objects - truthy
dataDetails([]);                        // even empty arrays - truthy

// console.log("::: SPECIAL CASES :::");
dataDetails(null);      // null - falsy
dataDetails(undefined); // undefined - falsy