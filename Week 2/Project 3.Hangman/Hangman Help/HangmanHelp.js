/* 
    For this assignment. One player will input a word, then a second player will try to guess that word, letter-by-letter. Correct guesses should fill spots in the word in the correct location, leaving blank spaces that are easy to identify for the second player.
    
    Incorrect spaces should count against the second player, and update an image which will show  that the player was wrong. The incorrectly guessed letter should also appear on the webpage. (Note, if the images provided make you feel uncomfortable in anyway, please reach out to your trainer, recruiter or retention specialist. You are not required to use the images provided in the project template files).

    The game will continue until the second player either guesses all of the letters in the word correctly, or until the second player runs out of guesses.

    *****NOTE:Although this file has many lines of code, most of these are notes to explain certain functions. Use this as a guide, but not as "the answer". Use the functions provided and use your own logic inside of them. The code for this project should be fairly straight-forward. You do not need to use anything outside of what is used in the program. You can complete this project using only:
        if-statements
        for-loops
        DOM Manipulation using 'document.getElementById()'
*/

/*
    The variable 'word' is used hold the value that the second player will guess.
    Note the function 'toUpperCase()'. This is to account for putting in either upper or lower case in the prompt when asking for letters. (i.e. 'a' and 'A' should evaluate the same).
*/
let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();


/* 
    We will use the 'revealedLetters' array to show that a letter has correctly been guessed.

    The following creates an array with as many elements as the variable word has characters. each index of revealedLetters will correspond to a character in word, and if revealedLetters[n] is truthy, then word[n] has been correctly guessed. 
*/
let revealedLetters = new Array(word.length);



let strikeLetters = new Array(maxStrikes); // this will contain every letter that has been incorrectly guessed.

/*
    We run 'drawWordProgress' here because this function specifically is used to display the letters guessed, including blank spaces. If your code displays the blank spaces differently, you would not need to run this here.
*/
drawWordProgress(); // run this now, to draw the empty word at the start of the game.

// Manipulates the DOM to write all the strike letters to the appropriate section in hangman.html
function drawStrikeLetters() {
    // your DOM manipulation code here
    // We can: Create a String from strikeLetters and put that into the content of some element.
    /*
    example of how this can be accomplished:
        What do we want to do? - Replace the innerHTML of some area on HTML page with each letter in strike Letters

        What do we need?
            -A string to hold all the letters - stored in a variable
            -A way to "create" that string based on the letters from stirkeLetters array
            -A reference to the HTML element on our webpage

    - try to answer these types of questions for every function when you are thinking through the problem.

        How do we do this?
            1.1 - Create a string variable to hold the letters from the strike letters array
            1.2 - Create a loop that will loop through all letters in strikeLetters array
            1.3 - Every time the loop runs concatenate (add the letter of the current index of strikeLetters to the variable created. 
                (ex: letters += strikeLetters[index])
            1.4 - Assign the innerHTML of an area in our HTML page, with the information in the 
                variable using DOM manipulation. (document.getElementById("idname").innerHTML = letters)
     */
}

// Manipulates the DOM to write the successfully guessed letters of the word, replacing them with dashes if not yet guessed
function drawWordProgress() {
    // your DOM manipulation code here
    /*
    ~PLEASE NOTE: THIS IS ONLY ONE METHOD YOU CAN USE TO COMPLETE THIS ASSIGNMENT~
        1 - Create a variable (string) to represent the word to write to HTML area
        2 - Create a loop (for or while loop) for the length of "revealedLetters"
        3 - For each element of "revealedLetters", check the truthy/falsy value
            3.1 - If the current index of revealedLetters is true, concatenate the same index in word to the string
                    if (revealedLetters[i] == true) { newVariable += word[i] } 
            3.2 - If the current index of revealedLetters is false, concatenate a dash or underscore
                    if (revealedLetters[i] == false) { newVariable += "_" }
                    NOTE: it would be best to handle this with an else statement
        4 - Push our word, (modeled in the array variable we created) to the innerHTML area on HTML page 
            (document.getElementById("id").innerHTML = variableWeCreated)
            4.1 - Assign the innerHTML of an area in our HTML page, with the information in the 
                  variable using DOM manipulation. (document.getElementById("idname").innerHTML = newVariable)
    */
    var wordToRender;

    // More code needed here...

    document.getElementById("wordReveal").innerHTML = wordToRender;
}

