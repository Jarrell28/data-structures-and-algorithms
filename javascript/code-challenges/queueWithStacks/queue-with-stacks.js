'use strict';

const Stack = require('./stacks.js');

class PsuedoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        if (this.stack1.length === 0) {
            this.stack1.push(value);
            return this.stack1.peek();
        } else {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
            this.stack2.push(value);

            while (this.stack2.length > 0) {
                this.stack1.push(this.stack2.pop());
            }
        }

        return this.stack1.peek();
    }

    dequeue() {
        return this.stack1.pop();
    }
}

module.exports = PsuedoQueue;