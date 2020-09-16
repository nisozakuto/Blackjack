let cards = [
  {
    id: "AC",
    suit: "A",
    value: 11,
  },
  {
    id: "AD",
    suit: "A",
    value: 11,
  },
  {
    id: "AS",
    suit: "A",
    value: 11,
  },
  {
    id: "AH",
    suit: "A",
    value: 11,
  },
  {
    id: "2C",
    value: 2,
  },
  {
    id: "2D",
    value: 2,
  },
  {
    id: "2S",
    value: 2,
  },
  {
    id: "2H",
    value: 2,
  },
  {
    id: "3C",
    value: 3,
  },
  {
    id: "3D",
    value: 3,
  },
  {
    id: "3S",
    value: 3,
  },
  {
    id: "3H",
    value: 3,
  },
  {
    id: "4C",
    value: 4,
  },
  {
    id: "4D",
    value: 4,
  },
  {
    id: "4S",
    value: 4,
  },
  {
    id: "4H",
    value: 4,
  },
  {
    id: "5C",
    value: 5,
  },
  {
    id: "5D",
    value: 5,
  },
  {
    id: "5S",
    value: 5,
  },
  {
    id: "5H",
    value: 5,
  },
  {
    id: "6C",
    value: 6,
  },
  {
    id: "6D",
    value: 6,
  },
  {
    id: "6S",
    value: 6,
  },
  {
    id: "6H",
    value: 6,
  },
  {
    id: "7C",
    value: 7,
  },
  {
    id: "7D",
    value: 7,
  },
  {
    id: "7S",
    value: 7,
  },
  {
    id: "7H",
    value: 7,
  },
  {
    id: "8C",
    value: 8,
  },
  {
    id: "8D",
    value: 8,
  },
  {
    id: "8S",
    value: 8,
  },
  {
    id: "8H",
    value: 8,
  },
  {
    id: "9C",
    value: 9,
  },
  {
    id: "9D",
    value: 9,
  },
  {
    id: "9S",
    value: 9,
  },
  {
    id: "9H",
    value: 9,
  },
  {
    id: "10C",
    value: 10,
  },
  {
    id: "10D",
    value: 10,
  },
  {
    id: "10S",
    value: 10,
  },
  {
    id: "10H",
    value: 10,
  },
  {
    id: "JC",
    value: 10,
  },
  {
    id: "JD",
    value: 10,
  },
  {
    id: "JS",
    value: 10,
  },
  {
    id: "JH",
    value: 10,
  },
  {
    id: "QC",
    value: 10,
  },
  {
    id: "QD",
    value: 10,
  },
  {
    id: "QS",
    value: 10,
  },
  {
    id: "QH",
    value: 10,
  },
  {
    id: "KC",
    value: 10,
  },
  {
    id: "KD",
    value: 10,
  },
  {
    id: "KS",
    value: 10,
  },
  {
    id: "KH",
    value: 10,
  },
];

//Variables
let hitButton,
  currentCardNumber,
  yourBet = 0,
  firstCard = true,
  yourMoney = 3600,
  playersHand = 0,
  dealersHand = 0,
  cardNumber = 1,
  isHitPressed = false,
  isDealPressed = false,
  newCard,
  betMoney = 0,
  dealersAccumulator = 0,
  playerAccumulator = 0,
  dealer = "dealer",
  player = "player",
  tempCar,
  reduced = false,
  totalOfAces = 0,
  totalOfAcesForDealer = 0,
  isDealt = false;

let playersHandObj = [];
let dealersHandObj = [];

//Objects
const gameObj = {
  isStarted: false,
  gameStarter() {
    this.isStarted = true;
  },
  gameFinisher() {
    this.isStarted = false;
  },
  restarting: false,
  winner: null,
  changeWinner(winner) {
    this.winner = winner;
  },
  bet: 0,
  increaseBet(amount) {
    this.bet = amount;
  },
  decreaseBet(amount) {
    this.bet = amount;
  },
  isHitButtonOnThePage: false,
  isStandButtonOnThePage: false,
};

//Divs
const yourBetText = document.querySelector(".yourBet");
const yourMoneyText = document.querySelector(".yourMoney");
const cardsArea = document.querySelector(".cardsArea");
const dealerZone = document.querySelector(".dealerZone");
const playerZone = document.querySelector(".playerZone");
let startDiv = document.querySelector("#announcementDiv");
let titleHolderDiv = document.querySelector("#announcementTitle");
const playersHandText = document.querySelector("#playersHand");
const dealersHandText = document.querySelector("#dealersHand");
const buttonsZone = document.querySelector(".buttonsArea");
const startingH1 = document.querySelector("#startingH1");
const chipsArea = document.querySelector(".chipsArea");
//Buttons
const startButton = document.querySelector(".startButton");
let dealButton = document.createElement("button");
const newRound = document.querySelector(".newRound");
const blackjackButton = document.querySelector(".blackjackButton");
let myStandButton, myHitButton;

