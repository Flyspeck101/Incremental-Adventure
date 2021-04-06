// Weapon class 
class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }
}

// Armour class 
class Armour {
  constructor(name, armourValue) {
    this.name = name; 
    this.armourValue = armourValue;
  }
}

// Enemy class 
class Enemy {
  constructor(name, hp, weapon, armour, ascii, drop) {
    this.name = name;
    this.hp = hp;
    this.max = hp;
    this.weapon = weapon;
    this.armour = armour;
    this.ascii = ascii;
    this.drop = drop;
  }
  isAlive() {
    return hp > 0;
  }
}

function notify(text) {
  alert(text);
}

function hideById(id) {
  var x = document.getElementById(id);
  x.style.display = "none";
}

function showById(id) {
  var x = document.getElementById(id);
  x.style.display = "block";
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
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
  enemy.hp -= currentWeapon.damage - currentWeapon.damage * (enemy.armour.armourValue / 100);
  health -= enemy.weapon.damage - enemy.weapon.damage * (currentArmour.armourValue / 100);
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
var PossibleArmour = {
  none: new Armour("None", 0),
  calculator: new Armour("Broken Casio calculator", 1),
  chestplate: new Armour("Computer chestplate", 10)
};
var currentArmour = PossibleArmour.none; 

function buyArmour() {
  var moneyReq = 0;
  var armourToBuy = new Armour("There are no more armors. Sorry!", 0);
  switch (currentArmour) {
    case PossibleArmour.none:
      armourToBuy = PossibleArmour.calculator;
      moneyReq = 1000;
      break;
    case PossibleArmour.calculator:
      armourToBuy = PossibleArmour.chestplate;
      moneyReq = 10000;
      break;
    default:
      break;
  }
  money -= moneyReq;
  currentArmour = armourToBuy;
}

// Enemies!
let inBattle = false;
let currentEnemy = new Enemy("null",Infinity,new Weapon("null",0),new Armour("null",0),"",0);
var currentFloor = 0;
let maxFloor = 2;
var enemiesPassed = 0;
let enemiesPerFloor = 5;
let enemies = [
  [
    new Enemy("a Rock", 10, new Weapon("Small rock", 1), new Armour("Nothing", 0), 
                `             ____ 
           _/    \
         _/       \
      __/    |  \_ \__
     /    =  /        \
    /  -          __   \
-----------------------------
`, 100)
  ],
  [
    new Enemy("a ... rat?", 20, new Weapon("Sharp claws", 6), new Armour("Nothing", 0),
              `       __             _,-"~^"-..
     _// )      _,-"~           .
   ." ( / "-,-"                  ;
  / 6                             ;
 /           ,             ,-"     ;
(,__.--.      \           /        ;
 //'   / -.\   |          |         ._________
   _.-'_/   )  )--...,,,___\     \-----------,)
 ((("~  _.-'.-'           __ -.   )         //
       ((("              (((---~"/         //
                                          ((________________
                                           \---""""~~~~^^^--
`, 500)
  ]
]

function startBattle() {
  inBattle = true;
}

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
  document.getElementById("Armour").innerHTML = "Armour: " + currentArmour.name + " (" + 
    currentArmour.armourValue + " amr)";
  if (money >= 0 && !startedWorking) { 
    moneyRate = 4; 
    startedWorking = true;
    document.getElementById("beg").remove();
    notify("You got a job at a McDonalds outlet. \
\nEffect:\nMoney rate +$8/s, begging is disabled");
  }
  {
    var moneyReq = Infinity;
    var weaponToBuy = new Weapon("There are no more weapons. Sorry!", 0);
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
  {
    var moneyReq = Infinity;
    var armourToBuy = new Armour("There are no more armours. Sorry!", 0);
    switch (currentArmour) {
      case PossibleArmour.none:
        armourToBuy = PossibleArmour.calculator;
        moneyReq = 1000;
        break;
      case PossibleArmour.calculator:
        armourToBuy = PossibleArmour.chestplate;
        moneyReq = 10000;
       break;
      default:
        break;
    }
    if (moneyReq < 0 || moneyReq > money) {
      document.getElementById("Armour Buy").disabled = true;
    } else {
      document.getElementById("Armour Buy").disabled = false;
    }
    document.getElementById("Armour Buy").innerHTML = armourToBuy.name + " ($" + moneyReq + ") ";
  }
  if (inBattle) {
    showById("attack");
    showById("escape");
    document.getElementById("inBattle").innerHTML = "You are in battle!";
    let battleStats = currentEnemy.ascii;
    battleStats += "\n\n\n";
    battleStats += "You are fighting: ";
    battleStats += currentEnemy.name;
    battleStats += "\nHealth: "
    battleStats += currentEnemy.hp;
    battleStats += " hp / ";
    battleStats += currentEnemy.max;
    battleStats += " hp\nWeapon: ";
    battleStats += currentEnemy.weapon.name;
    battleStats += "\nDamage: ";
    battleStats += currentEnemy.weapon.damage;
    battleStats += "\nArmour: ";
    battleStats += currentEnemy.armour.name;
    battleStats += " (";
    battleStats += currentEnemy.armour.armourValue;
    battleStats += " pts)\n\nYou:\nHealth: ";
    battleStats += health;
    battleStats += " hp / ";
    battleStats += maxHealth;
    battleStats += " hp\nWeapon: ";
    battleStats += currentWeapon.name;
    battleStats += "\nDamage: ";
    battleStats += currentWeapon.damage;
    battleStats += "\nArmour: ";
    battleStats += currentArmour.name;
    battleStats += " (";
    battleStats += currentArmour.armourValue;
    battleStats += " pts)\n\n";
    document.getElementById("battleStats").innerHTML = battleStats;
    if (currentFloor == 0) {
      currentFloor += 1;
      currentEnemy = randomElement(enemies[0]);
    } else {
      while (enemiesPassed < enemiesPerFloor) {
        while (currentEnemy.isAlive()) {}
        enemiesPassed += 1;
        money += currentEnemy.drop;
        currentEnemy = randomElement(enemies[currentFloor - 1]);
      }
      currentFloor += 1;
      if (currentFloor > maxFloor) {
        currentFloor = maxFloor;
      }
      currentEnemy = randomElement(enemies[currentFloor - 1]);
    }
  } else {
    hideById("attack")
    hideById("escape")
    document.getElementById("inBattle").innerHTML = "You are not battling anything right now.";
    document.getElementById("battleStats").innerHTML = "";
  }
}



