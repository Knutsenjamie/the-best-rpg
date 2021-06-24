import Character from "../src/js/character.js"

describe(`Character`, () => {
  let level1Character

  beforeEach(() => {
    level1Character = new Character(`Mage`)
  })

  test(`should correctly return a character and their attributes`, () => {
    expect(level1Character.type).toEqual(`Mage`)
    expect(level1Character.health).toEqual(100)
    expect(level1Character.magicAttack).toEqual(50)
    expect(level1Character.meleeAttack).toEqual(50)
    expect(level1Character.bowAttack).toEqual(50)
    expect(level1Character.magicka).toEqual(50)
    expect(level1Character.endurance).toEqual(50)
    expect(level1Character.armor).toEqual(50)
    expect(level1Character.xp).toEqual(0)
    expect(level1Character.level).toEqual(1)
    expect(level1Character.gold).toEqual(250)
    expect(level1Character.inventory).toEqual({ healthPotion: `Health Potion` })
  })

  test(`should show "Mage" attributes if character type is equal to Mage`, () => {
    level1Character.characterType()
    expect(level1Character.type).toEqual(`Mage`)
    expect(level1Character.health).toEqual(100)
    expect(level1Character.magicAttack).toEqual(20)
    expect(level1Character.meleeAttack).toEqual(50)
    expect(level1Character.bowAttack).toEqual(0)
    expect(level1Character.magicka).toEqual(200)
    expect(level1Character.endurance).toEqual(100)
    expect(level1Character.armor).toEqual(150)
    expect(level1Character.xp).toEqual(0)
    expect(level1Character.level).toEqual(1)
    expect(level1Character.gold).toEqual(250)
    expect(level1Character.inventory).toEqual({ healthPotion: `Health Potion` })
  })

  test(`should correctly return true if health is less than or equal to 0`, () => {
    const character = new Character(`class`)
    character.health = 0
    expect(character.isDead()).toEqual(true)
  })

  test(`should correctly return a false if health is greater 0`, () => {
    expect(level1Character.isDead()).toEqual(false)
  })

  test(`should show characters base level as 1 if xp is anything unspecified`, () => {
    level1Character.levelUp()
    expect(level1Character.level).toEqual(1)
  })

  test(`should show character as being level 2 if their xp is greater than or equal to 100xp`, () => {
    const character = new Character(`class`)
    character.xp = 100
    character.levelUp()
    expect(character.level).toEqual(2)
  })

  test(`should show character as being level 3 if their xp is greater than or equal to 300xp`, () => {
    const character = new Character(`class`)
    character.xp = 300
    character.levelUp()
    expect(character.level).toEqual(3)
  })

  test(`should show character as being level 4 if their xp is greater than or equal to 500xp`, () => {
    const character = new Character(`class`)
    character.xp = 500
    character.levelUp()
    expect(character.level).toEqual(4)
  })

  test(`should show character as being level 5 if their xp is greater than or equal to 700xp`, () => {
    const character = new Character(`class`)
    character.xp = 700
    character.levelUp()
    expect(character.level).toEqual(5)
  })

  test(`should add 20 to each player attribute from base level when player reaches level 2`, () => {
    const character = new Character(`class`)
    character.level = 2
    character.addAttributes()
    expect(character.health).toEqual(120)
    expect(character.meleeAttack).toEqual(70)
    expect(character.magicAttack).toEqual(70)
    expect(character.bowAttack).toEqual(70)
    expect(character.magicka).toEqual(70)
    expect(character.endurance).toEqual(70)
  })

  test(`should add 80 to each player attribute from base level when player reaches level 5`, () => {
    const character = new Character(`class`)
    character.level = 5
    character.addAttributes()
    expect(character.health).toEqual(180)
    expect(character.meleeAttack).toEqual(130)
    expect(character.magicAttack).toEqual(130)
    expect(character.bowAttack).toEqual(130)
    expect(character.magicka).toEqual(130)
    expect(character.endurance).toEqual(130)
  })

  test(`should add keys of inventory items with corresponding values`, () => {
    level1Character.addItem()
    expect(level1Character.inventory).toEqual({ weapon: `Sword`, armor: `Leather Armor`, healthPotion: `Health Potion`, antidotePotion: `Antidote`, poisonPotion: `Poison` })
  })

  test(`should add 5 health and remove Health Potion`, () => {
    level1Character.useHealthPotion()
    expect(level1Character.health).toEqual(150)
    expect(level1Character.inventory).toEqual({})
  })

  test(`should remove Poison Potion when used`, () => {
    level1Character.inventory.poisonPotion = `Poison Potion`
    level1Character.usePoisonPotion()
    expect(level1Character.inventory).toEqual({ healthPotion: `Health Potion` })
  })

  test(`should remove Antidote when used`, () => {
    level1Character.inventory.antidotePotion = `Antidote`
    level1Character.useAntidote()
    expect(level1Character.inventory).toEqual({ healthPotion: `Health Potion` })
  })
})
