# Stacks and Queues
Stacks - A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

Queues - A list of data items, commands, etc., stored so as to be retrievable in a definite order, usually the order of insertion.


## Challenge Description
Implement methods that allow you to push and pull from stack and queue data structures

## API

**Stack Methods**

push(value) - Nodes or items that are put into the stack are pushed

pop() - Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.

**Queue Methods**

Enqueue(value) - Nodes or items that are added to the queue.

Dequeue() - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.


**Shared Methods**

peek() - When you peek you will view the value of the top Node in the stack/queue. When you attempt to peek an empty stack an exception will be raised.

isEmpty() - returns true when stack/queue is empty otherwise returns false.
