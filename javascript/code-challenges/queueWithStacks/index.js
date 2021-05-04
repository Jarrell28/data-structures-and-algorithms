'use strict';

const PsuedoQueue = require('./queue-with-stacks.js');

let queue = new PsuedoQueue();

console.log(queue.enqueue(20))
console.log(queue.enqueue(15))
console.log(queue.enqueue(10))
console.log(queue.enqueue(5))

console.log(queue);

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue);