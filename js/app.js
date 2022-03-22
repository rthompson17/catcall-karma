// VARIABLES
// let playerImg = null;
// const boardLimit = document.getElementById("gameBoard");

//AUDIO VARIABLES
const whistle = new Audio("audio/wolf-whistle-14621.mp3");
const working = new Audio("audio/are-you-working.wav");
const talkToYou = new Audio("audio/can-i-talk-to-you.wav");
const smile = new Audio("audio/smile-for-us.wav");
// ^^ make this an array and have it randomly choose the sounds --- have an array that is silent

   // ---------- PLAYER MOVEMENT ---------- //
   
   let playerImg = null;
    function init() {
        playerImg = document.getElementById("playerGirl");
        playerImg.style.position = "relative";
        playerImg.style.left = "160px";
        playerImg.style.top = "435px";
    }

    function playerGo(e) {
        var key_code = e.which || e.key;
        switch (key_code) {
                case 32 || Space: // "K" is "which key" 75 or event code "KeyK"
                moveUp();                
        }
    }

    function moveUp() {
        if(playerImg.style.top > "-70px") {
        playerImg.style.top = parseInt(playerImg.style.top) - 2 + "px";
        } 
        checkGoal();
        // can use this function to check on encounters with the catcallers
    }
    window.onload = init; // gameStart will init


// GAME BOARD LIMITATION
// const wolfWhistle = new Audio("audio/wolf-whistle-14621.mp3");

// CATCALLL TRIGGER POINTS in PX => 371, 285, 209, 125, 61 (but odd number!!)

const boardLimit = document.getElementById("gameBoard");
function checkGoal(){
    let characterTop = playerImg.style.top;
    console.log(characterTop);
    if (characterTop==="371px") {
        whistle.play("whistle");
    } if (characterTop==="285px") {
        working.play("working");
    } if (characterTop==="209px") {
        talkToYou.play("talkToYou");
    } if (characterTop==="125px") {
        smile.play("smile");
    } if (characterTop==="61px") {
        working.play("working");
    }


 

    else if(characterTop<="-70px"){
        alert("Game over");
    } // can check "mental health" within this function
}

// setInterval(checkGoal, 10);

   // ------------ COUNTDOWN TIMER ---------------- //
   
//event listener -- get setSeconds to begin on button click from "Start Game"

// document.getElementById('#startGame').addEventListener('click', x);

   
let days = 0; //starting number of days
let hours = 0; // starting number of hours
let minutes = 0; // starting number of minutes
let seconds = 1; // starting number of seconds

// converts all to seconds
let totalSeconds =
days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
if (value > inSeconds) {
    let x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
} else {
    return 0;
}
};

// //sets seconds
const setSeconds = (s) => {
document.querySelector("#seconds").textContent = s + "s";
};

// Update the count down every 1 second
let x = setInterval(() => {
//clears countdown when all seconds are counted
if (totalSeconds <= 0) {
    clearInterval(x);
}
setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
totalSeconds--;
tempSeconds = totalSeconds;
}, 1000);




// -------------- AUDIO --------------- //
  
// WORKING CODE FOR AUDIO ////
        // const whistle = new Audio("audio/wolf-whistle-14621.mp3");
        // whistle.play("whistle"); 
// END WORKING CODE FOR AUDIO ////


// ------------
// const areYouWorking = new Audio("working")

// const whistle = new Audio("audio/wolf-whistle-14621.mp3");
// whistle.play();

//// sample code
//   audio.addEventListener('ended',function(){
//         audio.src = "new url";
//         audio.pause();
//         audio.load();
//         audio.play();
//     });
