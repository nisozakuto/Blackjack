console.log("start");
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

let shape = Math.floor(Math.random() * 4) + 1;
let numbers = Math.floor(Math.random() * 12) + 1;
let playercard1 = document.querySelector(".playerCard");
playercard1.style.display = "block";
playercard1.style.backgroundImage = "url(/Blackjack/assets/10C.png";

const chips = document.querySelectorAll('.chips');

function bet(amount) {
  // console.log("amount", amount.target.id)
}

chips.forEach((chip, i) => {
  // chips[i].addEventListener('click', bet(chips[i].id));
  chips[i].addEventListener('click', bet);
  console.log(chip.id);
  console.log(chip.id);
})