// Manipulates the DOM to update the image of the gallows for the current game state.
function drawGallows() {
    // your DOM manipulation code here 
    /* 
        This function should update an <img> element in the html file to point to the correct image. The syntax for the reference would be something like:
            "images/strike-"+strikes+".png"
    */

    /*
        0 - CREATE AN AREA TO STORE OUR IMAGE**

        1 - Get the a reference to the image on our HTML page
        2 - Reference the "src" attribute of that image and update it
            2.0 - document.getElementByID("gallowsImageArea").src = the value we want to change it to 
            ("images/strike-"+strikes+".png")
                <img src="">
            2.1 - "images/strike-"+strikes+".png"
                    ex:
                    if you use ".." when referencing a directory, you go "up" on level
                        <img src="../images/strike-0.png">

                    if you use absolute pathing, the path should be exactly where the file is located
                        <img src="C://root/images/strike-1.png">

                    otherwise if the "images" folder is in the same folder as this HTML file:
                        <img src="images/strike-2.png">
    */

    /*
    There are two main methods for doing this:

    Method 1:
        the syntax for the name of the file is established because the name of the images in the provided files is as follows:
            "strike-0.png"
            "strike-1.png"
            "strike-2.png" etc...

            remember string concatenation:

            "Word" + "Anotherword" would evaluate to: "WordAnotherword". There are no spaces, unless we specifically put one there.
            we can also substitute one of the literal strings, with a variable.
            let a = "Word";
            let b = "anotherword";
            let c = a+b;
            console.log(c+"Hello.png"); // This would print: "WordAnotherwordHello.png"
    */

    /*
    Method 2:
        You can create a switch statement...

        Here...what variable is keeping track of how many times the user incorrectly guessed?
        switch (<<variableThatTracksIncorrectGuesses>>) {
            case 0:
                document.getElementById("image-area").src = "images/strike-0.png"
            case 1:
                document.getElementById("image-area").src = "images/strike-1.png"
            etc...
        }
    */
}

document.getElementById("submitButton").addEventListener("click", processGuess);

function processGuess(e) {
    // This preventDefault function is required to stop our form from refreshing the page. 
    // See the last slide on the Week 1, Day 1 powerpoints for detailed information about this.
    e.preventDefault();
    // the value of the <form>'s <input> element. Remember to change the casing, either toUpperCase() or toLowerCase()
    let guess = document.getElementById("input-area").value;

    // IF PLAYER TWO HAS NOT INCORRECTLY GUESSED TOO MANY TIMES
    if (strikes < maxStrikes) {
        /*
        1 - Get the input from Player 2 (ex: document.getElementById("guessInput").value)
        2 - Store that input in a variable (ex: let guessedLetter = document.getElementById...)
        
        3 - Check the variable (guessedLetter) value against every letter in 'word'
            3.1 - create a loop that will iterate over every letter of 'word'
            3.2 - each iteration check the index of the letter in word (the 1st, then 2nd, 3rd, etc...) against the variable 
            ("wordindex == guessedLetter")
                **For step 3, if you are having trouble, create an array to store all letters in word, this is not needed, 
                but you might find it helpful
        4 - Check if the guessedLetter is INSIDE the word
            (IF THE LETTER IS INSIDE)
            4.1 - Record location of letter inside of "revealedLetters" array
            4.2 - Record that letter was inside of word
            4.2.1 - call drawWordProgress()
    
            (IF THE LETTER IS NOT INSIDE)
            4.3 - Put guessedLetter inside of "strikeLetters"
            4.4 - call drawStrikeLetters()
            4.5.1 - increase the number of strikes by 1.
                Note, we should increase the number of strikes BEFORE drawing a new gallows image
            4.5.2 - Make sure there is an area on your HTML page to hold the image for the gallows
            4.5.3 - call drawGallows()
        */
    } else
        alert("The game is over!");
}