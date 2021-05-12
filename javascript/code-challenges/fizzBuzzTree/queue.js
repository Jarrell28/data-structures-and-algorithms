'use strict';

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        if (this.front === null) {
            this.front = this.rear = value;
        } else {
            this.rear.next = value;

            this.rear = value;
        }

        return this;
    }

    dequeue() {
        let value = this.front;

        if (!this.isEmpty()) {
            this.front = this.front.next;
        }

        if (!this.front) {
            this.rear = null;
        }

        return value;
    }

    isEmpty() {
        return !this.front;
    }

    peek() {
        if (this.isEmpty()) return null;

        return this.front;
    }
}

module.exports = Queue;