'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        // instantiate a new Node to add to our ll
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            // traversal

            let current = this.head;

            while (current.next) {
                current = current.next; // this updates the current position in the linked list
            }

            current.next = node;
        }

        return this;
    }

    //insert
    insert(value) {
        let node = new Node(value);
        let prevHead = this.head;
        this.head = node;
        this.head.next = prevHead;
    }

    includes(value) {
        let current = this.head;
        if (current.value === value) {
            return true;
        }

        while (current) {
            if (current.value === value) {
                return true;
            } else {
                current = current.next;
            }
        }

        return false;

    }

    toString() {
        let current = this.head;
        let string = "";


        while (current) {
            string += `{ ${current.value} } -> `;
            current = current.next;
        }

        string += 'NULL';

        return string;
    }
}

module.exports = LinkedList;

