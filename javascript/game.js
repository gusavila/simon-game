const buttonColours = ["red", "blue", "green", "yellow"];
const pressedFlags = [false, false, false, false];

let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let gameStarted = false;

function playSound(name) {
  var audio = new Audio(`assets/sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColour) {
  const $button = $(`#${currentColour}`);

  $button.addClass("pressed");

  setTimeout(() => {
    $button.removeClass("pressed");
    $button.blur();
  }, 100);
}

function nextSequence() {
  $("#level-title").text(`Level ${level}`);

  const randomNumber = 0 + Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);

  gamePattern.push(randomChosenColour);
}

function handleButton(color) {
  userClickedPattern.push(color);
  playSound(color);
  animatePress(color);
  checkAnswer(userClickedPattern.length - 1);
}

function checkAnswer(position) {
  if (gamePattern[position] === userClickedPattern[position]) {
    if (userClickedPattern.length === gamePattern.length) {
      userClickedPattern = [];
      level++;
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");

    $("#level-title").text("Game Over, Press Start or any key to restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  gameStarted = false;
}

$(".btn").on("click", function () {
  const userChosenColour = $(this).attr("id");
  handleButton(userChosenColour);
});

$(document).on("keydown", () => {
  if (!gameStarted) {
    startGame();
  }
});

function checkGamepadInput() {
  const gp = navigator.getGamepads()[0];
  if (!gp) return;

  const mapping = {
    0: "green", // A
    1: "red", // B
    2: "yellow", // Y
    3: "blue", // X
  };

  Object.keys(mapping).forEach((index) => {
    const i = parseInt(index);
    if (gp.buttons[i].pressed) {
      if (!pressedFlags[i]) {
        handleButton(mapping[i]);
        pressedFlags[i] = true;
      }
    } else {
      pressedFlags[i] = false;
    }
  });

  // 9 is the start button on controller
  if (gp.buttons[9].pressed && !gameStarted) {
    startGame();
  }
}

function startGame() {
  gameStarted = true;
  level = 1;
  userClickedPattern = [];
  gamePattern = [];
  $("#level-title").text(`Level ${level}`);
  setTimeout(() => nextSequence(), 1000);
}

function gameLoop() {
  checkGamepadInput();
  requestAnimationFrame(gameLoop);
}

window.addEventListener("gamepadconnected", () => {
  gameLoop();
});
