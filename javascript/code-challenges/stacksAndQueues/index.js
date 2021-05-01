'use strict';

const Stack = require('./stacks.js');
const Queue = require('./queues.js');

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.isEmpty());

let queue = new Queue();

console.log(queue.enqueue('first'));
console.log(queue.enqueue('second'));
console.log(queue.enqueue('third'));
console.log(queue.enqueue('fourth'));
console.log(queue.enqueue('fifth'));

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.enqueue('first'));
console.log(queue.enqueue('second'));
console.log(queue);


// console.log(queue.dequeue());
// console.log(queue.enqueue('sixth'));
// queue.enqueue('second');
// queue.enqueue('third');
console.log(queue);