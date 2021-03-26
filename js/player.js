import * from weapons.js;
function notify(text) {
  alert(text);
}
// Health 
var maxHealth = 100; 
var health = 100; 
var healingSpeed = 1; 
var armor = 0;

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

// Money 
var money = -1000; 
var moneyRate = 0; 
var startedWorking = false; 

function naturalMoney() { 
  money += moneyRate; 
} 

function moneyBoost(extra) { 
  money += extra; 
} 

function update() { 
  document.getElementById("health").value = health; 
  document.getElementById("health").max = maxHealth; 
  document.getElementById("healthText").innerHTML = 
    health + " hp / " + maxHealth + " hp"; 
  if (money < 0) { 
    document.getElementById("money").innerHTML = 
      "You are in debt! You have -$" + (0 - money) + " ($" + (moneyRate * 2) + "/s)"; 
  } else { 
    document.getElementById("money").innerHTML = 
      "You have $" + money + " ($" + (moneyRate * 2) + "/s)"; 
  } 
  if (money >= 0 && !startedWorking) { 
    moneyRate = 4; 
    document.getElementById("beg").remove();
    notify("You got a job at a McDonalds outlet. \
\nEffect:\nMoney rate +$8/s, begging is disabled");
  } 
}

// Weapons 
var PossibleWeapons = {
  fist: Weapon("Fist", 1);
  stick: Weapon("Stick", 2);
  woodSword: Weapon("Wooden Sword", 3);
}
var currentWeapon = PossibleWeapons.fist;

function attack(enemy) {
  enemy.hp -= currentWeapon.damage;
  health -= enemy.weapon.damage - enemy.weapon.damage * (armor / 100);
}
