console.log("start");
let cards = [
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
  },
  bet: 0,
  increaseBet(amount) {
    this.bet = amount;
  },
  decreaseBet(amount) {
    this.bet = amount;
  },
};

//Divs
const yourBetText = document.querySelector(".yourBet");
const yourMoneyText = document.querySelector(".yourMoney");
const cardsArea = document.querySelector(".cardsArea");
const dealerZone = document.querySelector(".dealerZone");
const playerZone = document.querySelector(".playerZone");
let startDiv = document.querySelector(".startDiv");
let titleHolderDiv = document.querySelector(".titleHolder");
const playersHandText = document.querySelector("#playersHand");
const dealersHandText = document.querySelector("#dealersHand");
const buttonsZone = document.querySelector(".buttonsArea");

//Buttons
const startButton = document.querySelector(".startButton");
const dealButton = document.createElement("button");
const newRound = document.querySelector(".newRound");
let myStandButton, myHitButton;

//Chips
const chips = document.querySelectorAll(".chips");
const tenChip = document.querySelector("#tenChip");

//RUN ONE TIME
yourMoneyText.innerHTML = yourMoney;
dealButton.id = "deal";
dealButton.textContent = "Deal";
buttonsZone.appendChild(dealButton);
dealButton.addEventListener("click", deal);

//START THE GAME
document.body.addEventListener("click", () => {
  if (!gameObj.isStarted) {
    startTheGame();
  }
});

//Functions
function startTheGame(e) {
  cleanTheStartScreen();
  initialBet();
  tenChip.id = "tenChipMove";
  gameObj.gameStarter();
}

function cleanTheStartScreen() {
  startDiv.classList.remove("startDiv");
  titleHolderDiv.classList.remove("titleHolder");
  const startingH1 = document.querySelector("#startingH1");
  startingH1.style.display = "none";
}

function initialBet() {
  yourBet += 10;
  yourMoney -= 10;
  console.log("initial bet: ", yourBet);
  updateTheMoneyOnPage();
}

function createStandButton() {
  myStandButton = document.createElement("button");
  myStandButton.setAttribute("class", "standButton");
  myStandButton.id = "standButton";
  myStandButton.textContent = "Stand";
  myHitButton.after(myStandButton);
  myStandButton.addEventListener("click", stand);
}

//BETTING
function bet(amount) {
  betMoney = parseInt(amount.target.innerHTML);
  if (yourMoney < betMoney) {
    console.log("[[[[[ALERT]]]]]]]You do not have that much cash");
  } else {
    yourBet += betMoney;
    yourMoney -= betMoney;
    yourBetText.innerHTML = yourBet;
    yourMoneyText.innerHTML = yourMoney;
  }
  setTimeout(() => {
    yourMoneyText.setAttribute("class", "yourMoney");
    yourBetText.setAttribute("class", "yourMoney");
  }, 2000);
  updateTheScoreOnPage();
}

//DEAL AND HIT
function playerGetsCards() {
  tempPlayerCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
  playersHandObj.push(tempPlayerCard);
  playerAccumulator =
    playersHandObj[playersHandObj.length - 1].value + playerAccumulator;
  generateTheCardDom(
    "playerCard",
    playersHandObj[playersHandObj.length - 1].id,
    playerZone
  );
  if (playerBJWinsOrBust()) {
    console.log("playerBJOrBust is correct");
    updateTheMoneyOnPage();
  }
  updateTheScoreOnPage();
}

function winnningFunction() {
  console.log(
    "WinningFunction check. Player: ",
    playerAccumulator,
    " Dealer: ",
    dealersAccumulator
  );
  if (playerAccumulator === 21) {
    console.log("BJ Win");
    // return
    removeHitButton();
    removeStandButton();
    newRound.setAttribute("class", "newRound");
    alert("blackJack");
    endGameCalc();
  }
  if (playerAccumulator > 21) {
    removeHitButton();
    removeStandButton();
    newRound.setAttribute("class", "newRound");
    alert("blackJack");
    console.log("Player past 21");
    endGameCalc();
    // return
  }
}

