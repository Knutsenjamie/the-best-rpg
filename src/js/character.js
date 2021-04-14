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
}