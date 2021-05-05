'use strict';

const Stack = require("../stacks.js");
const multiBracketValidation = require('../multi-bracket-validation.js');

describe("Multi Bracket Validation", () => {

    it('should return true for these string inputs', () => {

        expect(multiBracketValidation("{}")).toBe(true);
        expect(multiBracketValidation("{}(){}")).toBe(true);
        expect(multiBracketValidation("()[[Extra Characters]]")).toBe(true);
        expect(multiBracketValidation("(){}[[]]")).toBe(true);
        expect(multiBracketValidation("{}{Code}[Fellows](())")).toBe(true);
    });

    it('should return false for these string inputs', () => {
        expect(multiBracketValidation("[({}]")).toBe(false);
        expect(multiBracketValidation("(](")).toBe(false);
        expect(multiBracketValidation("{(})")).toBe(false);
    })
})
