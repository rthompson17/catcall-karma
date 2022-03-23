// VARIABLES
// let playerImg = null;
// const boardLimit = document.getElementById("gameBoard");

//AUDIO VARIABLES
const whistle = new Audio("audio/wolf-whistle-14621.mp3");
const working = new Audio("audio/are-you-working.wav");
const talkToYou = new Audio("audio/can-i-talk-to-you.wav");
const smile = new Audio("audio/smile-for-us.wav");
const kiss = new Audio("audio/kiss-real.mp3");
// ^^ make this an array and have it randomly choose the sounds --- have an array that is silent

   // ---------- PLAYER MOVEMENT ---------- //
   
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
                if(!hasGameStarted) {
                    startTimer(); 
                    hasGameStarted = true;
                }
                break;           
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

//////////////// HEALTH METER ////////////////
let health = document.getElementById("health")

health.value -= 0;

//////////////// CATCALLER AUDIO --- TRIGGER POINTS in PX => 371, 285, 209, 125, 61 (but odd number!!)

const boardLimit = document.getElementById("gameBoard");
function checkGoal(){
    let characterTop = playerImg.style.top;
    console.log(characterTop);
    if (characterTop==="371px") {
        whistle.play("whistle");
        health.value -= 10;
    } if (characterTop==="285px") {
        working.play("working");
        health.value -= 10;
    } if (characterTop==="209px") {
        talkToYou.play("talkToYou");
        health.value -= 10;
    } if (characterTop==="125px") {
        smile.play("smile");
        health.value -= 10;
    } if (characterTop==="61px") {
        kiss.play("kiss");
        health.value -= 10;
    }


//////////////// GAME BOARD LIMITATION /////////////
    else if(characterTop<="-70px"){
        alert("Game over");
    } // can check "mental health" within this function
}

// setInterval(checkGoal, 10);

//    // ------------ COUNTDOWN TIMER ---------------- //
   
// //event listener -- get setSeconds to begin on button click from "Start Game"

// // document.getElementById('startGame').addEventListener('click', x);
// // console.log(document.getElementById('startGame'));

// const startBtn = document.getElementById('startGame');
// startBtn.addEventListener('click', (event) => { 
//     event.preventDefault();
//     x()
// }); 
   
// let days = 0; //starting number of days
// let hours = 0; // starting number of hours
// let minutes = 0; // starting number of minutes
// let seconds = 1; // starting number of seconds

// // converts all to seconds
// let totalSeconds =
// days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

// //temporary seconds holder
// let tempSeconds = totalSeconds;

// // calculates number of days, hours, minutes and seconds from a given number of seconds
// const convert = (value, inSeconds) => {
// if (value > inSeconds) {
//     let x = value % inSeconds;
//     tempSeconds = x;
//     return (value - x) / inSeconds;
// } else {
//     return 0;
// }
// };


// // //sets seconds
// const setSeconds = (s) => {
// document.querySelector("#seconds").textContent = s + "s";
// };

// // Update the count down every 1 second
// let x = setInterval(() => {
// //clears countdown when all seconds are counted
// if (totalSeconds <= 0) {
//     clearInterval(x);
// }
// setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
// totalSeconds--;
// tempSeconds = totalSeconds;
// }, 1000);

// console.log(document.getElementById('startGame'));

//////////// KEMEL'S SUGGESTION /////////////
let days, hours, minutes, seconds, totalSeconds;

const initData = () => {
    days = 0, //starting number of days
    hours = 0, // starting number of hours
    minutes = 0, // starting number of minutes
    seconds = 1, // starting number of seconds
    totalSeconds = 30; // converts all to seconds
}

initData(); // set intial data

const updateDOM = (key, value) => {
    switch (key) {
        case 'seconds': 
            document.querySelector("#seconds").textContent = value + "s"; // updates seconds value
            break;
    }
} 

const endGame = () => {
    try {
        /*
            here is where your endgame conditions and logic goes
        */
        setTimeout(() => initData(), 0); // after 3 seconds the data resets. 
        alert("Game over");
        window.location.reload();
        console.log('Game ended')
    } catch (error) {
        console.error('endGame(): ', error);
    }
}

const stopTimer = () => {
    clearInterval(setSeconds);
    /* 
        here is where you want to call endGame();
    */ 
    endGame();
    
};

function setSeconds () {
    totalSeconds === 0
        ? stopTimer()
        : totalSeconds--;
    updateDOM('seconds', totalSeconds);
} 

const startTimer = () => setInterval(setSeconds, 1000); 




console.log(document.getElementById('startGame'));

   // ------------ COUNTDOWN TIMER ---------------- //
   
//event listener -- get setSeconds to begin on button click from "Start Game"

// document.getElementById('startGame').addEventListener('click', x);
// console.log(document.getElementById('startGame'));

const startBtn = document.getElementById('startGame');
startBtn.addEventListener('click', (event) => { 
    event.preventDefault();
    // gameTimer()
    startTimer();
}); 
   
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
