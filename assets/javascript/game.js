

const playerList = ["ray allen", "tim duncan", "lebron james", "michael jordan", "larry bird", "magic johnson", "wilt chamberlain", "dikembe mutombo", "kobe bryant", "kareem abdul-jabbar", "charles barkley", "jerry west", "dirk nowitzki", "shaq", "dr.j", "karl malone", "steph curry", "yao ming", "david robinson", "bill russell"]

let compGuess = playerList[Math.floor(Math.random() * playerList.length)];
let wordlength = compGuess.length;
let correctLetters = [wordlength];
let wordLetter = compGuess.split("");
let counter = 10;
let winCount = 0;
let win = wordlength;
let blanks = [];
let userChoice = "";



let createBlanks = function() {
    for(let i = 0; i < compGuess.length; i++) {
        correctLetters[i] = "_ "
        blanks = blanks + correctLetters[i];
    }
    document.getElementById("chosenName").innerHTML = blanks;
}

document.onkeyup = function () {
    let userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    let storedLetter = document.createElement("h4");
    storedLetter.innerHTML = userGuess;
    document.getElementById("usedletter").appendChild(storedLetter)
    blanks = "";
    for (let i=0; i< correctLetters.length; i++) {
        if (userGuess === wordLetter[i]) {
            correctLetters[i] = userGuess;
            win--;
        }
        blanks = blanks + correctLetters[i] + " ";
    }
    document.getElementById("chosenName").innerHTML = blanks;
    blanks = "";
}

// document.onkeyup = function() {
//     let userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
//     let storedLetter = document.createElement("h4");
//     storedLetter.innerHTML = userGuess;
//     document.getElementById("usedletter").appendChild(storedLetter)
//     userGuess = userChoice;
// }
document.getElementById("guesses").innerHTML = counter;
window.onload = createBlanks ()


