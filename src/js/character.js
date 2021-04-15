export default class Character {
  constructor(type) {
    this.type = type
    this.health = 100
    this.meleeAttack = 50
    this.magicAttack = 50
    this.bowAttack = 50
    this.magicka = 50
    this.endurance = 50
    this.armor = 50
    this.xp = 0
    this.level = 1
    this.gold = 250
    this.inventory = {healthPotion: "Health Potion"}
  }

  characterType() {
    if (this.type === "Mage") {
      this.health = 100
      this.magicAttack = 20
      this.bowAttack = 0
      this.magicka = 200
      this.endurance = 100
      this.armor = 150
    }
  }

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
