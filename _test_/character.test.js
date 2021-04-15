import Character from './../src/js/character.js';

describe('Character', () => {

  test ('should correctly return a character and their attributes', () => {
    const character = new Character(100,200,50,50,300,500,2,400,{});
    expect(character.health).toEqual(100)
    expect(character.attack).toEqual(200)
    expect(character.magicka).toEqual(50)
    expect(character.endurance).toEqual(50)
    expect(character.armor).toEqual(300)
    expect(character.xp).toEqual(500)
    expect(character.level).toEqual(2)
    expect(character.gold).toEqual(400)
    expect(character.inventory).toEqual({})
  });

  test ('should correctly return true if health is less than or equal to 0', () => {
    const character = new Character(0,200,50,50,300,500,2,400,{});
    expect(character.isDead()).toEqual(true)
  });

  test ('should correctly return a false if health is greater 0', () => {
    const character = new Character(5,200,50,50,300,500,2,400,{});
    expect(character.isDead()).toEqual(false);
  });

  test ('should show characters base level as 1 if xp is anything unspecified', () => {
    const character = new Character(5,200,50,50,300,0,1,400,{});
    character.levelUp()
    expect(character.level).toEqual(1)
  });

  test ('should show character as being level 2 if their xp is greater than or equal to 100xp', () => {
    const character = new Character(5,200,50,50,300,100,1,400,{});
    character.levelUp()
    expect(character.level).toEqual(2)
  });

  test ('should show character as being level 3 if their xp is greater than or equal to 300xp', () => {
    const character = new Character(5,200,50,50,300,300,1,400,{});
    character.levelUp()
    expect(character.level).toEqual(3)
  });

  test ('should show character as being level 4 if their xp is greater than or equal to 500xp', () => {
    const character = new Character(5,200,50,50,300,500,1,400,{});
    character.levelUp()
    expect(character.level).toEqual(4)
  });

  test ('should show character as being level 5 if their xp is greater than or equal to 700xp', () => {
    const character = new Character(5,200,50,50,300,700,1,400,{});
    character.levelUp()
    expect(character.level).toEqual(5)
  });

  test ('should add 2 to each player attribute from base level when player reaches level 2', () => {
    const character = new Character(10,10,10,10,10,200,2,5,{});
    character.addAttributes()
    expect(character.health).toEqual(12)
    expect(character.attack).toEqual(12)
    expect(character.magicka).toEqual(12)
    expect(character.endurance).toEqual(12)
  });

  test ('should add 8 to each player attribute from base level when player reaches level 5', () => {
    const character = new Character(10,10,10,10,10,800,5,5,{});
    character.addAttributes()
    expect(character.health).toEqual(18)
    expect(character.attack).toEqual(18)
    expect(character.magicka).toEqual(18)
    expect(character.endurance).toEqual(18)
  });

  test ('should add a key of "armor" with a value of "Leather Armor" to this.inventory', () => {
    const character = new Character(10,10,10,10,10,800,5,5,{});
    character.addItem()
    expect(character.inventory).toEqual({weapon: "Sword", armor: "Leather Armor", healthPotion: "Health Potion", antidotePotion: "Antidote", poisonPotion: "Poison"})
  });

  test ('should add 5 health and remove Health Potion', () => {
    const character = new Character(10,10,10,10,10,800,5,5,{healthPotion: "Health Potion"});
    character.useHealthPotion()
    expect(character.health).toEqual(15)
    expect(character.inventory).toEqual({})
  });

  test ('should remove Poison Potion when used', () => {
    const character = new Character(10,10,10,10,10,800,5,5,{poisonPotion: "Poison Potion"});
    character.usePoisonPotion()
    expect(character.inventory).toEqual({})
  });

  test ('should remove Antidote when used', () => {
    const character = new Character(10,10,10,10,10,800,5,5,{antidotePotion: "Antidote"});
    character.useAntidote()
    expect(character.inventory).toEqual({})
  });

});