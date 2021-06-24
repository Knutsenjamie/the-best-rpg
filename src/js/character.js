export const createCharacter = () => ({
  health: 100,
  meleeAttack: 50,
  magicAttack: 0,
  bowAttack: 50,
  magicka: 0,
  endurance: 50,
  armor: 50,
  xp: 0,
  level: 1,
  gold: 250,
  inventory: {
    potions: [
      {
        name: `Health Potion`,
        target: `health`,
        // character[target]: (character.health) = effect(character[target])
        effect: (health) => health + 50,

      },
    ],
    armor: [],
    weapons: [],

  },
  levelUpGains: {
    health: 20,
    meleeAttack: 20,
    magicAttack: 20,
    bowAttack: 20,
    magicka: 20,
    endurance: 20,
  },
})

export const createMage = () => ({
  ...createCharacter(),
  type: `Mage`,
  meleeAttack: 20,
  magicAttack: 50,
  bowAttack: 0,
  magicka: 200,
  endurance: 100,
  armor: 150,
})

export const createRogue = () => ({
  ...createCharacter(),
  type: `Rogue`,
  meleeAttack: 10,
  endurance: 150,
  armor: 200,
})

export const createWarrior = () => ({
  ...createCharacter(),
  type: `Warrior`,
  meleeAttack: 150,
  bowAttack: 10,
  endurance: 200,
  armor: 250,
})

export const createZombie = () => ({
  ...createCharacter(),
  type: `Zombie`,
  health: 200,
  meleeAttack: 100,
  bowAttack: 0,
  magicka: 25,
  endurance: 100,
  armor: 250,
})

export const createSkeleton = () => ({
  ...createCharacter(),
  type: `Skeleton`,
  health: 50,
  meleeAttack: 25,
  magicAttack: 20,
  bowAttack: 0,
  magicka: 10,
  endurance: 10,
  armor: 15,
})

export const createOrc = () => {
  const defaultCharacter = createCharacter()
  return {
    ...defaultCharacter,
    type: `Orc`,
    health: 300,
    meleeAttack: 250,
    magicAttack: 200,
    bowAttack: 0,
    magicka: 200,
    endurance: 250,
    armor: 300,
  }
}

export const isDead = (character) => (character.health <= 0)

export const levelUp = (character) => {
  const { xp } = character
  const level = xp >= 700
    ? 5
    : xp >= 500
      ? 4
      : xp >= 300
        ? 3
        : xp >= 100
          ? 2
          : 1
  return { ...character, level }
}

export const addAttributes = (character) => {
  const { level, levelUpGains } = character
  const newStats = {}
  Object.Entries(levelUpGains).forEach((levelUpGainEntry) => {
    const [stat, gain] = levelUpGainEntry
    newStats[stat] = character[stat] + gain * (level - 1)
  })

  return { ...character, ...newStats }
}

export const addItems = (character) => {
  const { inventory } = character
  const newItems = 0
}

// splice (where, how many to delete, new things to add)
// findIndex ((something in the array): boolean => something.someProperty === 'whatIWant')

export const useHealthPotion = (character) => {
  const { inventory } = character
  const indexOfHealthPotion = inventory.potions.findIndex(
    (potion) => potion.target === `health`
  ) // if no health potion => -1
  console.log(indexOfHealthPotion)
  const potionWasFound = indexOfHealthPotion !== -1
  if (potionWasFound) {
    const foundPotion = inventory.potions[indexOfHealthPotion]
    const { target, effect } = foundPotion
    character[target] = effect(character[target])
    const newPotions = [...inventory.potions]
    newPotions.splice(indexOfHealthPotion, 1)
    inventory.potions = newPotions
    console.log(target, character.target)
  }
  character.inventory = { inventory }
  return character
}

/*

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
*/
