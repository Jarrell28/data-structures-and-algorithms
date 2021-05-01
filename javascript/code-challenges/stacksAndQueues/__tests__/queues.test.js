'use strict';

const Queue = require("../queues.js");


describe('QUEUES', () => {


    it('should successfully enqueue into a queue', () => {
        const queue = new Queue();

        queue.enqueue(1);

        expect(queue.peek().value).toEqual(1);
    });

    it('should successfully enqueue multiple values into a queue', () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.length).toEqual(3);
    });

    it('should successfully dequeue out of a queue the expected value', () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue().value).toEqual(1);
    });

    it('should successfully peek into a queue, seeing the expected value', () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);


        expect(queue.peek().value).toEqual(1);
    });

    it('should successfully empty a queue after multiple dequeues', () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();

        expect(queue.isEmpty()).toBe(true);
    });

    it('should successfully instantiate an empty queue', () => {
        const queue = new Queue();

        expect(queue.isEmpty()).toBe(true);
    });

    it('should call exception when calling dequeue or peek on empty queue', () => {
        const queue = new Queue();

        expect(queue.peek()).toEqual("Empty Queue");
    })
})