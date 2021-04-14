import Character from './../src/js/character.js';

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

test ('should correctly return a string if health is less than or equal to 0', () => {
  const character = new Character(0,200,50,50,300,500,2,400,{});
  expect(character.isDead()).toEqual("this character is dead")
});

test ('should correctly return a false if health is greater 0', () => {
  const character = new Character(5,200,50,50,300,500,2,400,{});
  expect(character.isDead()).toEqual(false);
});

test ('should show character as being level 2 if their xp is greater than or equal to 100xp', () => {
  const character = new Character(5,200,50,50,300,100,1,400,{});
  expect(character.levelUp()).toEqual(2)
});