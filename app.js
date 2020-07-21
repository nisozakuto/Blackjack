console.log("start");

//Variables
let yourBet = 0;
let yourMoney = 360;
let firstCard = true;
let hitButton;
let playersHand = 0;
let currentCardNumber;
let cardNumber = 1;
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
let titleHolderDiv = document.querySelector('.titleHolder');
const chips = document.querySelectorAll('.chips');

// let playercard1 = document.querySelector(".playerCard");
// playercard1.style.display = "block";
// playercard1.style.backgroundImage = "url(/Blackjack/assets/10C.png";

function startTheGame(e) {
  startDiv.classList.remove('startDiv')
  titleHolderDiv.classList.remove('titleHolder')
  const startingH1 = document.querySelector('#startingH1')
  startingH1.style.display = 'none';;
  // startingH1.innerHTML = ""
  yourBet += 10;
  yourMoney -= 10;
  yourMoneyText.innerHTML = yourMoney;
  yourBetText.innerHTML = yourBet
}

function bet(amount) {
  // console.log("amount", amount.target.id)
  yourBet += parseInt(amount.target.id);
  yourMoney -= yourBet;
  yourBetText.innerHTML = yourBet;
  yourMoneyText.innerHTML = yourMoney;
}

function handCalculation() {

}

function deal() {
  //Player get 2 cards
  for (let i = 0; i < 2; i++) {
    playerGetsCards()
    //Dealer gets 2 cards
    dealerGetsCards()
  }
  const myButton = document.createElement('button');
  myButton.setAttribute('class', 'hitButton')
  myButton.id = "hitButton";
  myButton.textContent = "Hit";
  dealButton.after(myButton)
  dealButton.parentNode.removeChild(dealButton);
  myButton.addEventListener('click', playerGetsCards);

  const myStandButton = document.createElement('button');
  myStandButton.setAttribute('class', 'standButton')
  myStandButton.id = "standButton";
  myStandButton.textContent = "myStandButton";
  myButton.after(myStandButton)
  myStandButton.addEventListener('click', dealerGetsCards);
}

//HIT
function playerGetsCards() {
  currentCardNumber = parseInt(getRandomNumber());
  playersHand += currentCardNumber;
  const newCard = document.createElement('div');
  newCard.setAttribute('class', 'playerCard')
  newCard.id = "playercardNumber" + cardNumber;
  cardNumber++;
  newCard.style.backgroundImage = "url(/Blackjack/assets/" + convertTheNumber(currentCardNumber) + getRandomShape() + ".png";
  playerZone.appendChild(newCard);
  console.log("Total hand: " + playersHand)
}

function dealerGetsCards() {
  const newCard = document.createElement('div');
  newCard.setAttribute('class', 'playerCard')
  if (firstCard) {
    newCard.setAttribute('class', 'dealersFirstCard')
    firstCard = false;
  } else {
    newCard.style.backgroundImage = "url(/Blackjack/assets/" + convertTheNumber(getRandomNumber()) + getRandomShape() + ".png";
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
  return Math.floor(Math.random() * 12) + 1;
}

function convertTheNumber(numbers) {
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
  chips[i].addEventListener('click', bet);
})

dealButton.addEventListener('click', deal)
// startButton.addEventListener('click', startTheGame)

//START THE GAME
if (startDiv.classList.value === ('startDiv')) {
  document.body.addEventListener('click', startTheGame)
}