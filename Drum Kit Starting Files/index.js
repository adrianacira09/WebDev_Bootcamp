// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick() {
//     alert("I got clicked!")
// }



//This will change to white the color of the button that was clicked

// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
// document.querySelectorAll (".drum")[i].addEventListener("click", function(){
//    this.style.color="white";
// })
// }


// var audio = new Audio('sounds/tom-1.mp3');
//    audio.play();


//How to play a different sound when a different key is 
//switch statements
for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
   document.querySelectorAll (".drum")[i].addEventListener("click", function(){
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
   });
   }
   
   document.addEventListener("keydown",function(event){
      makeSound(event.key);
      buttonAnimation(event.key);
   });


   function makeSound(key) {
      switch(key) {
      case "w":
         var crash = new Audio('sounds/crash.mp3');
         crash.play();
      break;

      case "a":
         var kick = new Audio('sounds/kick-bass.mp3');
         kick.play();
      break;

      case "s":
         var snare = new Audio('sounds/snare.mp3');
         snare.play();
      break;

      case "d":
         var tom1 = new Audio('sounds/tom-1.mp3');
         tom1.play();
      break;

      case "j":
         var tom2 = new Audio('sounds/tom-2.mp3');
         tom2.play();
      break;

      case "k":
         var tom3 = new Audio('sounds/tom-3.mp3');
         tom3.play();
      break;

      case "l":
         var tom4 = new Audio('sounds/tom-4.mp3');
         tom4.play();
      break;

      default:console.log(buttonInnerHTML);
   }
}

function buttonAnimation (currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
      activeButton.classList.remove("pressed");
   },100);
}