////////////  AUDIO VARIABLES  ////////////////

const whistle = new Audio("audio/wolf-whistle-14621.mp3");
const working = new Audio("audio/are-you-working.wav");
const talkToYou = new Audio("audio/can-i-talk-to-you.wav");
const smile = new Audio("audio/smile-for-us.wav");
const kiss = new Audio("audio/kiss-real.mp3");

const allCatcalls = [
  whistle,
  working,
  talkToYou,
  smile,
  kiss,
  null,
  null,
  null,
];


let randomCatcall = function () {
  const singleRandomCatcall =
    allCatcalls[Math.floor(Math.random() * allCatcalls.length)];
  return singleRandomCatcall;
};


const explode = new Audio("audio/explode-sound.mp3");

//////////// PLAYER MOVEMENT ////////////

let playerImg = null;
function init() {
  playerImg = document.getElementById("playerGirl");
  playerImg.style.position = "relative";
  playerImg.style.left = "160px";
  playerImg.style.top = "435px";
}

let hasGameStarted = false;

function playerGo(e) {
  var key_code = e.which || e.key;
  switch (key_code) {
    case 32 || Space: // "K" is "which key" 75 or event code "KeyK"
      moveUp();
      if (!hasGameStarted) {
        timerStart();
        hasGameStarted = true;
      }
      break;
  }
}
document.querySelector("body").addEventListener("keyup", (e) => {
  deliverKarma(e);
});

///////// DELIVER KARMA ///////////

function deliverKarma(event) {
  const { keyCode } = event;
  console.log(keyCode);
  switch (keyCode) {
    case 75: // "K" is "which key" 75 or event code "KeyK"
      const position = playerImg.style.top
        ? Number(playerImg.style.top.replace("px", ""))
        : 0;
      console.log("position", position);
      if (position > 360 && position < 407) {
        document.getElementById("man5").src = "./images/explosion.png";
        explode.play("explode");
        health.value += 10;
        healthStatus();
        break;
      }
      if (position > 283 && position < 340) {
        document.getElementById("man4").src = "./images/explosion.png";
        explode.play("explode");
        health.value += 10;
        healthStatus();
      }
      if (position > 207 && position < 250) {
        document.getElementById("man3").src = "./images/explosion.png";
        explode.play("explode");
        health.value += 10;
        healthStatus();
      }
      if (position > 120 && position < 160) {
        document.getElementById("man2").src = "./images/explosion.png";
        explode.play("explode");
        health.value += 10;
        healthStatus();
      }
      if (playerImg.style.top > "55" && playerImg.style.top < "91") {
        document.getElementById("man1").src = "./images/explosion.png";
        explode.play("explode");
        health.value += 10;
        healthStatus();
      }
      break;
  }
}

//////////////// HEALTH METER ////////////////
let health = document.getElementById("health");

health.value -= 0;

//////////////// CATCALLER AUDIO //////////////////

const boardLimit = document.getElementById("gameBoard");
function checkGoal() {
  let characterTop = playerImg.style.top;
  console.log(characterTop);
  console.log(health.value);
  healthStatus();
  if (characterTop === "415px") {
    // whistle.play("whistle");
    console.log(randomCatcall());
    randomCatcall().play();
    health.value -= 30;
    endGame();
  }
  if (characterTop === "343px") {
    // working.play("working");
    randomCatcall().play();
    health.value -= 40;
    endGame();
  }
  if (characterTop === "253px") {
    // talkToYou.play("talkToYou");
    randomCatcall().play();
    health.value -= 35;
    endGame();
  }
  if (characterTop === "173px") {
    // smile.play("smile");
    randomCatcall().play();
    health.value -= 30;
    endGame();
  }
  if (characterTop === "111px") {
    // kiss.play("kiss");
    randomCatcall().play();
    health.value -= 20;
    endGame();
  } else if (characterTop <= "-70px") {
    modal3.classList.remove("hidden");
    pageCover3.classList.remove("hidden");
    main.addEventListener("focus", preventFocus);
    clearInterval(startTimer);
  }
}

function healthStatus() {
  let progressLevel = document.getElementById("health").value;
  document.getElementById("healthLevel").innerHTML =
    "Mental Health " + progressLevel;
}

////////////////// COUNTDOWN TIMER //////////////////
let startTimer;
let seconds, totalSeconds;
let isTimerOn;

function timerStart() {
  startTimer = setInterval(setSeconds, 1000);
  isTimerOn = true;
}

const initData = () => {
  (seconds = 1), // starting number of seconds
    (totalSeconds = 25); // converts all to seconds
  healthStatus();
};

initData(); // set intial data

const updateDOM = (key, value) => {
  switch (key) {
    case "seconds":
      document.querySelector("#seconds").textContent =
        "Train arrives in " + value + " seconds"; // updates seconds value
      break;
  }
};

function setSeconds() {
  totalSeconds === 0 ? stopTimer() : totalSeconds--;
  updateDOM("seconds", totalSeconds);
}

////////////////// MOVEMENT //////////////////

function moveUp() {
  if (playerImg.style.top > "-70px") {
    playerImg.style.top = parseInt(playerImg.style.top) - 2 + "px";
  } else if (playerImg.style.top <= "-70px") {
    return;
  }
  checkGoal();
}


/////////////////////// END GAME LOGIC ///////////

let modal = document.querySelector(".modal");
let pageCover = document.querySelector(".pageCover");
let modal2 = document.querySelector(".modal2");
let pageCover2 = document.querySelector(".pageCover2");
let modal3 = document.querySelector(".modal3");
let pageCover3 = document.querySelector(".pageCover3");
let main = document.querySelector("main");


const endGame = () => {
  console.log(isTimerOn);
  if (health.value === 0) {
    modal.classList.remove("hidden");
    pageCover.classList.remove("hidden");
    main.addEventListener("focus", preventFocus);
    clearInterval(startTimer);
  }
  if (!isTimerOn) {
    startTimer = null;
    modal2.classList.remove("hidden");
    pageCover2.classList.remove("hidden");
    main.addEventListener("focus", preventFocus);
    clearInterval(startTimer);
  }
  return;
};

document.getElementById("close3").addEventListener("click", function () {
  
  window.location.reload();
});

document.getElementById("close2").addEventListener("click", function () {
  window.location.reload();
});

document.getElementById("close").addEventListener("click", function () {
  window.location.reload();
});

function preventFocus(evt) {
  evt.preventDefault();
}

const stopTimer = () => {
  clearInterval(startTimer);
  isTimerOn = false;
  if (health.value > 0) {
    endGame();
  }
  console.log("testing stopTimer");
};

window.onload = init; // gameStart will init
//modal.classList.add("hidden");