// function winningAlert() {
//   const wonText = document.createElement("h1");
//   winningText.innerText("Player Won");
//   wonText.appendChild(winningText);
// }
//DEAL
function deal() {
  createHitButton();
  createStandButton();
  for (let i = 0; i < 2; i++) {
    playerGetsCards();
  }
  for (let i = 0; i < 2; i++) {
    dealerGetsCards();
  }
}

//STAND
function stand() {
  removeHitButton();
  removeStandButton();
  while (dealersAccumulator < 17) {
    console.log("Dealerscards is less than 16?");
    getACard(dealer);
    setTimeout(() => {
      generateTheCardDom(
        "dealersCards",
        dealersHandObj[dealersHandObj.length - 1].id,
        dealerZone
      );
    }, 900);
    updateTheScoreOnPage();
  }
  const firstCard = document.querySelector(".hideCard");
  firstCard.setAttribute("class", "dealersCards");
  dealerAutoBustorWin();

  if (dealersAccumulator > playerAccumulator) {
    console.log("Dealer Wins because has a better hand");
    gameObj.changeWinner(dealer);
    console.log("[[[[[ALERT]]]]]]]Dealer Wins");
    gameObj.changeWinner(dealer);
    endGameCalc();
  }
  if (dealersAccumulator === playerAccumulator) {
    console.log("Push");
    yourMoney += yourBet;
    yourBet = 0;
    updateTheMoneyOnPage();
  }

  setTimeout(() => {
    newRound.setAttribute("class", "newRound");
  }, 100);
}

//UPDATE THE SCORE ON PAGE
function updateTheScoreOnPage() {
  playersHandText.innerText = playerAccumulator;
  dealersHandText.innerHTML = dealersAccumulator;
}

//UPDATE THE MONEY ON PAGE
function updateTheMoneyOnPage() {
  yourBetText.setAttribute("class", "yourBetAnimation yourBet");
  yourMoneyText.setAttribute("class", "yourMoneyAnimation yourMoney");
  yourMoneyText.innerText = yourMoney;
  yourBetText.innerText = yourBet;
  setTimeout(() => {
    yourBetText.setAttribute("class", " yourBet");
    yourMoneyText.setAttribute("class", " yourMoney");
  }, 1000);
}

//ACE CALC
function isThereAce(turn) {
  if (turn === "player") {
    for (let i = 0; i < playersHandObj.length; i++) {
      if (playersHandObj[i].suit == "A") {
        console.log("sending true");
        return true;
      }
    }

    if (turn === dealer) {
      console.log("========");
      dealersHandObj.forEach((e) => {
        console.log("dealershand");
        console.log(e);
      });
    }
  }
}

//WINNING FUNCTIONS
function playerBJWinsOrBust() {
  if (playerAccumulator === 21) {
    console.log("BJ Win function");
    gameObj.changeWinner(player);
    removeHitButton();
    removeStandButton();
    newRound.setAttribute("class", "newRound");
    console.log("[[[[[ALERT]]]]]]]BJ Win");
    gameObj.changeWinner(player);
    endGameCalc();
    return true;
  }
  if (playerAccumulator > 21) {
    console.log("Past 21 thus busted");
    removeHitButton();
    removeStandButton();
    newRound.setAttribute("class", "newRound");
    // gameObj.changeWinner(dealer);
    gameObj.changeWinner(dealer);
    console.log("Winner: ", gameObj.winner);
    endGameCalc();
    return true;
  }
  return false;
}

//AUTO BUST FOR PLAYER
function playerAutoBust() {
  if (isThereAce(player)) {
    if (playerAccumulator > 21) {
      console.log("Counting A as 1");
      playerAccumulator -= 10;
      if (playerAccumulator > 21) {
        console.log("Is this a very rare case?");
        console.log("====AUTO BUST ==== PAST 21");
        removeHitButton();
        removeStandButton();
        newRound.setAttribute("class", "newRound");
        setTimeout(() => {
          console.log("[[[[[ALERT]]]]]]]AUTO BUST");
        }, 250);
      }
    }
  } else {
  }
}

