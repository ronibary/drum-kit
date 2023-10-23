function playDrumSound(drumLetter) {
  let audio = null;
  switch (drumLetter) {
    case "w":
      audio = new Audio("./sounds/kick-bass.mp3");
      break;
    case "a":
      audio = new Audio("./sounds/snare.mp3");
      break;
    case "s":
      audio = new Audio("./sounds/crash.mp3");
      break;
    case "d":
      audio = new Audio("./sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("./sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("./sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("./sounds/tom-4.mp3");
      break;
    default:
      break;
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  // set timeout for 0.1 second then we want to change back the animation
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// detect buttons press

// add the click handler to all the buttons in the page
let buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // alert("I got Clicked");
    //console.log(this.textContent);

    drumLetter = buttons[i].textContent;
    playDrumSound(drumLetter);
    buttonAnimation(drumLetter);
  });
}

// detect keypress

// add listener to keydown events to play the drums sound
document.addEventListener("keydown", function (event) {
  playDrumSound(event.key);
  buttonAnimation(event.key);
});

// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();

// using anonymous function. and add it to the event listener

// document.querySelector("button").addEventListener("click", function () {
//   alert("I got Clicked");
// });

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got Clicked");
// }
