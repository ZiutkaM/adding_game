

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const bravo = document.querySelector('.super') 

const level = document.querySelector('.lvl');
const starAll = document.getElementsByClassName('star');

const guessSubmit = document.querySelector('.guessSubmit')  ;
const guessField = document.querySelector('.guessField');

const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');

const lvl2 = document.querySelector('.lvl2');


var x = 10;
var z = 1
var sum = Math.floor((Math.random() * (x-z)) + z);


var add1 = Math.floor((Math.random() * sum) );
var add2 = (sum-add1) ;

num1.textContent= add1;
num2.textContent= add2;

let guessCount = 0;
guessField.focus();
let resetButton;


function checkAdd() {
    var resultAdd = add1 + add2;
    var userGuess = Number(guessField.value);

    if (userGuess == resultAdd){
        lastResult.textContent = "Gratulacje!";
        lastResult.style.color = "#186334";
        guessField.style.backgroundColor = ""
        lowOrHi.textContent = "";
        guessCount++;
        var text = "star"+ guessCount.toString();
        console.log(text);
        var star = document.getElementById(text);
        star.style.visibility = "visible";
        setGameOver();


    } else {
    
        lastResult.textContent = "ŹLE!";
        lastResult.style.color = "#a3004c";
        guessField.style.backgroundColor = "#FF9999"
        // guessCount=0;
        if (userGuess < resultAdd) {
            lowOrHi.textContent = "za mało!";

        } else {
            lowOrHi.textContent = "za dużo!";

        }
    }


    // guessField.value = "";
    // guessField.focus();
    
    if (guessCount==5){
        x += 10;
        z += 10;
        
        level.textContent="Poziom " + (x/10)
        guessCount=0;
        for (i=0, len=starAll.length; i < len; i++) {
            starAll[i].style.visibility= "hidden";
        }
        bravo.style.visibility = "visible";
    

    }
};

guessSubmit.addEventListener("click", checkAdd);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Dalej";
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);

};

resetButton.focus();

function resetGame() {

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i=0; i< resetParas.length; i++){
        resetParas[i].textContent = "";

    }
    resetButton.parentNode.removeChild(resetButton);


    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    sum = Math.floor((Math.random() * (x-z)) + z);


    add1 = Math.floor((Math.random() * sum) );
    add2 = (sum-add1);

    num1.textContent= add1;
    num2.textContent= add2;

    bravo.style.visibility = "hidden";


}



//console.log("dupa");
