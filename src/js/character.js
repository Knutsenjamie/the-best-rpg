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
    if (this.xp >= 100) {
      this.level = 2
      return this.level
    }
  }
}
