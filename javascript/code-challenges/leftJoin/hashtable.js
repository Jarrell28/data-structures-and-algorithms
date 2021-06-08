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

    leftJoin(hashtable1, hashtable2) {
        let hash = new Hashmap(hashtable1.size);

        for (let i = 0; i < hashtable1.storage.length; i++) {
            if (hashtable1.storage[i]) {
                let key = hashtable1.storage[i].head.val[0];
                let val = hashtable1.storage[i].head.val[1];
                hash.set(key, val)
            }
        }

        for (let i = 0; i < hashtable2.storage.length; i++) {
            if (hashtable2.storage[i]) {
                let key = hashtable2.storage[i].head.val[0];
                let val = hashtable2.storage[i].head.val[1];
                if (hash.contains(key)) {
                    hash.get(key).head.val.push(val);
                }
            }
        }

        return hash;
    }
}

module.exports = Hashmap;

// let hash1 = new Hashmap(50);
// let hash2 = new Hashmap(50);

// hash1.set("fond", "enamored");
// hash1.set("wrath", "anger");
// hash2.set("wrath", "delight");
// console.log(hash1.leftJoin(hash1, hash2))

// let hash3 = hash1.leftJoin(hash1, hash2);
// console.log(hash3.get("wrath").head);