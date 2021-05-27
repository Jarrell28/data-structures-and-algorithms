'use strict';

const quickSort = require('../index');

describe('QUICK SORT', () => {
    it('should correctly sort an array using quick sort', () => {
        expect(quickSort([8, 4, 23, 42, 16, 15], 0, 5)).toEqual([4, 8, 15, 16, 23, 42])
    })
})