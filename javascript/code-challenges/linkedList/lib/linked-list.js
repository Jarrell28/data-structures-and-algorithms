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

    insertBefore(value, newVal) {
        let current = this.head;
        //Keep track of previous node to link prev next to the new node
        let prev;

        while (current) {
            if (current.value === value) {
                //create new node value
                let node = new Node(newVal);

                //Check if current is the head
                if (current.value === this.head.value) {
                    //sets new node next to the current head
                    node.next = current;
                    //updates the current head to new node
                    this.head = node;

                    return this;
                } else {
                    //sets previous node.next to the new node
                    prev.next = node;
                    //sets the new node.next to the current node
                    node.next = current;
                    return this;
                }
            } else {
                //continue the traversal and update prev and current
                prev = current;
                current = current.next;
            }
        }

        return this;
    }

    insertAfter(value, newVal) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                //create new node
                let node = new Node(newVal);

                //update node.next
                node.next = current.next;

                //update current next to new Node
                current.next = node;

                return this;
            } else {
                //continue the traversal
                current = current.next;
            }
        }

        return this;
    }

    kthFromEnd(k) {
        //k is a negative number return null
        if (k < 0) return null;

        let current = this.head;
        let arrayList = [];

        //converting linked list to array
        while (current) {
            if (current) {
                arrayList.push(current.value);
            }
            current = current.next;
        }

        arrayList = arrayList.reverse();


        //if k is equal to array length, index is out of bounds return 0
        if (k > arrayList.length || k === arrayList.length) return null;

        //Only one item in linked list
        if (k === 0 && arrayList.length === 1) {
            return `Linked list length is one: ${arrayList[k]}`
        }

        //Happy Path
        if ((k > 0) && (k < arrayList.length - 1)) {
            return `Happy Path: ${arrayList[k]}`
        }


        return arrayList[k];

    }
}

module.exports = LinkedList;

