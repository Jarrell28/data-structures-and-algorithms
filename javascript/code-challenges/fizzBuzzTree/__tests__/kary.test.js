'use strict';

const { Node } = require('../k-ary-tree.js');
const { KaryTree } = require('../k-ary-tree.js');

describe('K-Ary Fizz Buzz', () => {
    it('should return null if the tree is empty', () => {
        const tree = new KaryTree();

        expect(tree.fizzBuzzTree(tree)).toBe(null);
    });

    it('should return modified Fizz Buzz Tree', () => {

        const tree = new KaryTree();

        tree.root = new Node(5);
        tree.root.children.push(new Node(3));
        tree.root.children.push(new Node(7));
        tree.root.children.push(new Node(9));
        tree.root.children[0].children.push(new Node(5));
        tree.root.children[0].children.push(new Node(8));
        tree.root.children[1].children.push(new Node(20));
        tree.root.children[2].children.push(new Node(15));

        let fizzbuzzTree = tree.fizzBuzzTree(tree);

        expect(fizzbuzzTree.root.value).toEqual("Buzz");
        expect(fizzbuzzTree.root.children[0].value).toEqual("Fizz");
        expect(fizzbuzzTree.root.children[1].value).toEqual("7");
        expect(fizzbuzzTree.root.children[2].value).toEqual("Fizz");
        expect(fizzbuzzTree.root.children[0].children[0].value).toEqual("Buzz");
        expect(fizzbuzzTree.root.children[0].children[1].value).toEqual("8");
        expect(fizzbuzzTree.root.children[1].children[0].value).toEqual("Buzz");
        expect(fizzbuzzTree.root.children[2].children[0].value).toEqual("FizzBuzz");
    })
})
