'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
    }

    add(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    getList() {
        if (!this.head) return 'no list';

        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

class Hashmap {
    constructor(size) {
        this.storage = new Array(size);
        this.size = size;
    }

    hash(key) {
        return key.split('').reduce((acc, cur) => {
            return acc + cur.charCodeAt(0);
        }, 0) * 19 % this.size;
    }

    //Add a new key/value pair to hashmap
    set(key, val) {
        let hash = this.hash(key);
        //create a new LL with a single item and put it in proper idx
        if (!this.storage[hash]) {
            let ll = new LL();
            ll.add([key, val]);
            this.storage[hash] = ll;
        }
        else {
            //else append to a pre-existing LL due to collision
            this.storage[hash].add([key, val]);
        }
    }

    get(key) {
        let hash = this.hash(key);
        if (!this.storage[hash]) return null;

        return this.storage[hash];
    }

    contains(key) {
        let hash = this.hash(key);

        return this.storage[hash] ? true : false;
    }

    repeatedWord(string) {
        let splitString = string.split(' ');

        for (let i = 0; i < splitString.length; i++) {
            let word = splitString[i].replace(",", "");
            if (this.contains(word)) return word;

            this.set(word, 1);
        }

        return null;
    }
}

module.exports = Hashmap;

// let hash = new Hashmap(50);

// console.log(hash.repeatedWord("Once upon a time, there was a brave princess who"));
// console.log(hash.repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York.."));
// console.log(hash.repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only."));
