export default class Character {
  constructor(health, attack, magicka, endurance, armor, xp, level, gold, inventory) {
    this.health = health
    this.attack = attack
    this.magicka = magicka
    this.endurance = endurance
    this.armor = armor
    this.xp = xp
    this.level = level
    this.gold = gold
    this.inventory = inventory
  }

  isDead () {
    if (this.health <= 0) {
      return true
    } else {
      return false;
    }
  }

  levelUp () {
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

  addAttributes () {
    let characterLevel = this.level
    for (let index = 2; index <= characterLevel; index +=1) {
      this.health += 2;
      this.attack += 2;
      this.magicka += 2;
      this.endurance += 2;
    }
  }

  addItem () {
    this.inventory.weapon = "Sword";
    this.inventory.armor = "Leather Armor";
    this.inventory.healthPotion = "Health Potion";
    this.inventory.antidotePotion = "Antidote";
    this.inventory.poisonPotion = "Poison";
  }

  useHealthPotion () {
    if (this.inventory.healthPotion === "Health Potion") {
      this.health += 5;
      delete this.inventory.healthPotion;
    }
  }

  usePoisonPotion () {
    if (this.inventory.poisonPotion === "Poison Potion") {
      delete this.inventory.poisonPotion;
    }
  }

  useAntidotePotion () {
    if (this.inventory.poisonPotion === "Poison Potion") {
      delete this.inventory.poisonPotion;
    }
  }
}
