   
   
   
   
   
   // ---------- PLAYER MOVEMENT ---------- //
   
   let playerImg = null;
    function init() {
        playerImg = document.getElementById("playerGirl");
        playerImg.style.position = "relative";
        playerImg.style.left = "200px";
        playerImg.style.top = "400px";
    }

    function playerGo(e) {
        var key_code = e.which || e.key;
        switch (key_code) {
                case 32 || Space: // "K" is "which key" 75 or event code "KeyK"
                moveUp(); 
                
        }
    }

    function moveUp() {
        if(playerImg.style.top > "-5px") {
        playerImg.style.top = parseInt(playerImg.style.top) - 5 + "px";
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
    if(characterTop<="-5px"){
        alert("Game over");
    } // can check "mental health" within this function
}

// setInterval(checkGoal, 10);



   // ---------- PLAYER COORDINATES and COLLISION ---------- //

//    let playerCoord = document.querySelector('playerGirl');
//    let rect = elem.getBoundingClientRect();
//    for (var key in rect) {
//      if(typeof rect[key] !== 'function') {
//        let makeCatcall = // choose catcaller audio function ;
//        // play catcaller audio ;
//      }
//    }