//Chips
const chips = document.querySelectorAll(".chips");

//RUN ONE TIME
yourMoneyText.innerHTML = yourMoney;
dealButton.id = "deal";
dealButton.textContent = "Deal";
buttonsZone.appendChild(dealButton);
dealButton.addEventListener("click", deal);

if (localStorage.getItem("yourMoneyLocal")) {
  yourMoney = localStorage.getItem("yourMoneyLocal");
  updateTheMoneyOnPage();
}

function resetMoney() {
  yourMoney = 3600;
  localStorage.setItem("yourMoneyLocal", 3600);
}

//START THE GAME
startDiv.addEventListener("click", () => {
  // debugger;
  // alert("Clciked");
  if (!gameObj.isStarted) {
    startTheGame();
  }
  if (gameObj.restarting == true) {
    cleanTheStartScreen();
    showNewRoundButton();
  }
});

//Functions
function startTheGame(e) {
  cleanTheStartScreen();
  initialBet();
  gameObj.gameStarter();
}

function cleanTheStartScreen() {
  startDiv.classList.remove("startDiv");
  titleHolderDiv.classList.remove("titleHolder");
  startingH1.style.display = "none";
}

function initialBet() {
  yourBet = 10;
  yourMoney -= 10;
  updateTheMoneyOnPage();
}

function createStandButton() {
  if (!gameObj.isStandButtonOnThePage) {
    myStandButton = document.createElement("button");
    myStandButton.setAttribute("class", "standButton");
    myStandButton.id = "standButton";
    myStandButton.textContent = "Stand";
    myHitButton.after(myStandButton);
    myStandButton.addEventListener("click", stand);
  }
  gameObj.isStandButtonOnThePage = true;
}

//WINNING announcement
function announcement(winner) {
  startDiv.setAttribute("class", "startDiv");
  titleHolderDiv.setAttribute("class", "titleHolder");
  startingH1.style.display = "block";
  startingH1.innerText = winner;
  gameObj.restarting = true;
}

//BETTING
function bet(amount) {
  if (!isDealt) {
    //Bet money is only being used in this function
    betMoney = 0;
    betMoney = parseInt(amount.target.innerHTML);
    if (yourMoney < betMoney) {
      alert("You do not have enough cash");
    } else {
      yourBet += betMoney;
      yourMoney = yourMoney - betMoney;
      yourBetText.innerHTML = yourBet;
      yourMoneyText.innerHTML = yourMoney;
    }

    setTimeout(() => {
      yourMoneyText.setAttribute("class", "yourMoney");
      yourBetText.setAttribute("class", "yourMoney");
    }, 1000);
  } else console.log("isDealt: ", isDealt);
}

//DEAL AND HIT
async function playerGetsCards() {
  tempPlayerCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
  playersHandObj.push(tempPlayerCard);
  playerAccumulator =
    playersHandObj[playersHandObj.length - 1].value + playerAccumulator;
  generateTheCardDom(
    "playerCard",
    playersHandObj[playersHandObj.length - 1].id,
    playerZone
  );
  calcsForPlayersCard();
}

