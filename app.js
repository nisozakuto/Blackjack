console.log("start");
let cards = [{
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
  tempCar,
  reduced = false,
  totalOfAces = 0,
  totalOfAcesForDealer = 0;

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

//Buttons
const startButton = document.querySelector(".startButton");
const dealButton = document.createElement("button");
const newRound = document.querySelector(".newRound");
let myStandButton, myHitButton;

//Chips
const chips = document.querySelectorAll(".chips");

//RUN ONE TIME
yourMoneyText.innerHTML = yourMoney;
dealButton.id = "deal";
dealButton.textContent = "Deal";
buttonsZone.appendChild(dealButton);
dealButton.addEventListener("click", deal);

//START THE GAME
startDiv.addEventListener("click", () => {
  // debugger;
  // alert("Clciked");
  if (!gameObj.isStarted) {
    startTheGame();
  }
  if (gameObj.restarting == true) {
    newRoundFunction();
    // debugger;
    cleanTheStartScreen();
    // initialBet();
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

//WINNING announcement
function announcement(winner) {
  startDiv.setAttribute("class", "startDiv");
  titleHolderDiv.setAttribute("class", "titleHolder");
  startingH1.style.display = "block";
  startingH1.innerText = winner;
  // gameObj.gameFinisher();
  gameObj.restarting = true;
  // startingH1.addEventListener("click", startTheGame());
  // gameObj.gameFinisher();
  // gameObj.isStarted = false;
  // startDiv.addEventListener("click", () => {
  //   // debugger;
  //   if (!gameObj.isStarted) {
  //     startTheGame();
  //   }
  // });
}

//BETTING
function bet(amount) {
  //Bet money is only being used in this function
  betMoney = 0;
  betMoney = parseInt(amount.target.innerHTML);
  console.log("betMoney", betMoney);
  if (yourMoney < betMoney) {
    alert("You do not have enough cash")
  } else {
    console.log("Your Money before Betting: ", yourMoney);
    yourBet += betMoney;
    //Just reducing the last bet since the full bet on the table is already not in player's hand
    yourMoney = yourMoney - betMoney;
    yourBetText.innerHTML = yourBet;
    yourMoneyText.innerHTML = yourMoney;
  }
  setTimeout(() => {
    yourMoneyText.setAttribute("class", "yourMoney");
    yourBetText.setAttribute("class", "yourMoney");
  }, 1000);
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

  if (playersHandObj[playersHandObj.length - 1].suit == "A") {
    totalOfAces++;
  }

  if (totalOfAces > 0) {
    console.log("Total Aces in Hand: ", totalOfAces);
    if (playerAccumulator > 21) {
      console.log("AAAAAAA - Ace is being counted as 1");
      playerAccumulator -= 10;
      totalOfAces--;
    }
  }

  if (playerBJWins()) {
    console.log("playerBJ is correct");
    updateTheMoneyOnPage();
    announcement("Player won with a Blackaack");
  }
  if (playerBust()) {
    console.log("playerBust is correct");
    updateTheMoneyOnPage();
    announcement("Dealer Won ");
  }

  updateTheScoreOnPage();
  console.log("Players total Hand: ", playerAccumulator);

}

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

//DEAL - used
async function deal() {

  createHitButton();
  createStandButton();
  for (let i = 0; i < 2; i++) {
    await sleep(1000);

    playerGetsCards();
  }
  for (let i = 0; i < 2; i++) {
    dealerGetsCards();
  }
}

//STAND - used
function stand() {
  removeHitButton();
  removeStandButton();
  console.log("STAND - Dealer total: ", dealersAccumulator);
  while (dealersAccumulator < 17) {
    console.log("Dealerscards is less than 16?");
    getACard(dealer);
    generateTheCardDom(
      "dealersCards",
      dealersHandObj[dealersHandObj.length - 1].id,
      dealerZone
    );
    console.log("STAND/WHILE BF - Dealer total: ", dealersAccumulator);
    if (dealersHandObj[dealersHandObj.length - 1].suit == "A") {
      totalOfAcesForDealer++;
      console.log("total aces: ", totalOfAces);
    }
    if (totalOfAcesForDealer > 0) {
      console.log("Total Aces in Hand For Dealer: ", totalOfAcesForDealer);
      if (dealersAccumulator > 21) {
        console.log("AAAAAAA - Ace is being counted as 1");
        dealersAccumulator -= 10;
        totalOfAcesForDealer--;
        console.log("total aces: ", totalOfAces);
      }
    }
    console.log("STAND/WHILE AF - Dealer total: ", dealersAccumulator);
    updateTheScoreOnPage();
  }
  const firstCard = document.querySelector(".hideCard");
  firstCard.setAttribute("class", "dealersCards");

  //WINNING LOGIC WHEN YOU STAND
  if (!dealerAutoBustorWin()) {
    if (dealersAccumulator > playerAccumulator) {
      console.log("Dealer Wins because has a better hand");
      gameObj.changeWinner(dealer);
      console.log("[[[[[ALERT]]]]]]]Dealer Wins");
      announcement("Dealer Won!");
      gameObj.changeWinner(dealer);
      endGameCalc();
    }
    if (dealersAccumulator === playerAccumulator) {
      console.log("Push");
      yourMoney += yourBet;
      yourBet = 0;
      announcement("Push, values are equal");
      gameObj.changeWinner(null);
      endGameCalc();
    }
    if (dealersAccumulator < playerAccumulator) {
      console.log("Players Wins because has a better hand");
      gameObj.changeWinner(player);
      console.log("[[[[[ALERT]]]]]]]Player Wins");
      announcement("Player Won!!");
      gameObj.changeWinner(player);
      endGameCalc();
    }
    // dealerAutoBustorWin();
  }
  newRound.setAttribute("class", "newRound");
}

//UPDATE THE SCORE ON PAGE - used
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

// //ACE CALC
// function isThereAce(turn) {
//   if (turn === "player") {
//     for (let i = 0; i < playersHandObj.length; i++) {
//       if (playersHandObj[i].suit == "A") {
//         console.log("sending true");
//         return true;
//       }
//     }

//     if (turn === dealer) {
//       console.log("========");
//       dealersHandObj.forEach((e) => {
//         console.log("dealershand");
//         console.log(e);
//       });
//     }
//   }
// }

//WINNING FUNCTIONS - used
function playerBJWins() {
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
  return false;
}

function playerBust() {
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

//DEAER AUTO BUST - used
function dealerAutoBustorWin() {
  if (dealersAccumulator === 21) {
    gameObj.changeWinner(dealer);
    newRound.setAttribute("class", "newRound");
    console.log("[[[[[ALERT]]]]]]]Dealer BJ Win");
    gameObj.changeWinner(dealer);
    announcement("Dealer got Blackjack!");
    endGameCalc();
    return true;
  }
  if (dealersAccumulator > 21) {
    console.log("Dealer Past 21 thus busted");
    newRound.setAttribute("class", "newRound");
    gameObj.changeWinner(player);
    announcement("Player Won!");
    endGameCalc();
    return true;
  }
  return false;
}

//Deal for Dealer - used
function dealerGetsCards() {
  getACard(dealer);
  generateTheCardDom(
    "dealersCards",
    dealersHandObj[dealersHandObj.length - 1].id,
    dealerZone
  );

  console.log("Dealer total: ", dealersAccumulator);
  if (dealersHandObj[dealersHandObj.length - 1].suit == "A") {
    totalOfAcesForDealer++;
    console.log("total aces: ", totalOfAces);
  }
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
    console.log(
      "tempCard: ",
      tempCard.value,
      " tempCard ID: ",
      tempCard.id,
      " dealersAccumulator: ",
      dealersAccumulator
    );
    dealersAccumulator = tempCard.value + dealersAccumulator;
    // console.log("TempCard value: ", tempCard.value);
    // console.log("dealersAccumulator: ", dealersAccumulator);
    return tempCard.value;
  }
  // if (player == "player") {
  //   tempCard = cards[Math.floor(Math.random() * cards.length - 1) + 1];
  //   playersHandObj.push(tempCard);
  //   console.log("Player card: ", tempCard);
  // }
  updateTheScoreOnPage();
}

//END GAME CALCULATION - used
function endGameCalc() {
  if (gameObj.winner == player) {
    yourMoney = yourBet * 2 + yourMoney;
    console.log("Your money now is: ", yourMoney);
  } else if (gameObj.winner == dealer) {
    console.log("your money is leaving you...");
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
  // console.log("generating the new card")
  newCard = document.createElement("div");
  newCard.setAttribute("class", className + " cardsComingIn");
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
  // debugger;
  console.log("Your bet was: ", yourBet);
  console.log("Your current Money: ", yourMoney);
  console.log("---New Round---");
  newRound.setAttribute("class", "hide");
  playersHandObj = [];
  dealersHandObj = [];
  playerZone.innerHTML = "";
  dealerZone.innerHTML = "";
  dealersAccumulator = 0;
  playerAccumulator = 0;
  firstCard = true;
  yourBet = 0;
  gameObj.changeWinner(null);
  reduced = false;
  totalOfAcesForDealer = 0;
  totalOfAces = 0;
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
    //prompt - to get the card from the user
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
    if (playersHandObj[playersHandObj.length - 1].suit == "A") {
      totalOfAces++;
    }

    if (totalOfAces > 0) {
      console.log("Total Aces in Hand: ", totalOfAces);
      if (playerAccumulator > 21) {
        console.log("AAAAAAA - Ace is being counted as 1");
        playerAccumulator -= 10;
        totalOfAces--;
      }
    }

    // if (isThereAce(player)) {
    //   if (!reduced) {
    //     reduced = true;
    //     console.log("There is a new ace");
    //     if (playerAccumulator > 21 && isThereAce(player)) {
    //       console.log("Ace is being counted as 1");
    //       playerAccumulator -= 10;
    //     }
    //   }
    // }
    if (playerBJWins()) {
      console.log("playerBJ is correct");
      updateTheMoneyOnPage();
      announcement("Player won with a Blackjack");
    }
    if (playerBust()) {
      console.log("playerBust is correct");
      updateTheMoneyOnPage();
      announcement("Dealer Won");
    }
    updateTheScoreOnPage();
    console.log("Players total Hand: ", playerAccumulator);
  });