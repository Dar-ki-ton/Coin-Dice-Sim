// COIN FLIP SIMULATOR

// HTML Variables
var coinBtn = document.getElementById("btn");
var headsCounter = document.getElementById("heads-out");
var tailsCounter = document.getElementById("tails-out");
var outEl = document.getElementById("output");

var diceRollBtn = document.getElementById("roll-btn");
var counter1 = document.getElementById("num1");
var counter2 = document.getElementById("num2");
var counter3 = document.getElementById("num3");
var counter4 = document.getElementById("num4");
var counter5 = document.getElementById("num5");
var counter6 = document.getElementById("num6");
var diceRoll1 = document.getElementById("dice1");
var diceRoll2 = document.getElementById("dice2");
var diceRollSum = document.getElementById("sum");

// Count Variables
var numHeads = 0;
var numTails = 0;
var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;
var number5 = 0;
var number6 = 0;

// Event Listener
coinBtn.addEventListener("click", coinFlip);

function coinFlip() {
  // Generate a Random Number
  var randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outEl.src = `img/heads.png`;
    numHeads++;
    headsCounter.innerHTML = numHeads;
  } else {
    outEl.src = `img/tails.png`;
    numTails++;
    tailsCounter.innerHTML = numTails;
  }
}

diceRollBtn.addEventListener("click", rollDice);

function rollDice() {
  var diceNum = Math.random() * 6 + 1;
  diceNum = Math.floor(diceNum);
  var dice2Num = Math.random() * 6 + 1;
  dice2Num = Math.floor(dice2Num);

  diceRoll1.src = ``;
  diceRoll2.src = ``;

  if (diceNum == 1) {
    diceRoll1.src = `img/1.png`;
    number1++;
    counter1.innerHTML = number1;
  } else if (diceNum == 2) {
    diceRoll1.src = `img/2.png`;
    number2++;
    counter2.innerHTML = number2;
  } else if (diceNum == 3) {
    diceRoll1.src = `img/3.png`;
    number3++;
    counter3.innerHTML = number3;
  } else if (diceNum == 4) {
    diceRoll1.src = `img/4.png`;
    number4++;
    counter4.innerHTML = number4;
  } else if (diceNum == 5) {
    diceRoll1.src = `img/5.png`;
    number5++;
    counter5.innerHTML = number5;
  } else {
    diceRoll1.src = `img/6.png`;
    number6++;
    counter6.innerHTML = number6;
  }

  if (dice2Num == 1) {
    diceRoll2.src = `img/1.png`;
    number1++;
    counter1.innerHTML = number1;
  } else if (dice2Num == 2) {
    diceRoll2.src = `img/2.png`;
    number2++;
    counter2.innerHTML = number2;
  } else if (dice2Num == 3) {
    diceRoll2.src = `img/3.png`;
    number3++;
    counter3.innerHTML = number3;
  } else if (dice2Num == 4) {
    diceRoll2.src = `img/4.png`;
    number4++;
    counter4.innerHTML = number4;
  } else if (dice2Num == 5) {
    diceRoll2.src = `img/5.png`;
    number5++;
    counter5.innerHTML = number5;
  } else {
    diceRoll2.src = `img/6.png`;
    number6++;
    counter6.innerHTML = number6;
  }

  var sum = diceNum + dice2Num;
  diceRollSum.innerHTML = sum;
}
