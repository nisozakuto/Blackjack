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
  cardNumber = 1;

const gameObj = {
  isStarted: false,
  gameStarter() {
    this.isStarted = true;
    console.log(this.isStarted)
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
  console.log("10 is down")
  yourMoneyText.innerHTML = yourMoney;
  yourBetText.innerHTML = yourBet;
  tenChip.id = 'tenChipMove';
  gameObj.gameStarter();
}

function bet(amount) {
  let betMoney = 0;
  // console.log("amount", amount.target.id)
  // if (amount.target.innerHTML == 1) {
  //   // console.log(amount.target.innerHTML);
  //   betMoney = 1;
  //   console.log("betMoney", betMoney)
  // } else if (amount.target.innerHTML == 5) {
  //   betMoney = 5;
  //   console.log("betMoney", betMoney)
  // } else if (amount.target.innerHTML == 10) {
  //   betMoney = 10;
  //   console.log("betMoney", betMoney)
  // } else if (amount.target.innerHTML == 50) {
  //   betMoney = 50;
  //   console.log("betMoney", betMoney)
  // }
  betMoney = parseInt(amount.target.innerHTML);
  console.log(betMoney)
  yourBet += betMoney;
  // console.log(amount.target.innerText)
  // yourBet += parseInt(amount.target.innerText);
  // console.log(yourBet)
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
    console.log("Dealing for player")
  }
  console.log("Dealing")
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
  generateTheCardDom("playerCard")
  playersHand += currentCardNumber;
  // const newCard = document.createElement('div');
  // newCard.setAttribute('class', 'playerCard')
  newCard.id = "playercardNumber" + cardNumber;
  cardNumber++;
  newCard.style.backgroundImage = "url(/Blackjack/assets/" + convertTheNumber(currentCardNumber) + getRandomShape() + ".png";
  playerZone.appendChild(newCard);
  // console.log("Players Total hand: " + playersHand)
  updateHands();
}

function updateHands() {
  const playersHandText = document.querySelector('#playersHand');
  playersHandText.innerText = playersHand;
  const dealersHandText = document.querySelector('#dealersHand');
  dealersHandText.innerHTML = dealersHand;
}

//Deal for Dealer
function dealerGetsCards() {
  calculateWinner();
  console.log("===")
  getACardNumber();
  dealersHand += currentCardNumber;
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
  console.log('dealersNumberAndShape', dealersNumberAndShape)
  console.log('dealersHand', dealersHand)
  console.log("Dealders card: ", currentCardNumber);
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
  // const hitButton = document.querySelector('#hitButton')
  // hitButton.parentElement.removeChild(hitButton);

  // newCard.setAttribute('class', 'dealersFirstCard')

  const firstCard = document.querySelector('.hideCard')
  firstCard.removeAttribute('class', 'hideCard');
  firstCard.setAttribute('class', 'dealersCards')

  dealerGetsCards();


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
document.body.addEventListener('click', () => {
  if (!gameObj.isStarted) {
    startTheGame();
  }

})