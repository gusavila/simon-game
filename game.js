// Array criado para armazenar a cor sorteada.
var buttonColours = ["red", "blue", "green", "yellow"];

// Array vazio criado para armazenar a sequência das cores sorteadas.
var gamePattern = [];

var userClickedPattern = [];

var level = 0;

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Função criada para sortear uma cor.
function nextSequence() {
  var randomNumber = 0 + Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  gamePattern.push(randomChosenColour);

  level++;

  $("#level-title").text("Level " + level);
}

// Event listener para identificar qual cor o usuario clicou.
$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

   playSound(userChosenColour);
  animatePress(userChosenColour);

  if (checkAnswer(userClickedPattern.length - 1) === true) {
    console.log("passou");
  }
});

// O jogo iniciara quando o usuário pressinar qualquer tecla do teclado.
$(document).on("keydown", () => {
  if (level === 0) {
    setTimeout(() => {
      nextSequence();
    }, 1000);
    $("#level-title").text("Level 1");
  }
});

// Função que irá verificar a respostar e retornará true ou false.
function checkAnswer(position) {
  if (gamePattern[position] === userClickedPattern[position]) {
    if (userClickedPattern.length === gamePattern.length) {
      userClickedPattern = [];
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }

    return true;
  } else {
    var wrongSound = new Audio("sounds/wrong.mp3");
    /* wrongSound.play(); */

    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();

    return false;
  }
}

// Função que para resetar os valores.
function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
}
