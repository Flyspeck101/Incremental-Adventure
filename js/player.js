var maxHealth = 100;
var health = 100;
var healingSpeed = 1;

function healthBoost(extra) {
  maxHealth += extra;
}

function naturalHeal() {
  health += healingSpeed;
  if (health > maxHealth) {
    health = maxHealth;
  }
}

function setHealingSpeed(newValue) {
  healingSpeed = newValue;
}

function healingSpeedBoost(extra) {
  healingSpeed += extra;
}


var money = 0;
var moneyRate = 1;
