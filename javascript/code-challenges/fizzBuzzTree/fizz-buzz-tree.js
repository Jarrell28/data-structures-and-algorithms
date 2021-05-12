'use strict';

const { Node } = require('./k-ary-tree.js');
const { KaryTree } = require('./k-ary-tree.js');

const tree = new KaryTree();

tree.root = new Node(5);
tree.root.children.push(new Node(3));
tree.root.children.push(new Node(7));
tree.root.children.push(new Node(9));
tree.root.children[0].children.push(new Node(5));
tree.root.children[0].children.push(new Node(8));
tree.root.children[1].children.push(new Node(20));
tree.root.children[2].children.push(new Node(15));

console.log(tree.fizzBuzzTree(tree));
// console.log(tree);