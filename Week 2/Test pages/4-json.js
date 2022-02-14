/*
    THIS PAGE SHOWCASES EXAMPLES OF WHAT JSON LOOKS LIKE, NOT THEIR USE

    One note before continuing: Javascript supports the use of double quotes " and single quotes ' when creating and using strings 
    
    *javascript also uses a backtick ` but we will not explore those, look up template literals to see more about this topic.
*/
let word = "word";
let otherWord = 'word';
let yetAnotherWord = `This is a ${otherWord}`;
console.log(yetAnotherWord);

/*
    JSON stands for Javascript Object Notation. It is a lightweight way to transmit data between different programming languages. 
    
        JSON is lightweight, because Strings do not take up too much space in memory, as compared to more complex objects. 
    
        JSON is language agnostic, because nearly every programming language has a method of writing and understanding String data.
*/
let JSONString = '{"name":"Billy","age":5}';
let obj = {name: "Bob", age: 10};

console.log("JSON: " + JSONString);
console.log("Object: ", obj);

/*
    JSON.stringify() allows you to convert a Javascript object into a JSON string
    JSON.parse() allows you to convert a JSON string into a Javascript Object
*/
let stringfied = JSON.stringify(obj);
let parsed = JSON.parse(JSONString);

console.log("Stringified object: " + stringfied);
console.log("Parsed JSON: ");
console.log(parsed);
