console.log("Hello Palindromes!");

    phrase="phrase";
    let length = length(phrase);
    let t = 0;
    phrase = phrase.replace(/\W/g, '');
    phrase = phrase.toLowerCase();
    function isPalindrome(phrase){
        while (t <= length/2){
            if (phrase[t] != phrase[length - 1 - t]){
                alert=("This is "+ false);
                return false
                }
            {t++
                alert=("This is "+ true); 
                return true
                }}
    }

