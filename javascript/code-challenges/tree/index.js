'use strict';

const BinarySearchTree = require('./binary-search-tree.js');
const BinaryTree = require('./tree.js');
const Node = require('./node.js')

let bst = new BinarySearchTree();
let bt = new BinaryTree();

bt.root = new Node(3);
bt.root.left = new Node(4);
bt.root.right = new Node(10);
// bt.add(5);
// bt.add(8);

console.log(bt.inOrder());

bst.add(5);
bst.add(3);
bst.add(7);
bst.add(2);
bst.add(1);
bst.add(9);
bst.add(20);

// console.log(bst.inOrder());
// console.log(bst.preOrder());
// console.log(bst.postOrder());

console.log(bst.contains(20));