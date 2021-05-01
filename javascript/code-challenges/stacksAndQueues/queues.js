'use strict';

const Node = require('./nodes.js');

class Queue {
    constructor() {
        this.length = 0;
        this.next = null;
    }

    enqueue(value) {
        let node = new Node(value);

        if (this.length === 0) {
            this.next = this.length;
        }


        this[this.length++] = node;
        return this;
    }

    dequeue() {
        if (this.length === 0) return "Empty Queue";

        let node = this[this.next];

        delete this[this.next++];
        this.length--;

        return node;

    }

    peek() {
        if (this.length === 0) return "Empty Queue";

        return this[this.next];
    }

    isEmpty() {
        if (this.length === 0) return true;
        return false;
    }


}

module.exports = Queue;