'use strict';

const Node = require('./node.js');

module.exports = class BinarySearchTree {
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

}