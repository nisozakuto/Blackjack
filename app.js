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
  value: 11
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

//Variables
let hitButton, currentCardNumber, yourBet = 0,
  firstCard = true,
  yourMoney = 360,
  playersHand = 0,
  dealersHand = 0,
  cardNumber = 1,
  isHitPressed = false,
  isDealPressed = false,
  newCard, betMoney, dealersAccumulator = 0,
  playerAccumulator = 0,
  isStand = false,
  dealer = "dealer",
  player = "player",
  tempCard;
let playersHandObj = [];
let dealersHandObj = [];

//Objects
const gameObj = {
  isStarted: false,
  gameStarter() {
    this.isStarted = true;
  },
  winner: null,
  changeWinner(winner) {
    this.winner = winner;
  }
}

//Divs
const yourBetText = document.querySelector('.yourBet');
const yourMoneyText = document.querySelector('.yourMoney');
const cardsArea = document.querySelector('.cardsArea');
const dealerZone = document.querySelector('.dealerZone');
const playerZone = document.querySelector('.playerZone');
let startDiv = document.querySelector('.startDiv');
let titleHolderDiv = document.querySelector('.titleHolder');
const playersHandText = document.querySelector('#playersHand');
const dealersHandText = document.querySelector('#dealersHand');

//Buttons
const startButton = document.querySelector('.startButton');
const dealButton = document.createElement('button');
const newRound = document.querySelector('.newRound');
let myStandButton, myHitButton;

//Chips
const chips = document.querySelectorAll('.chips');
const tenChip = document.querySelector('#tenChip');

yourMoneyText.innerHTML = yourMoney;

dealButton.id = "deal";
dealButton.textContent = "Deal";
cardsArea.before(dealButton)
dealButton.addEventListener('click', deal);

//Functions
function startTheGame(e) {
  startDiv.classList.remove('startDiv')
  titleHolderDiv.classList.remove('titleHolder')
  const startingH1 = document.querySelector('#startingH1')
  startingH1.style.display = 'none';
  yourBet += 10;
  yourMoney -= 10;
  yourMoneyText.innerHTML = yourMoney;
  yourBetText.innerHTML = yourBet;
  tenChip.id = 'tenChipMove';
  gameObj.gameStarter();
}

function bet(amount) {
  betMoney = parseInt(amount.target.innerHTML);
  if (yourMoney < betMoney) {
    alert("You do not have that much cash")
  } else {
    yourBet += betMoney;
    yourMoney -= betMoney;
    yourBetText.innerHTML = yourBet;
    yourMoneyText.innerHTML = yourMoney;
  }
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

  //Create the Hit Button
  createHitButton();

  //Create the Stand Button
  createStandButton();
}

function createHitButton() {
  myHitButton = document.createElement('button');
  myHitButton.setAttribute('class', 'hitButton')
  myHitButton.id = "hitButton";
  myHitButton.textContent = "Hit";
  cardsArea.before(myHitButton)
  if (!isDealPressed) {
    dealButton.parentNode.removeChild(dealButton);
    isDealPressed = true;
  }
  myHitButton.addEventListener('click', playerGetsCards);
}

function createStandButton() {
  myStandButton = document.createElement('button');
  myStandButton.setAttribute('class', 'standButton')
  myStandButton.id = "standButton";
  myStandButton.textContent = "Stand";
  myHitButton.after(myStandButton)
  myStandButton.addEventListener('click', stand);
}

