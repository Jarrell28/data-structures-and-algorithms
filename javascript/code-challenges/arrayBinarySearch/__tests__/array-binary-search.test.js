'use strict';

const binarySearch = require('../array-binary-search.js');

describe('Binary Search', () => {
    it('should return the index of the target number', () => {
        expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toStrictEqual(2);
    })

    it('should return -1 if target is not in array', () => {
        expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toStrictEqual(-1);
        expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toStrictEqual(-1);
    })
})
