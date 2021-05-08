'use strict';

const BinarySearchTree = require('../binary-search-tree.js');
const BinaryTree = require('../tree.js');
const Node = require('../node.js')

describe('Binary Tree', () => {

    it('should successfully instantiate an empty tree', () => {
        const bt = new BinaryTree();

        expect(bt.root).toBe(null);
    });

    it('should successfully instantiate a tree with a single root node', () => {
        const bt = new BinaryTree(new Node(1));

        expect(bt.root.value).toEqual(1);
    });

    it('should successfully add a left child and right child to a single root node', () => {
        const bt = new BinaryTree(new Node(1));
        bt.root.left = new Node(4);
        bt.root.right = new Node(5);

        expect(bt.root.left.value).toEqual(4);
        expect(bt.root.right.value).toEqual(5);
    });

    it('should successfully return a colleciton from a preorder traversal', () => {
        const bt = new BinaryTree(new Node(1));
        bt.root.left = new Node(4);
        bt.root.right = new Node(5);
        expect(bt.preOrder()).toEqual([1, 4, 5])
    });

    it('should successfully return a colleciton from a inorder traversal', () => {
        const bt = new BinaryTree(new Node(1));
        bt.root.left = new Node(4);
        bt.root.right = new Node(5);
        expect(bt.inOrder()).toEqual([4, 1, 5]);
    });

    it('should successfully return a colleciton from a postorder traversal', () => {
        const bt = new BinaryTree(new Node(1));
        bt.root.left = new Node(4);
        bt.root.right = new Node(5);

        expect(bt.postOrder()).toEqual([4, 5, 1])
    });
});

describe('Binary Search Tree', () => {

    it('should successfully add nodes in the correct order', () => {
        const bst = new BinarySearchTree();
        bst.add(10);
        bst.add(5);
        bst.add(15);
        bst.add(12);
        bst.add(3);

        expect(bst.preOrder()).toEqual([10, 5, 3, 15, 12]);
    });

    it('should return true if the tree contains the value', () => {
        const bst = new BinarySearchTree();
        bst.add(10);
        bst.add(5);
        bst.add(15);
        bst.add(12);

        expect(bst.contains(5)).toBe(true);
    });

    it('should return false if the tree does not contain the value', () => {
        const bst = new BinarySearchTree();
        bst.add(10);
        bst.add(5);
        bst.add(15);
        bst.add(12);

        expect(bst.contains(9)).toBe(false);
    });

    it('should return false when using contain method on empty tree', () => {
        const bst = new BinarySearchTree();

        expect(bst.contains(5)).toBe(false);
    })
})