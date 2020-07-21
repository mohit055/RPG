let enemy;
let player;

// Object Constructor for Enemies
function Enemies(enemyType, health, strength, speed, stamina){
    this.enemyType = enemyType;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.stamina = stamina;
}

// Object Constructor for Players
function Players(playerType, health, strength, speed, stamina) {
    this.playerType = playerType;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.stamina = stamina;
};

// Object for all action execution in Arena
let PlayerMoves = {
    calcAttack: function () {
        let getPlayerSpeed;
        getPlayerSpeed = player.speed;
        let getEnemySpeed;
        getEnemySpeed = enemy.speed;
        //Player Attack
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.strength > 50) {
                calcBaseDamage = player.strength * player.stamina / 100;
            } else {
                calcBaseDamage = player.strength * player.stamina * 3 / 100;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage;
            calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number of Hits
            let numberOfHits;
            numberOfHits = Math.floor(Math.random() * Math.floor(8) + 1);
            let attackValue;
            attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        //Enemy Attack
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.strength > 50) {
                calcBaseDamage = enemy.strength * enemy.stamina / 100;
            } else {
                calcBaseDamage = enemy.strength * enemy.stamina * 3 / 100;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage;
            calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number of Hits
            let numberOfHits;
            numberOfHits = Math.floor(Math.random() * Math.floor(8) + 1);
            attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        // Getting the healths of Player and Enemy 
        let getPlayerHealth = document.querySelector(".player-health");
        let getEnemyHealth = document.querySelector(".enemy-health");
        // Initialising Attacks
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues;
            playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damaged " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                alert("You win! Refresh your browser to play again.");
                getPlayerHealth.innerHTML = 'Health : ' + player.health;
                getEnemyHealth.innerHTML = 'Health : 0';
            } else {
                getEnemyHealth.innerHTML = 'Health : ' + enemy.health;
                //Enemy Attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy hit " + enemyAttackValues[0] + " damaged " + enemyAttackValues[1] + " times");
                if (player.health <= 0) {
                    alert("You loose! Refresh your browser to play again!");
                    getEnemyHealth.innerHTML = 'Health : ' + enemy.health;
                    getPlayerHealth.innerHTML = 'Health : 0';
                } else {
                    getPlayerHealth.innerHTML = 'Health : ' + player.health;
                }
            }
        } else if (getEnemySpeed >= getPlayerSpeed) {
            let playerAttackValues;
            enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hit " + enemyAttackValues[0] + " damaged " + enemyAttackValues[1] + " times.");
            if (player.health <= 0) {
                alert("You loose! Refresh your browser to play again.");
                getEnemyHealth.innerHTML = 'Health : ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health : 0';
            } else {
                getPlayerHealth.innerHTML = 'Health : ' + player.health;
                //PLayer Attacks
                let playerAttackValues = playerAttaplayer
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit " + playerAttackValues[0] + " damaged " + playerAttackValues[1] + " times");
                if (enemy.health <= 0) {
                    alert("You win! Refresh your browser to play again!");
                    getPlayerHealth.innerHTML = 'Health : ' + player.health;
                    getEnemyHealth.innerHTML = 'Health : 0';
                } else {
                    getEnemyHealth.innerHTML = 'Health : ' + player.health;
                }
            }
        }
    }
}