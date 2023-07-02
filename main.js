let message = document.getElementById("message");
let sum = document.getElementById("sum");
let cards = document.getElementById("cards");
let player = document.getElementById("player");

let playerN = {
    name: "Nesrin",
    chips: 320
}

let cardsN = [];
let sumN = 0;
let messageN = "";
let hasBlackJack = false;
let isAlive = false;

player.textContent = `${playerN.name} : ${playerN.chips} $`;

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsN = [firstCard, secondCard];
    sumN = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cards.textContent = "Cards : ";
    for (let i = 0; i < cardsN.length; i++) {
        cards.textContent += cardsN[i] + " ";
    }
    
    sum.textContent = "Sum : " + sumN;
    if (sumN <= 20) {
        messageN = "Do you want to draw a new card?";
    } else if (sumN === 21) {
        messageN = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        messageN = "You're out of the game!";
        isAlive = false;
    }
    message.textContent = messageN;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sumN += card;
        cardsN.push(card);
        renderGame();   
    }
}