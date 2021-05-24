'use strict';

const insertionSort = require('../index.js');

describe('INSERTION SORT', () => {

    it('should correctly sort an array of integers', () => {

        expect(insertionSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42])
    });

    it('should return empty awrray if array argument is empty', () => {
        expect(insertionSort([])).toEqual([])
    })
})