//DEAL AND HIT
function playerGetsCards() {
  tempPlayerCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
  playersHandObj.push(tempPlayerCard)
  playerAccumulator = playersHandObj[playersHandObj.length - 1].value + playerAccumulator
  console.log('playerAccumulator', playerAccumulator)
  generateTheCardDom("playerCard");
  newCard.style.backgroundImage = "url(/Blackjack/assets/" + playersHandObj[playersHandObj.length - 1].id + ".png";
  playerZone.appendChild(newCard);
  updateTheScoreOnPage();
  // autoWinOrBust();

  if (playerAccumulator == 21)
    console.log("Player Won")
  if (playerAccumulator > 21)
    console.log("Player Lost")

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

//UPDATE THE SCORE ON PAGE
function updateTheScoreOnPage() {
  playersHandText.innerText = playerAccumulator;
  dealersHandText.innerHTML = dealersAccumulator;
  yourMoneyText.innerText = yourMoney;
  yourBetText.innerText = betMoney;

}

//AUTO WIN OR BUST
function autoWinOrBust() {
  console.log("Checking")
  console.log("Dealer: ", dealersAccumulator, " Player: ", playerAccumulator);

  if (dealersAccumulator > 21) {
    console.log("Dealer Lost")
  } else if (dealersAccumulator === 21) {
    console.log("BJ Win")
    gameObj.changeWinner(dealer);
  } else if (playerAccumulator > 21) {
    console.log("Player Lost")
  } else if (playerAccumulator === 21) {
    console.log("BJ Win")
    gameObj.changeWinner(player);
  } else if (dealersAccumulator == playerAccumulator) {
    alert("Push");
    yourMoney += yourBet;
  } else if (dealersAccumulator > playerAccumulator) {
    console.log("Dealer  wins")
    gameObj.changeWinner(dealer);
  } else if (playerAccumulator > dealersAccumulator) {
    console.log("player wins")
    gameObj.changeWinner(player);
  } else {
    console.log("Did not win/lose yet")
  }
  console.log(gameObj.winner)
  if (gameObj.winner == player) {
    console.log(yourBet)
    yourMoney += (yourBet * 2);
    console.log(yourMoney)
    alert("You won!! $", (yourBet * 2));
  }
  if (gameObj.winner == dealer) {
    alert("You lost!!");
  }
}

//Deal for Dealer
function dealerGetsCards() {
  getACard(dealer)
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
  updateTheScoreOnPage();
  if (isStand)
    console.log("Standing")
}

function getACard(player) {
  if (player == "dealer") {
    tempCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
    dealersHandObj.push(tempCard)
    console.log("Dealers card: ", tempCard)
  }
  if (player == "player") {
    tempCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
    playersHandObj.push(tempCard)
    console.log("Player card: ", tempCard)
  }
}

function generateTheCardDom(turn) {
  newCard = document.createElement('div');
  newCard.setAttribute('class', turn);
}

//RemoveHitButton
function removeHitButton() {
  const hitButton = document.querySelector('#hitButton')
  hitButton.remove();
}

//RemoveStandButton
function removeStandButton() {
  const standButton = document.querySelector('#standButton')
  standButton.remove();
}

//STAND
function stand() {
  if (!isHitPressed) {
    removeHitButton();
    isHitPressed = true;
    removeStandButton();
  }

  isStand = true;
  console.log("Stand!!!!")
  console.log(dealersHandObj)
  dealersHandObj.forEach((e) => {
    dealersAccumulator += e.value;
    console.log('dealersAccumulator ', dealersAccumulator);
  })

  if (dealersAccumulator < 16) {
    getACard()
  }
  const firstCard = document.querySelector('.hideCard')
  autoWinOrBust();
  firstCard.setAttribute('class', 'dealersCards')
}

//START THE GAME
document.body.addEventListener('click', () => {
  if (!gameObj.isStarted) {
    startTheGame();
  }
})

function newRoundFunction() {
  playersHandObj = [];
  dealersHandObj = [];
  playerZone.innerHTML = ""
  dealerZone.innerHTML = ""
  tenChip.setAttribute('class', 'tenChip')
  tenChip.innerHTML = ""
  dealersAccumulator = 0;
  playerAccumulator = 0;
  firstCard = true;
  // createHitButton();
  // createStandButton();
  removeHitButton();
  removeStandButton();
  deal();
}

chips.forEach((chip, i) => {
  chips[i].addEventListener('click', bet);
})

dealButton.addEventListener('click', deal)
newRound.addEventListener('click', newRoundFunction);