//Calcs For Players Cards - to be used in cheat buttons as well
function calcsForPlayersCard() {
  if (playersHandObj[playersHandObj.length - 1].suit == "A") {
    totalOfAces++;
  }

  if (totalOfAces > 0) {
    if (playerAccumulator > 21) {
      playerAccumulator -= 10;
      totalOfAces--;
    }
  }

  if (playerBJWins()) {
    sleep(1000);
    updateTheMoneyOnPage();
    showDealersFirstCard();
    announcement("Player won with a Blackjack");
  }
  if (playerBust()) {
    updateTheMoneyOnPage();
    announcement("Past 21, Dealer Won");
    //Local Storage
    if (yourMoney == 0) {
      announcement("You broke... Start again");
      saveTheNewMoney(3600);
      updateTheMoneyOnPage();
    }
  }
  updateTheScoreOnPage();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//DEAL - used
async function deal() {
  isDealt = true;
  chips.forEach((e) => {
    e.classList.add("halfOpacity");
  });
  dealButton.style.display = "none";
  for (let i = 0; i < 2; i++) {
    await sleep(275);
    playerGetsCards();
  }
  for (let i = 0; i < 2; i++) {
    await sleep(275);
    dealerGetsCards();
  }
  createHitButton();
  createStandButton();
}

function showDealersFirstCard() {
  const firstCard = document.querySelector(".hideCard");
  if (firstCard) {
    firstCard.setAttribute("class", "dealersCards");
  }
}
//STAND - used
async function stand() {
  removeHitButton();
  removeStandButton();
  showDealersFirstCard();
  while (dealersAccumulator < 17) {
    getACard(dealer);
    await sleep(800);
    generateTheCardDom(
      "dealersCards",
      dealersHandObj[dealersHandObj.length - 1].id,
      dealerZone
    );

    if (dealersHandObj[dealersHandObj.length - 1].suit == "A") {
      totalOfAcesForDealer++;
    }
    if (totalOfAcesForDealer > 0) {
      if (dealersAccumulator > 21) {
        dealersAccumulator -= 10;
        totalOfAcesForDealer--;
      }
    }
    updateTheScoreOnPage();
  }

  await sleep(475);

  //WINNING LOGIC WHEN YOU STAND
  if (!dealerAutoBustorWin()) {
    if (dealersAccumulator > playerAccumulator) {
      gameObj.changeWinner(dealer);
      announcement("Dealer Won!");
      gameObj.changeWinner(dealer);
      endGameCalc();
    }
    if (dealersAccumulator === playerAccumulator) {
      yourMoney += yourBet;
      yourBet = 0;
      announcement("Push, values are equal");
      gameObj.changeWinner(null);
      endGameCalc();
    }
    if (dealersAccumulator < playerAccumulator) {
      gameObj.changeWinner(player);
      announcement("Player Won!!");
      gameObj.changeWinner(player);
      endGameCalc();
    }
    // dealerAutoBustorWin();
  }
  showNewRoundButton();
}

function showNewRoundButton() {
  newRound.setAttribute("class", "newRound");
}
//UPDATE THE SCORE ON PAGE - used
function updateTheScoreOnPage() {
  playersHandText.innerText = playerAccumulator;
  dealersHandText.innerHTML = dealersAccumulator;
}

//UPDATE THE MONEY ON PAGE
function updateTheMoneyOnPage() {
  saveTheNewMoney(yourMoney);
  yourBetText.setAttribute("class", "yourBetAnimation yourBet");
  yourMoneyText.setAttribute("class", "yourMoneyAnimation yourMoney");
  yourMoneyText.innerText = yourMoney;
  yourBetText.innerText = yourBet;
  setTimeout(() => {
    yourBetText.setAttribute("class", " yourBet");
    yourMoneyText.setAttribute("class", " yourMoney");
  }, 1000);
}
function saveTheNewMoney(yourMoney) {
  localStorage.setItem("yourMoneyLocal", yourMoney);
  return yourMoney;
}
//WINNING FUNCTIONS - used
function playerBJWins() {
  if (playerAccumulator == 21) {
    if (isDealt) {
      gameObj.changeWinner(player);
      removeHitButton();
      removeStandButton();
      showNewRoundButton();
      gameObj.changeWinner(player);
      endGameCalc();
      return true;
    }
  }
  return false;
}

function playerBust() {
  if (playerAccumulator > 21) {
    removeHitButton();
    removeStandButton();
    showNewRoundButton(); // gameObj.changeWinner(dealer);
    gameObj.changeWinner(dealer);
    endGameCalc();
    if (yourMoney == 0) {
      announcement("You broke... Start again");
      resetMoney();
    }
    return true;
  }
  return false;
}

//DEAER AUTO BUST - used
function dealerAutoBustorWin() {
  if (dealersAccumulator === 21) {
    gameObj.changeWinner(dealer);
    showNewRoundButton();
    gameObj.changeWinner(dealer);
    announcement("Dealer got Blackjack!");
    endGameCalc();
    return true;
  }
  if (dealersAccumulator > 21) {
    showNewRoundButton();
    gameObj.changeWinner(player);
    announcement("Player Won!");
    endGameCalc();
    return true;
  }
  return false;
}

//Deal for Dealer - used
async function dealerGetsCards() {
  getACard(dealer);
  // await sleep(275);

  generateTheCardDom(
    "dealersCards",
    dealersHandObj[dealersHandObj.length - 1].id,
    dealerZone
  );

  if (dealersHandObj[dealersHandObj.length - 1].suit == "A") {
    totalOfAcesForDealer++;
  }
  if (firstCard) {
    newCard.setAttribute("class", "dealersCards  hideCard");
    firstCard = false;
  }
  updateTheScoreOnPage();
}

function getACard(player) {
  if (player == "dealer") {
    tempCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
    dealersHandObj.push(tempCard);
    dealersAccumulator = tempCard.value + dealersAccumulator;
    return tempCard.value;
  }
  updateTheScoreOnPage();
}

//END GAME CALCULATION - used
function endGameCalc() {
  if (gameObj.winner == player) {
    yourMoney = yourBet * 2 + yourMoney;
  } else if (gameObj.winner == dealer) {
  } else if (gameObj.winner == null) {
    yourMoney += yourBet;
  }
  yourBet = 0;
  updateTheScoreOnPage();
  updateTheMoneyOnPage();
}

//DOM RELATED

//GENERATE CARD DOM
function generateTheCardDom(className, fileName, whatZonetoAppend) {
  newCard = document.createElement("div");
  newCard.setAttribute("class", className + " cardsComingIn");
  newCard.style.backgroundImage = "url(./assets/" + fileName + ".png";
  whatZonetoAppend.appendChild(newCard);
}

//CREATE HIT BUTTON
function createHitButton() {
  if (!gameObj.isHitButtonOnThePage) {
    myHitButton = document.createElement("button");
    myHitButton.setAttribute("class", "hitButton");
    myHitButton.id = "hitButton";
    myHitButton.textContent = "Hit";
    buttonsZone.appendChild(myHitButton);
    if (!isDealPressed) {
      // dealButton.parentNode.removeChild(dealButton);
      isDealPressed = true;
    }
    myHitButton.addEventListener("click", playerGetsCards);
  }
  gameObj.isHitButtonOnThePage = true;
}

//RemoveHitButton
function removeHitButton() {
  const hitButton = document.querySelector("#hitButton");
  if (gameObj.isHitButtonOnThePage) {
    hitButton.remove();
  }
  gameObj.isHitButtonOnThePage = false;
}

//RemoveStandButton
function removeStandButton() {
  const standButton = document.querySelector("#standButton");
  if (gameObj.isStandButtonOnThePage) {
    standButton.remove();
  }
  gameObj.isStandButtonOnThePage = false;
}

function newRoundFunction() {
  // debugger;
  if (yourMoney == 0) {
    announcement("You broke... Start again");
    saveTheNewMoney(3600);
    updateTheMoneyOnPage();
  }

  newRound.setAttribute("class", "hide");
  playersHandObj = [];
  dealersHandObj = [];
  playerZone.innerHTML = "";
  dealerZone.innerHTML = "";
  dealersAccumulator = 0;
  playerAccumulator = 0;
  firstCard = true;
  updateTheMoneyOnPage();
  updateTheScoreOnPage();
  yourBet = 0;
  gameObj.changeWinner(null);
  reduced = false;
  totalOfAcesForDealer = 0;
  totalOfAces = 0;
  isDealt = false;
  initialBet();
  dealButton.style.display = "block";
  chips.forEach((e) => {
    e.classList.remove("halfOpacity");
  });
}

chips.forEach((chip, i) => {
  chips[i].addEventListener("click", bet);
});

dealButton.addEventListener("click", deal);
newRound.addEventListener("click", newRoundFunction);

//CHEAT BUTTON
let cheatButton = document
  .querySelector(".cheatButton")
  .addEventListener("click", () => {
    let inputCard;
    inputCard = prompt("What card would you like to have?");
    if (inputCard == "j" || inputCard == "J") {
      inputCard = 11;
    } else if (inputCard == "q" || inputCard == "Q") {
      inputCard = 12;
    } else if (inputCard == "k" || inputCard == "K") {
      inputCard = 13;
    } else if (inputCard == "a" || inputCard == "A") {
      inputCard = 1;
    } else if (inputCard > 0 && inputCard < 11) {
      inputCard = inputCard;
    } else {
      alert("wrong input");
      return;
    }
    tempPlayerCard = cards[(inputCard - 1) * 4];

    playersHandObj.push(tempPlayerCard);
    playerAccumulator =
      playersHandObj[playersHandObj.length - 1].value + playerAccumulator;
    generateTheCardDom(
      "playerCard",
      playersHandObj[playersHandObj.length - 1].id,
      playerZone
    );
    cheatInit();
    calcsForPlayersCard();
  });

//Cheat black jack
let cheatBlackJack = document
  .querySelector(".blackjackButton")
  .addEventListener("click", () => {
    tempPlayerCard = cards[1];
    playersHandObj.push(tempPlayerCard);
    playerAccumulator =
      playersHandObj[playersHandObj.length - 1].value + playerAccumulator;
    generateTheCardDom(
      "playerCard",
      playersHandObj[playersHandObj.length - 1].id,
      playerZone
    );
    tempPlayerCard = cards[37];
    playersHandObj.push(tempPlayerCard);
    playerAccumulator =
      playersHandObj[playersHandObj.length - 1].value + playerAccumulator;
    generateTheCardDom(
      "playerCard",
      playersHandObj[playersHandObj.length - 1].id,
      playerZone
    );
    cheatInit();
    calcsForPlayersCard();
  });

function cheatInit() {
  sleep(1000);
  isDealt = true;
}
