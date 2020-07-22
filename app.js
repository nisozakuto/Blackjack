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
  yourMoney = 360,
  playersHand = 0,
  dealersHand = 0,
  cardNumber = 1,
  isHitPressed = false,
  isDealPressed = false,
  newCard,
  betMoney = 0,
  dealersAccumulator = 0,
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
  updateTheScoreOnPage();
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
  updateTheScoreOnPage();
}

//DEAL AND HIT
function playerGetsCards() {
  tempPlayerCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
  playersHandObj.push(tempPlayerCard);
  playerAccumulator =
    playersHandObj[playersHandObj.length - 1].value + playerAccumulator;
  // console.log('playerAccumulator', playerAccumulator)
  generateTheCardDom(
    "playerCard",
    playersHandObj[playersHandObj.length - 1].id,
    playerZone
  );
  // updateTheScoreOnPage();
  // autoWinOrBust();
  BJWins();
  autoBust();
  // autoWinOrBust();
  // newCard.id = "playercardNumber" + cardNumber;
  // cardNumber++;
  updateTheScoreOnPage();
}

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
  // if (!isHitPressed) {
  //   removeHitButton();
  //   isHitPressed = true;
  //   removeStandButton();
  // }
  removeHitButton();
  removeStandButton();

  isStand = true;
  console.log("Stand!!!!");
  console.log(dealersHandObj);

  while (dealersAccumulator < 17) {
    console.log("Dealerscards is less than 16?");
    getACard(dealer);
    setTimeout(() => {
      generateTheCardDom(
        "dealersCards",
        dealersHandObj[dealersHandObj.length - 1].id,
        dealerZone
      );
    }, 600);
  }
  const firstCard = document.querySelector(".hideCard");
  autoWinOrBust();
  firstCard.setAttribute("class", "dealersCards");
  newRound.setAttribute("class", "newRound");
  setTimeout(() => {
    endGameCalc();
  }, 1500);
}

//UPDATE THE SCORE ON PAGE
function updateTheScoreOnPage() {
  playersHandText.innerText = playerAccumulator;
  dealersHandText.innerHTML = dealersAccumulator;
  yourMoneyText.innerText = yourMoney;
  yourBetText.innerText = yourBet;
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
function BJWins() {
  if (playerAccumulator === 21) {
    console.log("BJ Win function");
    gameObj.changeWinner(player);
    removeHitButton();
    removeStandButton();
    newRound.setAttribute("class", "newRound");
    console.log("[[[[[ALERT]]]]]]]BJ Win");
  }
}

//AUTO BUST FOR PLAYER
function autoBust() {
  console.log("Consoling ", isThereAce(player));
  if (isThereAce(player)) {
    console.log("//////player'da A var");
  }
  if (playerAccumulator > 21) {
    console.log("====AUTO BUST ==== PAST 21");
    removeHitButton();
    removeStandButton();
    newRound.setAttribute("class", "newRound");
    setTimeout(() => {
      console.log("[[[[[ALERT]]]]]]]AUTO BUST");
    }, 250);
  }
}
//AUTO WIN OR BUST`
function autoWinOrBust() {
  // isThereAce();
  console.log("Checking / Auto Win or Bust");
  console.log("Dealer: ", dealersAccumulator, " Player: ", playerAccumulator);

  if (dealersAccumulator > 21) {
    console.log("Dealer Lost");
  } else if (dealersAccumulator === 21) {
    console.log("BJ Win");
    gameObj.changeWinner(dealer);
  } else if (playerAccumulator > 21) {
    console.log("Player Lost");
    // console.log("[[[[[ALERT]]]]]]]You lost!!");
  } else if (dealersAccumulator == playerAccumulator) {
    console.log("[[[[[ALERT]]]]]]]Push");
    yourMoney += yourBet;
  } else if (dealersAccumulator > playerAccumulator) {
    console.log("Dealer  wins");
    gameObj.changeWinner(dealer);
  } else if (playerAccumulator > dealersAccumulator) {
    console.log("player wins");
    gameObj.changeWinner(player);
  } else {
    console.log("Did not win/lose yet");
  }

  if (gameObj.winner == player) {
    console.log(yourBet);
    yourMoney += yourBet * 2;
    console.log(yourMoney);
    // console.log("[[[[[ALERT]]]]]]]You won!! $", (yourBet * 2));
  }
  if (gameObj.winner == dealer) {
    console.log("ALERTTT DEALER WON");
    // console.log("[[[[[ALERT]]]]]]]Dealer wins!!");
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
  if (isStand) console.log("Standing");
}

function getACard(player) {
  if (player == "dealer") {
    tempCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
    dealersHandObj.push(tempCard);
    dealersAccumulator += tempCard.value;
    console.log("TempCard value: ", tempCard.value);
    console.log("dealersAccumulator: ", dealersAccumulator);
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
  gameObj.winner = null;
  updateTheScoreOnPage();
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
    // autoWinOrBust();
    BJWins();
    autoBust();
    // autoWinOrBust();
    // newCard.id = "playercardNumber" + cardNumber;
    // cardNumber++;
  });
