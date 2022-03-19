    let playerImg = null;
    function init() {
        playerImg = document.getElementById("playerGirl");
        playerImg.style.position = "relative";
        playerImg.style.left = "200px";
        playerImg.style.top = "300px";
    }

    function playerGo(e) {
        var key_code = e.which || e.key; // modify to not use keyCode -- use KeyboardEvent
        switch (key_code) {
                case 32 || Space: //Up arrow key
                moveUp(); 
                break;
        }
    }

    function moveUp() {
        playerImg.style.top = parseInt(playerImg.style.top) - 5 + "px";
    }
    window.onload = init;



