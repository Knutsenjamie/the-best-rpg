import Battle from './../src/js/battle.js';
import Character from './../src/js/character.js';

describe('Battle', () => {

  test ('should return a battle and its players', () => {
    const battleTurn = new Battle ("Mage", "Skeleton")
    expect(battleTurn.playerCharacter).toEqual("Mage")
    expect(battleTurn.computerCharacter).toEqual("Skeleton")
  });

});