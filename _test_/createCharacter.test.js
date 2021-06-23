import { createCharacter, createMage } from "../src/js/character";

describe('Create character', () => {
    it('should create an object character with no type', () => {
        expect(createCharacter().type).toEqual(undefined)
    });
});