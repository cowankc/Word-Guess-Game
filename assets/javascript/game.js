

const playerList = ["ray allen", "tim duncan", "lebron james", "michael jordan", "larry bird", "magic johnson", "wilt chamberlain", "dikembe mutombo", "kobe bryant", "kareem abdul-jabbar", "charles barkley", "jerry west", "dirk nowitzki", "shaq", "dr.j", "karl malone", "steph curry", "yao ming", "david robinson", "bill russell"]

let compGuess = playerList[Math.floor(Math.random() * playerList.length)];

let counter = 10;

let wins = 0;

let blanks = [];

let wordLetter = compGuess.split("");

let createBlanks = function() {
    for(let i = 0; i < compGuess.length; i++) {
        blanks.push("_");
    }
    return blanks
}

document.getElementById("chosenName").innerHTML = createBlanks()

let userChoice = document.onkeyup = function() {
    let userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    let storedLetter = document.createElement("h4");
    storedLetter.innerHTML = userGuess;
    document.getElementById("usedletter").appendChild(storedLetter);
}

if (userChoice = wordLetter) {
    console.log("yes")
}


