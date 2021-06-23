const createCharacter = () => ({
  health: 100,
  meleeAttack: 50,
  magicAttack: 0,
  bowAttack: 50,
  magicka: 50,
  endurance: 50,
  armor: 50,
  xp: 0,
  level: 1,
  gold: 250,
  inventory: {healthPotion: "Health Potion"},
})

const createMage = () => ({
  ...createCharacter(),
  type: "Mage",
  meleeAttack: 20,
  magicAttack: 50,
  bowAttack: 0,
  magicka: 200,
  endurance: 100,
  armor: 150,
})

const createRogue = () => ({
  ...createCharacter(),
  type: "Rogue",
  health: 100,
  meleeAttack: 10,
  magicAttack: 0,
  bowAttack: 50,
  magicka: 0,
  endurance: 150,
  armor: 200,
})

const createWarrior = () => ({
  ...createCharacter(),
  type: "Warrior",
  meleeAttack: 150,
  magicAttack: 0,
  bowAttack: 10,
  magicka: 0,
  endurance: 200,
  armor: 250,
})

const createZombie = () => ({
  ...createCharacter(),
  type: "Zombie",
  health: 200,
  meleeAttack: 100,
  magicAttack: 0,
  bowAttack: 0,
  magicka: 25,
  endurance: 100,
  armor: 250,
})

const createSkeleto = () => ({
  ...createCharacter(),
  type: "Skeleton",
  health: 50,
  meleeAttack: 25,
  magicAttack: 20,
  bowAttack: 0,
  magicka: 10,
  endurance: 10,
  armor: 15,
})

const createOrc = () => ({
  ...createCharacter(),
  type: "Orc",
  health: 300,
  meleeAttack: 250,
  magicAttack: 200,
  bowAttack: 0,
  magicka: 200,
  endurance: 250,
  armor: 300,
})



  isDead() {
    if (this.health <= 0) {
      return true
    } else {
      return false;
    }
  }

  levelUp() {
    if (this.xp >= 700) {
      this.level = 5
    } else if (this.xp >= 500) {
      this.level = 4
    } else if (this.xp >= 300) {
      this.level = 3
    } else if (this.xp >= 100) {
      this.level = 2
    } else {
      this.level = 1
    }
  }

  addAttributes() {
    let characterLevel = this.level
    for (let index = 2; index <= characterLevel; index += 1) {
      this.health += 20;
      this.meleeAttack += 20;
      this.magicAttack += 20;
      this.bowAttack += 20;
      this.magicka += 20;
      this.endurance += 20;
    }
  }

  addItem() {
    this.inventory.weapon = "Sword";
    this.inventory.armor = "Leather Armor";
    this.inventory.healthPotion = "Health Potion";
    this.inventory.antidotePotion = "Antidote";
    this.inventory.poisonPotion = "Poison";
  }

  useHealthPotion() {
    if (this.inventory.healthPotion === "Health Potion") {
      this.health += 50;
      delete this.inventory.healthPotion;
    }
  }

  usePoisonPotion() {
    if (this.inventory.poisonPotion === "Poison Potion") {
      delete this.inventory.poisonPotion;
    }
  }

  useAntidote() {
    if (this.inventory.antidotePotion === "Antidote") {
      delete this.inventory.antidotePotion;
    }
  }
}
