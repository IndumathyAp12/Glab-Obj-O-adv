const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    },
  };
  adventurer.inventory.forEach((item) => {
    console.log(item);
  });
  adventurer.companion.companion2 = {
    name: "Frank",
    type: "Flea",
    belongings: ["hat", "sunglasses"],
  };
  console.log(adventurer);
  adventurer.roll();

  //Part 2: Class Fantasy
  class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
robin.roll();
    robin.companion.roll();
    robin.companion.companion.roll();

// Part 3: Class Features

class Adventurer extends Character {
    constructor(name, role) {
      super(name);
      this.role = role; 
      this.inventory.push("bedroll", "50 gold coins"); 
      this.experience = 0; 
      this.level = 1; 
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    
    gainExperience(points) {
      this.experience += points;
      console.log(`${this.name} gained ${points} experience points.`);
      
      if (this.experience >= 100 * this.level) {
        this.levelUp();
      }
    }
  
        levelUp() {
      this.level++;
      console.log(`${this.name} leveled up to level ${this.level}!`);
      this.health += 20; 
    }
  }

// create a Companion class with properties and methods specific to the companions.

  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type; 
      this.tricks = []; 
    }
  
    learnTrick(trick) {
      this.tricks.push(trick);
      console.log(`${this.name} learned a new trick: ${trick}!`);
    }
  
    performTrick() {
      const randomTrickIndex = Math.floor(Math.random() * this.tricks.length);
      const randomTrick = this.tricks[randomTrickIndex];
      console.log(`${this.name} performs ${randomTrick}!`);
    }
  }

  //change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
  const robin1 = new Adventurer("Robin", "Warrior");
  robin1.inventory = ["sword", "potion", "artifact"];
  robin1.companion = new Companion("Leo", "Cat");
  robin1.companion.learnTrick("Jump");
  robin1.companion.companion = new Companion("Frank", "Flea");
  robin1.companion.companion.learnTrick("Hide");
  robin1.companion.companion.inventory = ["small hat", "sunglasses"];
    
  
// Part 4: Class Uniforms
class Character1 {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Character1.MAX_HEALTH;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class Adventurer1 extends Character1 {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role) {
    super(name);
    if (!Adventurer1.ROLES.includes(role)) {
      throw new Error(`Invalid role: ${role}. Must be one of ${Adventurer1.ROLES.join(", ")}`);
    }
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
    this.experience = 0;
    this.level = 1;
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  gainExperience(points) {
    this.experience += points;
    console.log(`${this.name} gained ${points} experience points.`);
    if (this.experience >= 100 * this.level) {
      this.levelUp();
    }
  }

  levelUp() {
    this.level++;
    console.log(`${this.name} leveled up to level ${this.level}!`);
    this.health += 20;
  }
}


//Part 5: Gather your Party

class AdventurerFactory {  
  constructor() {
    this.adventurers = [];
  }

  generate(name, role) {
    const newAdventurer = new Adventurer(name, role);
    this.adventurers.push(newAdventurer);
    return newAdventurer;
  }

  findByIndex(index) {
    return this.adventurers[index];
  }

  findByName(name) {
    return this.adventurers.find(a => a.name === name);
  }
}

const adventurersFactory = new AdventurerFactory();

// Generate adventurers with different roles
const robin2 = adventurersFactory.generate("Robin", "Fighter");
const leo2 = adventurersFactory.generate("Leo", "Healer");
const frank2 = adventurersFactory.generate("Frank", "Wizard");

// Access adventurers using factory methods
console.log(adventurersFactory.findByIndex(0)); // Access by index
console.log(adventurersFactory.findByName("Leo")); // Access by name


// Part 6: Developing Skills

class Adventurer2 extends Character {
  // Existing methods and properties...

