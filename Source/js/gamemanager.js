let GameManager = {
    setGameStart : function (playerType) {
        this.resetPlayer(playerType);
        this.setPreFight();
    },

    // Adding information of different player charachters
    resetPlayer : function (playerType) { 
        switch (playerType) {
            case "Homer": player = new Players(playerType, 100, 90, 50, 40);
                break;
            case "Marge": player = new Players(playerType, 100, 70, 60, 60);
                break;
            case "Bart": player = new Players(playerType, 100, 80, 90, 80);
                break;
            case "Lisa": player = new Players(playerType, 100, 60, 70, 70);
                break;
            case "Maggie": player = new Players(playerType, 100, 10, 30, 50);
                break;
            case "Abrahim": player = new Players(playerType, 100, 20, 20, 30);
                break;
        }
        // Player in Arena
        let getInterface = document.querySelector('.interface');
        getInterface.innerHTML = '<div id="player-arena"><img src = "images/' + playerType + '.png"><div id=player-stats><h4>' + playerType + ' Simpson</h4><p class="player-health">Health : ' + player.health + '</p><p>Strength : ' + player.strength + '</p><p>Speed : ' + player.speed + '</p><p>Stamina : ' + player.stamina + '</p></div><div>';
    },
    setPreFight : function () {
        // Tasks in Arena (Searching the enemy)
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        getHeader.innerHTML = '<p><strong>Task</strong>: Find an Enemy!</p>';
        getActions.innerHTML = '<button onclick="GameManager.setFight()">Search for Enemy</button>';
    },
    setFight : function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // Adding information of different enemy charachters
        let enemy0 = new Enemies("Mr-Burns", 100, 50, 80, 70);
        let enemy1 = new Enemies("Fat-Tony", 100, 80, 60, 90);
        let enemy2 = new Enemies("Artie-Ziff", 100, 90, 50, 60);
        let choosingEnemy = Math.floor(Math.random() * Math.floor(3));
        switch(choosingEnemy) {
            case 0 : enemy = enemy0;
            break;
            case 1 : enemy = enemy1;
            break;
            case 2 : enemy = enemy2;
            break;
        }
        // Tasks in Arena (Attacking the enemy)
        getHeader.innerHTML = '<p><strong>Task</strong>: Attack the Enemy!</p>';
        getActions.innerHTML = '<button onclick="PlayerMoves.calcAttack()">ATTACK!</button>';
        // Enemy in Arena
        getEnemy.innerHTML = '<div id="enemy-arena"><img src = "images/' + enemy.enemyType + '.png"><div id="enemy-stats"><h4>' + enemy.enemyType + '</h4><p class="enemy-health">Health : ' + enemy.health + '</p><p>Strength : ' + enemy.strength + '</p><p>Speed : ' + enemy.speed + '</p><p>Stamina : ' + enemy.stamina + '</p></div></div>';
    }
};