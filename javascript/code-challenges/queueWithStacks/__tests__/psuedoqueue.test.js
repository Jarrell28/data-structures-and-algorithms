'use strict';

const PsuedoQueue = require('../queue-with-stacks.js');

describe("PsuedoQueue Tests", () => {
    it('should enqueue multiple values in the queue', () => {
        const queue = new PsuedoQueue();

        //returning stack1.peek()
        expect(queue.enqueue(20)).toEqual(20);
        expect(queue.enqueue(15)).toEqual(20);
        expect(queue.enqueue(10)).toEqual(20);
    });

    it('should dequeue the correct values', () => {
        const queue = new PsuedoQueue();

        queue.enqueue(20);
        queue.enqueue(15);
        queue.enqueue(10);

        expect(queue.dequeue()).toEqual(20);
        expect(queue.dequeue()).toEqual(15);
        expect(queue.dequeue()).toEqual(10);
    })
})
