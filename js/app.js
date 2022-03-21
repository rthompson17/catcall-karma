// VARIABLES
// let playerImg = null;
// const boardLimit = document.getElementById("gameBoard");


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

const boardLimit = document.getElementById("gameBoard");
function checkGoal(){
    let characterTop = playerImg.style.top;
    console.log(characterTop);
    if(characterTop<="-70px"){
        alert("Game over");
    } // can check "mental health" within this function
}

// setInterval(checkGoal, 10);

   // ------------ CCOUNTDOWN TIMER ---------------- //
   function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

let timerStart = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

   // ---------- PLAYER COORDINATES and COLLISION ---------- //

//    let playerCoord = document.querySelector('playerGirl');
//    let rect = elem.getBoundingClientRect();
//    for (var key in rect) {
//      if(typeof rect[key] !== 'function') {
//        let makeCatcall = // choose catcaller audio function ;
//        // play catcaller audio ;
//      }
//    }