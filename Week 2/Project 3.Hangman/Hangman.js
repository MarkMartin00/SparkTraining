console.log("Hangman time! I'm your host.")

const maxStrikes=6;
let strikes=0;
let strikeLetters=[maxStrikes];
let word="";
let revealedLetters=[(word.length)];
let letters="";
//word=prompt("Player 1: Give Player 2 a word to guess.").toUpperCase();
word="Teacher".toUpperCase(); //This is temporary so im not prompted everytime I save.
console.log(word);
console.log(word.length);
revealedLetters.fill(false);
let guess = document.getElementById("input-area").value;



    function processGuess(e) {
        e.preventDefault();
        strikes=0;
            drawGallows();
            if (strikes < maxStrikes) {
                console.log(guess);
                for (i=0; i <= word.length; i++)
                    if (guess==indexOf(word)) {
                        console.log(guess);
                        drawWordProgress();              
                    }else {
                        ++strikes;
                        drawGallows();  
                        guess=letters += strikeLetters[index];
                        drawStrikeLetters ();
                     }       
                        }else{
            alert="Game is over!";
    }
}
  
function drawGallows() {
    switch (strikes) {
        case 0:
        document.getElementById("hangman2").src ="../images/strike-0.png";
        break;
        case 1:
        document.getElementById("hangman2").src = ("../images/strike-1.png");
        break;
        case 2:
        document.getElementById("hangman2").src = ("../images/strike-2.png");
        break;
        case 3:
        document.getElementById("hangman2").src = ("../images/strike-3.png");
        break;
        case 4:
        document.getElementById("hangman2").src = ("../images/strike-4.png");
        break;
        case 5:
        document.getElementById("hangman2").src = ("../images/strike-5.png");   
        break;            
}   document.getElementById("submit").addEventListener("click", processGuess);
}

function drawStrikeLetters () {
    for (s=0; s<strikeLetters.length; s++) {
            strikeLetters += ", "; 
            document.getElementById("letters").innerHTML(drawStrikeLetters);
}       }   

function drawWordProgress(){

    for (p=0; p < revealedLetters.length; p++ ) {
        if (indexOf(letters(p))==true) {
            revealedLetters += word(p);
                }
        else {
            revealedLetters += ("- ");   
        }
        console.log(letters);
        document.getElementById("word1").innerHTML= letters;
    }
}  





    /*  (document.getElementById("idname").innerHTML = letters)
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
            


            /* 
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
      

//DOM example

      /* Correct Guesses DOM */
     /*  { function addName(guesses){
            guesses.preventDefault(); 
            let name = document.getElementById("nameInput").value;
            console.log(name);
            let inputNames = document.getElementById("inputValues");
            let nameElement = document.createElement("h3");
            nameElement.innerHTML =name;
            inputNames.appendChild(nameElement);
        } }  */
        //document.getElementById("").addEventListener("submit", addName);
       
    
    //1 Gallows
    //  shows photo of hangman and DOM adding pieces every guess until 6.
    /*{  hangman version DOM */
      /*  function addName(eventColor){
            eventColor.preventDefault(); 
            let color = document.getElementById("person").value;
            console.log(color);
            let person = document.getElementById("hangmanchild2");
            let nameElementColor = document.createElement("h3");
            nameElementColor.innerHTML =color;
            person.appendChild(nameElementColor);
        }*/
        //document.getElementById("hangmanchild2").addEventListener("submit", addName);
        


    //2 Strikes section
    //  shows incorrect guesses as a list. interacts with gallows and guesses
   
    //3 Word Section
    //   shows the word slowly as it is guessed correctly.
    
    
    //let word2= document.getElementById("word2");
    

    //document.getElementById("maxStrikes").innerHTML("submit", revealedLetters);

/*
    //4 Guess section
    //   will contain a form where the player can type in their guess each round.
    */
