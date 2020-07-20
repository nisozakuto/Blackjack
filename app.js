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


let shape = Math.floor(Math.random() * 4) + 1;
let numbers = Math.floor(Math.random() * 12) + 1;
let playercard1 = document.querySelector(".playerCard");
playercard1.style.display = "block";
playercard1.style.backgroundImage = "url(/Blackjack/assets/10C.png";

const chips = document.querySelectorAll('.chips');

function bet(amount) {
  // console.log("amount", amount.target.id)
  yourBet += parseInt(amount.target.id);
  yourMoney -= yourBet;
  yourBetText.innerHTML = yourBet;
  yourMoneyText.innerHTML = yourMoney;
}

chips.forEach((chip, i) => {
  // chips[i].addEventListener('click', bet(chips[i].id));
  chips[i].addEventListener('click', bet);
  // console.log(chip.id);
  // console.log(chip.id);
})