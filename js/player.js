// Weapon class 
class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }
}

// Armor class 
class Armor {
  constructor(name, armorValue) {
    this.name = name; 
    this.armorValue = armorValue;
  }
}

// Enemy class 
class Enemy {
  constructor(name, hp, weapon, armor) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
    this.armor = armor;
  }
}

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
var money = -100; 
var moneyRate = 0; 
var startedWorking = false; 

function naturalMoney() { 
  money += moneyRate; 
} 

function moneyBoost(extra) { 
  money += extra; 
} 

// Player weapons 
var PossibleWeapons = {
  fist: new Weapon("Fist", 1),
  stick: new Weapon("Stick", 2),
  woodSword: new Weapon("Wooden Sword", 3)
};
var currentWeapon = PossibleWeapons.fist;

function attack(enemy) {
  enemy.hp -= currentWeapon.damage;
  health -= enemy.weapon.damage - enemy.weapon.damage * (armor / 100);
}

function buyWeapon() {
  var moneyReq = 0;
  var weaponToBuy = new Weapon("null", -10);
  switch (currentWeapon) {
    case PossibleWeapons.fist:
      weaponToBuy = PossibleWeapons.stick;
      moneyReq = 1000;
      break;
    case PossibleWeapons.stick:
      weaponToBuy = PossibleWeapons.woodSword;
      moneyReq = 10000;
      break;
    default:
      break;
  }
  money -= moneyReq;
  currentWeapon = weaponToBuy;
}

// Player armor 
var PossibleArmor = {
  none: new Armor("None", 0),
  calculator: new Armor("Broken Casio calculator", 1),
  chestplate: new Armor("Computer chestplate", 10)
};
var currentArmor = PossibleArmor.none; 

// Update once per ms
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
  document.getElementById("Weapon").innerHTML = "Weapon: " + currentWeapon.name + " (" + 
    currentWeapon.damage + " dmg)";
  document.getElementById("Armor").innerHTML = "Armor: " + currentArmor.name + " (" + 
    currentArmor.armorValue + " amr)";
  if (money >= 0 && !startedWorking) { 
    moneyRate = 4; 
    startedWorking = true;
    document.getElementById("beg").remove();
    notify("You got a job at a McDonalds outlet. \
\nEffect:\nMoney rate +$8/s, begging is disabled");
  }
  {
    var moneyReq = Infinity;
    var weaponToBuy = new Weapon("null", -10);
    switch (currentWeapon) {
      case PossibleWeapons.fist:
        weaponToBuy = PossibleWeapons.stick;
        moneyReq = 1000;
        break;
      case PossibleWeapons.stick:
        weaponToBuy = PossibleWeapons.woodSword;
        moneyReq = 10000;
       break;
      default:
        break;
    }
    if (moneyReq < 0 || moneyReq > money) {
      document.getElementById("Weapon Buy").disabled = true;
    } else {
      document.getElementById("Weapon Buy").disabled = false;
    }
    document.getElementById("Weapon Buy").innerHTML = weaponToBuy.name + " ($" + moneyReq + ") ";
  }
}


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
