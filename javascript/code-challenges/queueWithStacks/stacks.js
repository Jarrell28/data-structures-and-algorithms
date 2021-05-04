'use strict';

class Stack {
    constructor() {
        this.length = 0;
    }

    push(value) {
        this[this.length++] = value;
        return this;
    }

    pop() {
        if (this.length === 0) return "Empty Stack";

        let value = this[--this.length];
        delete this[this.length];

        return value;
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