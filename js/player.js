function notify(text) {
  alert(text);
}
// Health 
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

// Money 
var money = -1000; 
var moneyRate = 2; 
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
      "You are in debt! You have -$" + (0 - money); 
  } else { 
    document.getElementById("money").innerHTML = 
      "You have $" + money; 
  } 
  if (money == 0 && !startedWorking) { 
    moneyRate = 4; 
    notify("You got a job at a McDonalds outlet. You now earn +$2 per second")
  } 
}
