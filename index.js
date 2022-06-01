var drums = document.querySelectorAll(".drum");
console.log(drums);

// Sounds from Clicks
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    var drumKey = this.innerHTML;
    playSound(drumKey);
    buttonAnimation(drumKey);
    console.log("button  pressed", drumKey);
  });
}

//Sound From Keyboard
document.addEventListener("keypress", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
  console.log("button  pressed", event.key);
});

//Actually Play the sound
function playSound(soundKey) {
  switch (soundKey) {
    case "w":
      var soundClip = new Audio("sounds/tom-1.mp3");
      soundClip.play();
      break;

    case "a":
      var soundClip = new Audio("sounds/tom-2.mp3");
      soundClip.play();
      break;

    case "s":
      var soundClip = new Audio("sounds/tom-3.mp3");
      soundClip.play();
      break;

    case "d":
      var soundClip = new Audio("sounds/tom-4.mp3");
      soundClip.play();
      break;

    case "j":
      var soundClip = new Audio("sounds/snare.mp3");
      soundClip.play();
      break;

    case "k":
      var soundClip = new Audio("sounds/crash.mp3");
      soundClip.play();
      break;

    case "l":
      var soundClip = new Audio("sounds/kick-bass.mp3");
      soundClip.play();
      break;

    default:
      break;
  }
}

//Button Animation
function buttonAnimation(button) {
    var activeBtn = document.querySelector("."+ button);
    console.log(activeBtn);

    activeBtn.classList.add("pressed");
  setTimeout(() => {
    //animation
    activeBtn.classList.remove("pressed");

  }, 100);
}
