'use strict';

const BT = require('../binary-tree.js');

describe('Binary Tree Maximum Value', () => {

    it('should return null if the tree is empty', () => {
        const bt = new BT();

        expect(bt.findMaxValue()).toBe(null);
    })

    it('should return the maximum value in the tree', () => {
        const bt = new BT();

        bt.add(5);
        bt.add(2);
        bt.add(7);
        bt.add(11);
        bt.add(14);

        expect(bt.findMaxValue()).toEqual(14);


    })
})

describe('Binary Tree Breadth First Traversal', () => {

    it('should return a list of a tree using breadth first traversal', () => {
        const bt = new BT();

        bt.add(10);
        bt.add(7);
        bt.add(12);
        bt.add(5);
        bt.add(11);
        bt.add(14);

        expect(bt.breadthTraversal(bt)).toEqual([10, 7, 12, 5, 11, 14]);
    })
})