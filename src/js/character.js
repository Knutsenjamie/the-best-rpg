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
    this.inventory = {}
  }

  isDead () {
    if (this.health <= 0) {
      return "this character is dead"
    } else {
      return false;
    }
  }

  levelUp () {
    if (this.xp >= 700) {
      this.level = 5
      return this.level
    } else if (this.xp >= 500) {
      this.level = 4
      return this.level
    } else if (this.xp >= 300) {
      this.level = 3
      return this.level
    } else if (this.xp >= 100) {
      this.level = 2
      return this.level
    } else {
      return this.level
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
    return (this.health, this.attack, this.magicka, this.endurance);
  }

  addItem () {
    this.inventory.weapon = "Sword";
    this.inventory.armor = "Leather Armor";
    this.inventory.healthPotion = "Health Potion";
    this.inventory.antidotePotion = "Antidote";
    this.inventory.poisonPotion = "Poison";
    return this.inventory;
  }
}


