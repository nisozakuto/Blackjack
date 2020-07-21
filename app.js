console.log("start");
let cards = [
  "2C",
  "2D",
  "2H",
  "2S",
  "3C",
  "3D",
  "3H",
  "3S",
  "4C",
  "4D",
  "4H",
  "4S",
  "5C",
  "5D",
  "5H",
  "5S",
  "6C",
  "6D",
  "6H",
  "6S",
  "7C",
  "7D",
  "7H",
  "7S",
  "8C",
  "8D",
  "8H",
  "8S",
  "9C",
  "9D",
  "9H",
  "9S",
  "10C",
  "10D",
  "10H",
  "10S",
  "JC",
  "JD",
  "JH",
  "JS",
  "QC",
  "QD",
  "QH",
  "QS",
  "KC",
  "KD",
  "KH",
  "KS",
  "AC",
  "AD",
  "AH",
  "AS"
]
//Variables
let hitButton, currentCardNumber, yourBet = 0,
  firstCard = true,
  yourMoney = 360,
  playersHand = 0,
  dealersHand = 0,
  cardNumber = 1,
  isHitPressed = false;

const gameObj = {
  isStarted: false,
  gameStarter() {
    this.isStarted = true;
  },

}
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
const tenChip = document.querySelector('#tenChip');

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
  yourBetText.innerHTML = yourBet;
  tenChip.id = 'tenChipMove';
  gameObj.gameStarter();
}

function bet(amount) {
  let betMoney = 0;
  betMoney = parseInt(amount.target.innerHTML);
  console.log(betMoney)
  yourBet += betMoney;
  yourMoney -= betMoney;
  yourBetText.innerHTML = yourBet;
  yourMoneyText.innerHTML = yourMoney;
}

function handCalculation() {

}

function deal() {
  //First Player get 2 cards
  for (let i = 0; i < 2; i++) {
    playerGetsCards()
  }
  //Dealer gets 2 cards
  for (let i = 0; i < 2; i++) {
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
  myStandButton.textContent = "Stand";
  myButton.after(myStandButton)
  myStandButton.addEventListener('click', stand);
}

let newCard;
//DEAL AND HIT
function playerGetsCards() {
  getACardNumber();
  generateTheCardDom("playerCard");
  if (currentCardNumber == 1) {
    console.log("player got 1")
  }
  if (currentCardNumber > 10) {
    playersHand += 10;
  } else {
    playersHand += currentCardNumber;
  }
  newCard.id = "playercardNumber" + cardNumber;
  cardNumber++;
  newCard.style.backgroundImage = "url(/Blackjack/assets/" + convertTheNumber(currentCardNumber) + getRandomShape() + ".png";
  playerZone.appendChild(newCard);
  console.log("Players Total hand: " + playersHand)
  updateHands();
}

function updateHands() {
  const playersHandText = document.querySelector('#playersHand');
  playersHandText.innerText = playersHand;
  const dealersHandText = document.querySelector('#dealersHand');
  dealersHandText.innerHTML = dealersHand;
}

function autoWinOrLoss() {
  if (dealersHand > 21) {
    console.log("Dealer Lost")
  }
  if (dealersHand === 21) {
    console.log("BJ Win")
  }
  if (playersHand > 21) {
    console.log("Player Lost")
  }
  if (playersHand === 21) {
    console.log("BJ Win")
  }
}


//Deal for Dealer
function dealerGetsCards() {
  console.log("===")
  getACardNumber();
  if (currentCardNumber > 10) {
    dealersHand += 10;
  } else {
    dealersHand += currentCardNumber;
  }
  let dealersNumberAndShape = convertTheNumber(currentCardNumber) + getRandomShape();
  const newCard = document.createElement('div');
  newCard.setAttribute('class', 'dealersCards')
  if (firstCard) {
    newCard.style.backgroundImage = "url(/Blackjack/assets/" + dealersNumberAndShape + ".png";
    newCard.setAttribute('class', ' dealersCards dealersFirstCard hideCard')
    firstCard = false;
  } else {
    newCard.style.backgroundImage = "url(/Blackjack/assets/" + dealersNumberAndShape + ".png";
  }
  dealerZone.appendChild(newCard);
  updateHands();
}

function getACardNumber() {
  currentCardNumber = parseInt(getRandomNumber());
}

function generateTheCardDom(turn) {
  newCard = document.createElement('div');
  newCard.setAttribute('class', turn);
}

function calculateWinner() {
  console.log('calculateWinner')
}

//STAND
function stand() {
  if (!isHitPressed) {
    const hitButton = document.querySelector('#hitButton')
    hitButton.remove();
    isHitPressed = true;
  }
  const firstCard = document.querySelector('.hideCard')
  firstCard.removeAttribute('class', 'hideCard');
  firstCard.setAttribute('class', 'dealersCards')

  dealerGetsCards();
  autoWinOrLoss();
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

//START THE GAME
document.body.addEventListener('click', () => {
  if (!gameObj.isStarted) {
    startTheGame();
  }
})