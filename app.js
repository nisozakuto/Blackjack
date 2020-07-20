console.log("start");

//Variables
let yourBet = 0;
let yourMoney = 360;

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

let shape = Math.floor(Math.random() * 4) + 1;
let numbers = Math.floor(Math.random() * 12) + 1;
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
    const newCard = document.createElement('div');
    newCard.setAttribute('class', 'playerCard')
    cardsArea.appendChild(newCard);
  }
}

chips.forEach((chip, i) => {
  // chips[i].addEventListener('click', bet(chips[i].id));
  chips[i].addEventListener('click', bet);
  // console.log(chip.id);
  // console.log(chip.id);
})

dealButton.addEventListener('click', deal)
startButton.addEventListener('click', startTheGame)