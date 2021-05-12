'use strict';

const Queue = require('./queue.js');

class Node {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.children = [];
        this.next = null;
    }
}

class KaryTree {
    constructor(root = null) {
        this.root = root;
    }

    fizzBuzzTree(tree) {
        if (tree.root === null) return null;

        let queue = new Queue();
        queue.enqueue(tree.root);

        while (queue.peek()) {
            let front = queue.dequeue();

            if (front.value % 5 === 0 && front.value % 3 === 0) {
                front.value = "FizzBuzz";
            } else if (front.value % 3 === 0) {
                front.value = "Fizz";
            } else if (front.value % 5 === 0) {
                front.value = "Buzz";
            } else {
                front.value = front.value.toString();
            }

            for (let i = 0; i < front.children.length; i++) {
                queue.enqueue(front.children[i]);
            }
        };

        return tree;

    }

}

module.exports = { KaryTree, Node };