function dealerAutoBustorWin() {
  if (dealersAccumulator === 21) {
    gameObj.changeWinner(dealer);
    removeHitButton();
    removeStandButton();
    newRound.setAttribute("class", "newRound");
    console.log("[[[[[ALERT]]]]]]]Dealer BJ Win");
    gameObj.changeWinner(dealer);
    endGameCalc();
    return true;
  }
  if (dealersAccumulator > 21) {
    console.log("Dealer Past 21 thus busted");
    removeHitButton();
    removeStandButton();
    newRound.setAttribute("class", "newRound");
    gameObj.changeWinner(dealer);
    endGameCalc();
    return true;
  }
}

//Deal for Dealer
function dealerGetsCards() {
  getACard(dealer);
  generateTheCardDom(
    "dealersCards",
    dealersHandObj[dealersHandObj.length - 1].id,
    dealerZone
  );
  if (firstCard) {
    newCard.setAttribute("class", "dealersCards dealersFirstCard hideCard");
    firstCard = false;
  }
  updateTheScoreOnPage();
}

function getACard(player) {
  if (player == "dealer") {
    tempCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
    dealersHandObj.push(tempCard);
    dealersAccumulator += tempCard.value;
    // console.log("TempCard value: ", tempCard.value);
    // console.log("dealersAccumulator: ", dealersAccumulator);
    return tempCard.value;
  }
  if (player == "player") {
    tempCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
    playersHandObj.push(tempCard);
    console.log("Player card: ", tempCard);
  }
  updateTheScoreOnPage();
}

//END GAME CALCULATION
function endGameCalc() {
  if (gameObj.winner == player) {
    yourMoney += yourBet * 2;
    console.log("Your money now is: ", yourMoney);
  } else if (gameObj.winner == dealer) {
    console.log("your money is leaving you...");
  }
  yourBet = 0;
  updateTheScoreOnPage();
  updateTheMoneyOnPage();
}

//DOM RELATED

//GENERATE CARD DOM
function generateTheCardDom(turn, fileName, whatZonetoAppend) {
  // console.log("generating the new card")
  newCard = document.createElement("div");
  newCard.setAttribute("class", turn);
  newCard.style.backgroundImage = "url(./assets/" + fileName + ".png";
  whatZonetoAppend.appendChild(newCard);
}

//CREATE HIT BUTTON
function createHitButton() {
  myHitButton = document.createElement("button");
  myHitButton.setAttribute("class", "hitButton");
  myHitButton.id = "hitButton";
  myHitButton.textContent = "Hit";
  buttonsZone.appendChild(myHitButton);
  if (!isDealPressed) {
    dealButton.parentNode.removeChild(dealButton);
    isDealPressed = true;
  }
  myHitButton.addEventListener("click", playerGetsCards);
}

//RemoveHitButton
function removeHitButton() {
  const hitButton = document.querySelector("#hitButton");
  hitButton.remove();
}

//RemoveStandButton
function removeStandButton() {
  const standButton = document.querySelector("#standButton");
  standButton.remove();
}

function newRoundFunction() {
  console.log("---New Round---");
  newRound.setAttribute("class", "hide");
  playersHandObj = [];
  dealersHandObj = [];
  playerZone.innerHTML = "";
  dealerZone.innerHTML = "";
  tenChip.setAttribute("class", "tenChip");
  tenChip.innerHTML = "";
  dealersAccumulator = 0;
  playerAccumulator = 0;
  firstCard = true;
  yourBet = 0;
  gameObj.changeWinner(null);
  // createHitButton();
  // createStandButton();
  //If you won, get your money
  //If you lost, loose your money
  initialBet();
  deal();
}

chips.forEach((chip, i) => {
  chips[i].addEventListener("click", bet);
});

dealButton.addEventListener("click", deal);
newRound.addEventListener("click", newRoundFunction);

const cheatButton = document
  .querySelector(".cheatButton")
  .addEventListener("click", () => {
    // console.log("test");
    tempPlayerCard = cards[51];
    playersHandObj.push(tempPlayerCard);
    playerAccumulator =
      playersHandObj[playersHandObj.length - 1].value + playerAccumulator;
    // console.log('playerAccumulator', playerAccumulator)
    generateTheCardDom(
      "playerCard",
      playersHandObj[playersHandObj.length - 1].id,
      playerZone
    );
    updateTheScoreOnPage();
    BJWins();
    playerAutoBust();
    // newCard.id = "playercardNumber" + cardNumber;
    // cardNumber++;
  });
