////////////  AUDIO VARIABLES  ////////////////
const whistle = new Audio("audio/wolf-whistle-14621.mp3");
const working = new Audio("audio/are-you-working.wav");
const talkToYou = new Audio("audio/can-i-talk-to-you.wav");
const smile = new Audio("audio/smile-for-us.wav");
const kiss = new Audio("audio/kiss-real.mp3");
const explode = new Audio("audio/explode-sound.mp3");
// ^^ make this an array and have it randomly choose the sounds --- have an array that is silent


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
                if(!hasGameStarted) {
                    timerStart(); 
                    hasGameStarted = true;
                }
                break;           
        }
    }
    document.querySelector('body').addEventListener('keyup', (e) => {
        deliverKarma(e);
    });


///////// DELIVER KARMA ///////////


    function deliverKarma(event) {
        const { keyCode } = event;
        console.log(keyCode);
        switch (keyCode) {
            case 75: // "K" is "which key" 75 or event code "KeyK"
                const position = playerImg.style.top 
                    ?    Number(
                            playerImg.style.top.replace('px', '')
                        )
                    : 0;
                console.log('position', position);
                if(position > 360 && position < 381) {
                    document.getElementById("man5").src="./images/explosion.png";
                        explode.play("explode");
                        health.value += 10;
                        healthStatus()
                    break;
                }         
                if(position > 283 && position < 313) {
                    document.getElementById("man4").src="./images/explosion.png";
                        explode.play("explode");
                        health.value += 10;
                        healthStatus()
                }   
                if(playerImg.style.top > "207px" && playerImg.style.top < "233") {
                    document.getElementById("man3").src="./images/explosion.png";
                        explode.play("explode");
                        health.value += 10;
                        healthStatus()
                }   
                if(position > 120 && position < 160) {
                    document.getElementById("man2").src="./images/explosion.png";
                        explode.play("explode");
                        health.value += 10;
                        healthStatus()
                }   
                if(playerImg.style.top > "55" && playerImg.style.top < "91") {
                    document.getElementById("man1").src="./images/explosion.png";
                        explode.play("explode");
                        health.value += 10;
                        healthStatus()
                }
                break;
         }
    }


//////////////// HEALTH METER ////////////////
let health = document.getElementById("health")

health.value -= 0;


//////////////// CATCALLER AUDIO //////////////////
/// TRIGGER POINTS in PX => 371, 285, 209, 125, 61 (but odd number!!)

const boardLimit = document.getElementById("gameBoard");
function checkGoal(){
    let characterTop = playerImg.style.top;
    console.log(characterTop);
    if (characterTop==="401px") {
        whistle.play("whistle");
        health.value -= 20;
        healthStatus()
    } if (characterTop==="333px") {
        working.play("working");
        health.value -= 30;
        healthStatus()
    } if (characterTop==="253px") {
        talkToYou.play("talkToYou");
        health.value -= 15;
        healthStatus()
    } if (characterTop==="173px") {
        smile.play("smile");
        health.value -= 20;
        healthStatus()
    } if (characterTop==="111px") {
        kiss.play("kiss");
        health.value -= 25;
        healthStatus()
    }
    else if(characterTop<="-70px"){
        document.getElementById("winLose").textContent += "You made it to the subway! Have a good day at work."
    } 
}

// setInterval(checkGoal, 10);

function healthStatus() {
    let progressLevel = document.getElementById('health').value;
    document.getElementById("healthLevel").innerHTML = "Mental Health " +progressLevel;
}


////////////////// COUNTDOWN TIMER //////////////////
let startTimer 
let seconds, totalSeconds;

function timerStart() {
   startTimer = setInterval(setSeconds, 1000); 
}
    // ==> should contain what else starts the game -- press space bar and call startTimer


const initData = () => {
    seconds = 1, // starting number of seconds
    totalSeconds = 30; // converts all to seconds
    healthStatus()
}

initData(); // set intial data

const updateDOM = (key, value) => {
    switch (key) {
        case 'seconds': 
            document.querySelector("#seconds").textContent ="Train arrives in " + value + " seconds"; // updates seconds value
            break;
    }
} 

function setSeconds () {
    totalSeconds === 0
        ? stopTimer()
        : totalSeconds--;
    updateDOM('seconds', totalSeconds);
} 

const endGame = () => {
    console.log(startTimer)   
    if (totalSeconds === 0){
            clearInterval(startTimer);
            startTimer = null;
        }  document.getElementById("winLose").textContent += " Train has left the station!";
    }
    

////////////////// GAMEBOARD EDGE LIMITATION //////////////////

function moveUp() {
    if(playerImg.style.top > "-70px") {
    playerImg.style.top = parseInt(playerImg.style.top) - 2 + "px";
    } else if (playerImg.style.top <= "-70px") {
        return;
    }
    checkGoal();
}


///////////////////////

const stopTimer = () => {
    clearInterval(setSeconds);
    /* 
        here is where you want to call endGame();
    */ 
    endGame();
    console.log("testing stopTimer")
};


console.log(document.getElementById('startGame'));


const startBtn = document.getElementById('startGame');
startBtn.addEventListener('click', (event) => { 
    timerStart(); // ==> set interval inside of startTimer (but make sure to declare it globally)
    // document.getElementById('startGame').disabled = true;
}); 
   

window.onload = init; // gameStart will init

