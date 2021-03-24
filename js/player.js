function moneyRound(x) {
  return Number.parseFloat(x).toFixed(2);
}

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


var money = -10.00;
var moneyRate = 0.01;

function naturalMoney() {
  money += moneyRate;
}

function update() {
  document.getElementById("health").value = health;
  document.getElementById("health").max = maxHealth;
  document.getElementById("healthText").innerHTML = health + " hp / " + maxHealth + " hp";
  money = moneyRound(money);
  if (money < 0) {
    document.getElementById("money").innerHTML = "You are in debt! You have -$" + (0 - money);
  } else {
    document.getElementById("money").innerHTML = "You have $" + money;
  }
}
