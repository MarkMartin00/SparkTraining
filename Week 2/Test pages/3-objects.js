/*
    Objects are collections of information using key-value pairs. The information stored in objects are called "properties". Properties can either hold onto static information, similarly to variables, Or it can hold onto functionality.

    TL/DR: Objects are a collection of variables and functions
*/

// let array = [1,2,3];

let person = {
    firstName: "Cynthia",
    lastName: "Enciso",
    age: 26,
    greet: function () {
        console.log("Hello There!");
    }
}

let person2 = {
    firstName: "Steve",
    lastName: "Rogers",
    age: "very old",
    greet: function () {
        console.log("Avengers assemble!");
    }
}

let greet = function () { console.log("This Greet is not on the person"); }
greet(); // This Greet is not on the person
person.greet(); // hello There
person2.greet();

console.log(person);

/*
    When we want to access information on an object, we can either use square brackets [], or a dot .

    Using square brackets, we call the name of a property as a string:
    Syntax:
    objectName["objectProperty"];

    Using dot notation we just put a period after the object name and call the property:
    Syntax:
    objectName.objectProperty;
*/

console.log("The Objects name is: " + person["firstName"]);
console.log("The Objects name is: " + person.firstName);

// person["greet"](); // doesn't work, use dot notation
person.greet();

/*
    In Javascript we can add properties "on-the-fly" (after the object has been created) by accessing a property that does not exist currently on my object. Note, this does not work in every programming language
*/

person.job = "Programmer";
console.log(person.job);
console.log(person);
// person.job = "Clown";
// person.talk = function () { alert("This is the new talk function"); }
// person.talk();

/* 
    Be wary of the names however. Casing and spelling matters!
*/

person.FirstName = "Wilma";
person.firstName = "New firstName";
console.log(person);

/* 
    Constructors are special functions used to create object. When we create our own objects, we have the ability to create our own custom constructors. This way, everytime we create an object, it follow a specific blueprint

    There are two ways to create constructors. An Older way and a newer way (the newer way came as of 2015, along with the 'let' and 'const' keywords and some other nifty features)
*/

/*
    This is the OLD way of creating constructors:
*/

// function Dog(name, breed, age) {
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//     this.bark = function () { 
//         console.log("Bark Bark! my name is: " + this.name);
//     }
// }

// let brian = new Dog("Brian", "White Labrador", 5);
// console.log(brian);


/*
    This is the NEW way of creating constructors, and is the method you should employ:
*/

class Dog {
    // constructor for creating properties for object
    constructor (name, breed, age) {
        this.name = name; // hover over this, then delete 'this' and hover over name
        this.breed = breed;
        this.age = age;
    }

    // functions tied to objects look like this
    bark () {
        console.log("Bark Bark! my name is: " + this.name);
    }
}

let Scooby = new Dog("Scooby Doo", "Great Dane", 7);
console.log(Scooby);
Scooby.bark();

for (let prop in Scooby) {
    console.log(prop + ": " + Scooby[prop]);
}

// arrays
// let array = {
//     0: "first element",
//     1: "second element"
// }

// console.log(array[0]);
