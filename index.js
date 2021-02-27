// Generate a random number between 1 and 6
// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1*6
// randomNumber1 = Math.floor(randomNumber1) + 1;
// Shorten this to:
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

// if dice 1 is a greater number than dice 2, display winner for dice 1. if not, display winner for dice 2
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML= "Player 2 Wins 🏁";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML= "🏁 Player 1 Wins";
} else {
  document.querySelector("h1").innerHTML= "Draw!";
}