  duel(opponent) {
    console.log(`Let the duel begin between ${this.name} and ${opponent.name}!`);

    while (this.health > 50 && opponent.health > 50) {
      const roll1 = this.roll();
      const roll2 = opponent.roll();

      if (roll1 > roll2) {
        opponent.health -= 1;
        console.log(`${this.name} rolled ${roll1}, ${opponent.name} rolled ${roll2}. ${opponent.name} loses 1 health. Current health: ${this.name}(${this.health}), ${opponent.name}(${opponent.health})`);
      } else if (roll2 > roll1) {
        this.health -= 1;
        console.log(`${this.name} rolled ${roll1}, ${opponent.name} rolled ${roll2}. ${this.name} loses 1 health. Current health: ${this.name}(${this.health}), ${opponent.name}(${opponent.health})`);
      } else {
        console.log(`${this.name} rolled ${roll1}, ${opponent.name} rolled ${roll2}. It's a tie! Current health: ${this.name}(${this.health}), ${opponent.name}(${opponent.health})`);
      }
    }

    if (this.health > 50) {
      console.log(`${this.name} wins the duel with ${this.health} health remaining!`);
    } else {
      console.log(`${opponent.name} wins the duel with ${opponent.health} health remaining!`);
    }
  }
}


// Part 7: Adventure Forth

// Classes for Adventurer, Companion, and AdventurerFactory (already defined)

// Enemy class representing creatures adventurers might encounter
class Enemy extends Character {
  constructor(name, health, strength) {
    super(name);
    this.health = health;
    this.strength = strength;
  }

  attack(target) {
    const damage = Math.floor(Math.random() * this.strength) + 1;
    target.health -= damage;
    console.log(`${this.name} attacks ${target.name} for ${damage} damage. ${target.name} health: ${target.health}`);
  }
}

// Inventory class for managing items
class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    console.log(`Added ${item} to inventory.`);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Removed ${item} from inventory.`);
    } else {
      console.log(`${item} not found in inventory.`);
    }
  }
}

// Instantiate adventurers, companions, and enemies
const adventurersFactory1 = new AdventurerFactory();
const healer = adventurersFactory1.generate("Alice", "Healer");
const fighter = adventurersFactory1.generate("Bob", "Fighter");
const wizard = adventurersFactory1.generate("Eva", "Wizard");

const cat = new Companion("Whiskers", "Cat");
const dog = new Companion("Buddy", "Dog");

const orc = new Enemy("Grom", 80, 10);
const dragon = new Enemy("Smaug", 150, 20);

class Character3 {
  
  duel(opponent) {
    console.log(`Let the duel begin between ${this.name} and ${opponent.name}!`);

    while (this.health > 50 && opponent.health > 50) {
      const roll1 = this.roll();
      const roll2 = opponent.roll();

      if (roll1 > roll2) {
        opponent.health -= 1;
        console.log(`${this.name} rolled ${roll1}, ${opponent.name} rolled ${roll2}. ${opponent.name} loses 1 health. Current health: ${this.name}(${this.health}), ${opponent.name}(${opponent.health})`);
      } else if (roll2 > roll1) {
        this.health -= 1;
        console.log(`${this.name} rolled ${roll1}, ${opponent.name} rolled ${roll2}. ${this.name} loses 1 health. Current health: ${this.name}(${this.health}), ${opponent.name}(${opponent.health})`);
      } else {
        console.log(`${this.name} rolled ${roll1}, ${opponent.name} rolled ${roll2}. It's a tie! Current health: ${this.name}(${this.health}), ${opponent.name}(${opponent.health})`);
      }
    }

    if (this.health > 50) {
      console.log(`${this.name} wins the duel with ${this.health} health remaining!`);
    } else {
      console.log(`${opponent.name} wins the duel with ${opponent.health} health remaining!`);
    }
  }
}

// Manage inventory
const adventurerInventory1 = new Inventory();
adventurerInventory1.addItem("Health potion");
adventurerInventory1.addItem("Sword");
adventurerInventory1.removeItem("Sword");
