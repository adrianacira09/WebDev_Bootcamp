randomNumber1 = Math.floor(Math.random()*6) + 1;


// pick an image between png1 and png6 for dice 1
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //search in images images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// pick an image between png1 and png6 for dice 2
randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; //search in images images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//display the winning player
if (randomNumber1 > randomNumber2) {
    var heading = document.querySelector("h1").innerHTML = "Player 1 Wins"
} else if (randomNumber1 < randomNumber2){
    var heading = document.querySelector("h1").innerHTML = "Player 2 Wins"
} else {
    var heading = document.querySelector("h1").innerHTML = "It's a tie"
}
