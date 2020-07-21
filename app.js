console.log("start");
let cards = [{
  id: "2C",
  value: 2,
}, {
  id: "2D",
  value: 2
}, {
  id: "2S",
  value: 2
}, {
  id: "2H",
  value: 2
}, {
  id: "3C",
  value: 3
}, {
  id: "3D",
  value: 3
}, {
  id: "3S",
  value: 3
}, {
  id: "3H",
  value: 3
}, {
  id: "4C",
  value: 4
}, {
  id: "4D",
  value: 4
}, {
  id: "4S",
  value: 4
}, {
  id: "4H",
  value: 4
}, {
  id: "5C",
  value: 5
}, {
  id: "5D",
  value: 5
}, {
  id: "5S",
  value: 5
}, {
  id: "5H",
  value: 5
}, {
  id: "6C",
  value: 6
}, {
  id: "6D",
  value: 6
}, {
  id: "6S",
  value: 6
}, {
  id: "6H",
  value: 6
}, {
  id: "7C",
  value: 7
}, {
  id: "7D",
  value: 7
}, {
  id: "7S",
  value: 7
}, {
  id: "7H",
  value: 7
}, {
  id: "8C",
  value: 8
}, {
  id: "8D",
  value: 8
}, {
  id: "8S",
  value: 8
}, {
  id: "8H",
  value: 8
}, {
  id: "9C",
  value: 9
}, {
  id: "9D",
  value: 9
}, {
  id: "9S",
  value: 9
}, {
  id: "9H",
  value: 9
}, {
  id: "10C",
  value: 10
}, {
  id: "10D",
  value: 10
}, {
  id: "10S",
  value: 10
}, {
  id: "10H",
  value: 10
}, {
  id: "JC",
  value: 10
}, {
  id: "JD",
  value: 10
}, {
  id: "JS",
  value: 10
}, {
  id: "JH",
  value: 10
}, {
  id: "QC",
  value: 10
}, {
  id: "QD",
  value: 10
}, {
  id: "QS",
  value: 10
}, {
  id: "QH",
  value: 10
}, {
  id: "KC",
  value: 10
}, {
  id: "KD",
  value: 10
}, {
  id: "KS",
  value: 10
}, {
  id: "KH",
  value: 10
}, {
  id: "AC",
  value: 10
}, {
  id: "AD",
  value: 11
}, {
  id: "AS",
  value: 11
}, {
  id: "AH",
  value: 11
}]
for (let i = 0; i < 300; i++) {
  // console.log(cards[Math.floor(Math.random() * cards.length - 1) + 1]);
}

let playersHandObj = [];
let dealersHandObj = [];

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

function startTheGame(e) {
  startDiv.classList.remove('startDiv')
  titleHolderDiv.classList.remove('titleHolder')
  const startingH1 = document.querySelector('#startingH1')
  startingH1.style.display = 'none';;
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
    console.log("deal")
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
  playersHandObj.push(cards[Math.floor(Math.random() * cards.length - 1) + 1])
  generateTheCardDom("playerCard");
  // console.log("obj length", playersHandObj[playersHandObj.length - 1].id);
  newCard.style.backgroundImage = "url(/Blackjack/assets/" + playersHandObj[playersHandObj.length - 1].id + ".png";
  playerZone.appendChild(newCard);
  // console.log("Players Total hand: " + playersHand)
  updateHands();

  // if (currentCardNumber == 1) {
  //   console.log("player got 1")
  // }
  // if (currentCardNumber > 10) {
  //   playersHand += 10;
  // } else {
  //   playersHand += currentCardNumber;
  // }
  // newCard.id = "playercardNumber" + cardNumber;
  // cardNumber++;

}


//UPDATE HANDS
function updateHands() {
  const playersHandText = document.querySelector('#playersHand');
  playersHandText.innerText = playersHand;
  const dealersHandText = document.querySelector('#dealersHand');
  dealersHandText.innerHTML = dealersHand;
}


//AUTO WIN OR BUST
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

  dealersHandObj.push(cards[Math.floor(Math.random() * cards.length - 1) + 1])


  if (currentCardNumber > 10) {
    dealersHand += 10;
  } else {
    dealersHand += currentCardNumber;
  }
  const newCard = document.createElement('div');
  newCard.setAttribute('class', 'dealersCards')
  if (firstCard) {
    newCard.style.backgroundImage = "url(/Blackjack/assets/" + dealersHandObj[dealersHandObj.length - 1].id + ".png";
    newCard.setAttribute('class', ' dealersCards dealersFirstCard hideCard')
    firstCard = false;
  } else {
    newCard.style.backgroundImage = "url(/Blackjack/assets/" + dealersHandObj[dealersHandObj.length - 1].id + ".png";
  }
  dealerZone.appendChild(newCard);
  updateHands();
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
    const standButton = document.querySelector('#standButton')
    standButton.remove();
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