console.log("start");

//Variables
let yourBet = 0;
let yourMoney = 360;
let firstCard = true;

///Testing below
for (let i = 0; i < 100; i++) {
  // let numbers = Math.floor(Math.random() * 12) + 1;
  // console.log(numbers)
}
//TEST FUNC
function test() {
  console.log("TEST")
}
////TEST FINISHED

const yourBetText = document.querySelector(".yourBet");
const yourMoneyText = document.querySelector(".yourMoney");
yourMoneyText.innerHTML = yourMoney;
const dealButton = document.querySelector('#deal');
const cardsArea = document.querySelector(".cardsArea");
const dealerZone = document.querySelector('.dealerZone');
const playerZone = document.querySelector('.playerZone');
const startButton = document.querySelector('.startButton');
let startDiv = document.querySelector('.startDiv');


// let playercard1 = document.querySelector(".playerCard");
// playercard1.style.display = "block";
// playercard1.style.backgroundImage = "url(/Blackjack/assets/10C.png";

const chips = document.querySelectorAll('.chips');

function startTheGame(e) {
  startDiv.classList.remove('startDiv')
  console.log(e)
}

function bet(amount) {
  // console.log("amount", amount.target.id)
  yourBet += parseInt(amount.target.id);
  yourMoney -= yourBet;
  yourBetText.innerHTML = yourBet;
  yourMoneyText.innerHTML = yourMoney;
}

function deal() {
  if (yourBet === 0) {
    alert("Need to put some money down")
  } else {
    //Player get 2 cards
    for (let i = 0; i < 2; i++) {
      playerGetsCards()
      //Dealer gets 2 cards
      dealerGetsCards()
    }
  }
  const hitButton = document.createElement('button');
  hitButton.setAttribute('class', 'hitButton')
  hitButton.id = "hit";
  hitButton.textContent = "Hit";
  dealButton.after(hitButton)
}

function playerGetsCards() {
  const newCard = document.createElement('div');
  newCard.setAttribute('class', 'playerCard')
  newCard.style.backgroundImage = "url(/Blackjack/assets/" + getRandomNumber() +
    getRandomShape() +
    ".png";
  playerZone.appendChild(newCard);
}

function dealerGetsCards() {

  const newCard = document.createElement('div');
  newCard.setAttribute('class', 'playerCard')
  if (firstCard) {
    newCard.setAttribute('class', 'dealersFirstCard')
    firstCard = false;
  } else {
    newCard.style.backgroundImage = "url(/Blackjack/assets/" + getRandomNumber() +
      getRandomShape() +
      ".png";
  }
  dealerZone.appendChild(newCard);
}

function getRandomShape() {
  let shape = Math.floor(Math.random() * 4) + 1;
  // console.log("shape: ", shape, " Number: ", shape)
  switch (shape) {
    case 1:
      shape = "C"
    case 2:
      shape = "D"
    case 3:
      shape = "H"
    case 4:
      shape = "S"
  }
  return shape
}

function getRandomNumber() {
  let numbers = Math.floor(Math.random() * 12) + 1;

  if (numbers === 1)
    numbers = "A"
  if (numbers === 11)
    numbers = "J"
  if (numbers === 12)
    numbers = "Q"
  if (numbers === 13)
    numbers = "K"

  return numbers;
}

chips.forEach((chip, i) => {
  // chips[i].addEventListener('click', bet(chips[i].id));
  chips[i].addEventListener('click', bet);
  // console.log(chip.id);
  // console.log(chip.id);
})

dealButton.addEventListener('click', deal)
startButton.addEventListener('click', startTheGame)