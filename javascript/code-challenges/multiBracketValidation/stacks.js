'use strict';

class Stack {
    constructor() {
        this.length = 0;
    }

    push(value) {
        if (!value) return null;

        this[this.length++] = value;

        return this;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        let value = this[--this.length];
        delete this[this.length];
        return value;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        let value = this[this.length - 1];
        return value;
    }

    isEmpty() {
        return !this.length;
    }
}

module.exports = Stack;