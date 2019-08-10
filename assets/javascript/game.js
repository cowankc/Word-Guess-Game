

const playerList = ["ray allen", "tim duncan", "lebron james", "michael jordan", "larry bird", "magic johnson", "wilt chamberlain", "dikembe mutombo", "kobe bryant", "Patrick Ewing", "charles barkley", "jerry west", "dirk nowitzki", "shaq", "dr.j", "karl malone", "steph curry", "yao ming", "david robinson", "bill russell"]

let compGuess = playerList[Math.floor(Math.random() * playerList.length)];
let wordlength = compGuess.length;
let correctLetters = [wordlength];
let wordLetter = compGuess.split("");
let counter = 10;
let winCount = 0;
let letterNum = wordlength;
let blanks = [];
let userChoice = "";
let keysUsed = []


let createBlanks = function() {
    for(let i = 0; i < compGuess.length; i++) {
        correctLetters[i] = "_ "
        blanks = blanks + correctLetters[i];
    }
    document.getElementById("chosenName").innerHTML = blanks;
}

window.onload = createBlanks ()

document.onkeyup = function typedKey() {
    let userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    let storedLetter = document.createElement("h4");
    storedLetter.innerHTML = userGuess;
    document.getElementById("usedletter").appendChild(storedLetter)
    keysUsed.push(userGuess)
    blanks = "";
    for (let i=0; i< correctLetters.length; i++) {
        if (userGuess === wordLetter[i]) {
            correctLetters[i] = userGuess;
            letterNum--;
        }
        
        blanks = blanks + correctLetters[i] + " ";
    }
    document.getElementById("chosenName").innerHTML = blanks;
    blanks = "";
}

