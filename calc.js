function compute(entries) {
    let currentAnswer = entries[0];
    console.log(entries);
    for ( let i=0; i < entries.length-1; i++ ) {
        if (entries[i+1] === "+" ) {
            currentAnswer = add(currentAnswer, entries[i+2]);
        }
        if (entries[i+1] === "-" ) {
            currentAnswer = substract(currentAnswer, entries[i+2]);
        }
        if (entries[i+1] === "X" ) {
            currentAnswer = multiply(currentAnswer, entries[i+2]);
        }
        if (entries[i+1] === "÷" ) {
            currentAnswer = divide(currentAnswer, entries[i+2]);
        }
    }
    
        return currentAnswer;
};

function add(term1, term2) {
    return term1 + term2;
    console.log(currentAnswer);
};

function substract(term1, term2) {
    return term1 - term2;
};

function divide(term1, term2) {
    return term1 / term2;
};

function multiply(term1, term2) {
    return term1 * term2;
};

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelector('.buttons');
    let userInput = "";
    const resultScreen = document.querySelector('#result-screen');
    // let screen = resultScreen.innerText;
    const terms = [];
    /*let finalAnswer = [4, "+", '-', 8];
    console.log(finalAnswer);
    console.log(finalAnswer[0] + finalAnswer[3]);
    */

    if (resultScreen.innerText == '') { resultScreen.innerText = 0; }
    buttons.addEventListener('click', function(event) {
        // If Event target class name =
        if (event.target.className.includes("num")) {
            userInput += event.target.innerText;
            resultScreen.innerText = userInput;
                       
        } 
        if (event.target.className.includes("orange")) {
            terms.push(parseInt(userInput));
            userInput = "";
            if (event.target.innerText === "=") {
                // arrayToNum(terms);                          
                resultScreen.innerText = compute(terms);

            }
            else {
                
                terms.push(event.target.innerText); 
            }          
                       
            console.log(terms); 
            
        }
        if (event.target.className.includes("service")) {
            if (event.target.innerText === "C") {
                clear();
                console.log('C');
                                
            }
            else if (event.target.innerText === "←") {
                backspace();
                console.log('bs');
            }
        }
    
    });
    
    
        
    function clear() {
        userInput = "";
        terms.length = 0;
        resultScreen.innerText = 0;
        
    };
    
    function backspace() {
        resultScreen.innerText = resultScreen.innerText.substring(0, resultScreen.innerText.length - 1);
        userInput = resultScreen.innerText;
        if (resultScreen.innerText == '') { resultScreen.innerText = 0; }
    };
    
    function arrayToNum(terms) {
        /*terms.forEach(function(element) { 
           terms[element] = parseInt(element.innerText);
        });
        */
       for (let i=0; i < terms.length; i++) {
           terms[i] = parseInt(terms[i]);
       }
        console.log(terms);
        
    };
});


