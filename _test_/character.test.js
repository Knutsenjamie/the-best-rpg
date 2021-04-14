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