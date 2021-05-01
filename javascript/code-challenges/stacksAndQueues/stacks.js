'use strict';

const Node = require('./nodes.js');

class Stack {
    constructor() {
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
        this[this.length++] = node;
        return this;
    }

    pop() {
        if (this.length === 0) return "Empty Stack";

        let node = this[--this.length];
        delete this[this.length];

        return node;
    }

    peek() {
        if (this.length === 0) return "Empty Stack";
        return this[this.length - 1];
    }

    isEmpty() {
        if (this.length === 0) return true;
        return false;
    }
}

module.exports = Stack;