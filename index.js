for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      var x = new Audio("sounds/tom-1.mp3");
      x.play();
      break;
    case "a":
      var x = new Audio("sounds/tom-2.mp3");
      x.play();
      break;
    case "s":

      var x = new Audio("sounds/snare.mp3");
      x.play();
      break;
    case "d":

      var x = new Audio("sounds/kick-bass.mp3");
      x.play();
      break;
    case "j":

      var x = new Audio("sounds/tom-3.mp3");
      x.play();
      break;
    case "k":

      var x = new Audio("sounds/tom-4.mp3");
      x.play();
      break;
    case "l":

      var x = new Audio("sounds/crash.mp3");
      x.play();
      break;
    default:
      console.log(key + " was pressed");
  }
}

function buttonAnimation(currentKey)
{
  var element = document.querySelector("."+currentKey);
  element.classList.add("pressed");
  setTimeout(function(){
    element.classList.remove("pressed");
  },100);
}
