'use strict';

const arrayShift = require('../array-shift.js');

describe('Array Shift', () => {
    it('should return a new array with additional value', () => {
        expect(arrayShift([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
        expect(arrayShift([4, 8, 15, 23, 42], 16)).toStrictEqual([4, 8, 15, 16, 23, 42]);
    })
})
