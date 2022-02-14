// This script introduces using 'getElementById', innerHTML property, and 'getElementsByClassName'


/* 
    'getElementById' is a built-in function, referenced from the 'document' (reference to our webpage) that will find an element based on the value of it's id attribute.
    Keep in mind, it only finds the first element with this id.
*/
let para = document.getElementById("Example");

/*
    To get more insight on what is going on...lets see what 'document' refers to...
    We will see that 'document' refers to our entire webpage. There is alot of built-in functionality and properties we can interact with!
*/
console.log(document);

// This references the specific HTML element that we found above
console.log(para); 


/* 
    innerHTML is a property of all HTML elements. It reference information between the opening and closing tags of an HTML element
*/
console.log(para.innerHTML);
para.innerHTML = "Changed"; // we will see this change on our HTML document as well
console.log(para.innerHTML);


/*
    'getElementsByClassName' will return an array with all of the elements that have a particular class
*/
let elems = document.getElementsByClassName("Example");
console.log(elems);

// for all the elements in the array,
    // give the element in the current iteration a new innerHTML value
for (let i = 0; i < elems.length; i++) {
    elems[i].innerHTML = "New Value. Element #" + i;
}