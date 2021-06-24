import { createCharacter, createMage, useHealthPotion } from "../src/js/character"

describe(`Create character`, () => {
  it(`should create an object character with no type`, () => {
    expect(createCharacter().type).toEqual(undefined)
  })
})

describe(`useHealthPotion(character)`, () => {
  it(`increments health by 50 if the character had a health potion`, () => {
    const myCharacter = createCharacter()
    const myHealedCharacter = useHealthPotion(myCharacter)
    expect(myHealedCharacter.health).toEqual(150)
  })
})
