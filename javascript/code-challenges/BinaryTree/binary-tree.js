'use strict';

const Node = require('./node.js');
const Queue = require('./queue.js');

module.exports = class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    add(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let _walk = (node) => {
            if (newNode.value > node.value) {
                if (node.right === null) return node.right = newNode;
                _walk(node.right);
            }
            if (newNode.value < node.value) {
                if (node.left === null) return node.left = newNode;
                _walk(node.left);
            }
        }

        _walk(this.root);

        return this;
    }

    contains(value) {
        if (this.root === null) return false;

        let bool = false;

        let _walk = (node) => {
            if (node.value === value) return bool = true;
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);

        }
        _walk(this.root);
        return bool;
    }

    preOrder() {
        // D, L R
        let results = [];

        let _walk = node => {
            results.push(node.value);
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
        }

        _walk(this.root);

        return results;
    }

    inOrder() {
        // L, D, R
        let results = [];

        let _walk = node => {
            if (node.left) _walk(node.left);
            results.push(node.value);
            if (node.right) _walk(node.right);
        }

        _walk(this.root);

        return results;
    }

    postOrder() {
        // L, R, D
        let results = [];

        let _walk = node => {
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
            results.push(node.value);
        }

        _walk(this.root);

        return results;
    }

    findMaxValue() {
        if (this.root === null) return null;

        let max = 0;

        let _walk = node => {
            if (node.value > max) max = node.value;
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
        }

        _walk(this.root);

        return max;
    }

    breadthTraversal(tree) {
        if (tree.root === null) return null;

        const treeValues = [];
        const treeQueue = new Queue();
        treeQueue.enqueue(tree.root);

        while (treeQueue.peek()) {
            let front = treeQueue.dequeue();
            treeValues.push(front.value);

            if (front.left) treeQueue.enqueue(front.left);
            if (front.right) treeQueue.enqueue(front.right);
        }

        return treeValues;
    }

}