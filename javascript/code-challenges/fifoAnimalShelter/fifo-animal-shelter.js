'use strict';

const Queue = require('./queue.js');

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal { }
class Cat extends Animal { }

class AnimalShelter {
    constructor() {
        this.dogs = new Queue();
        this.cats = new Queue();
    }

    enqueue(animal) {
        if (animal instanceof Dog) {
            this.dogs.enqueue(animal)
        } else if (animal instanceof Cat) {
            this.cats.enqueue(animal);
        }
    }

    dequeue(pref) {
        if (pref !== "cat" && pref !== "dog") return null;
        if (pref === "cat") return this.cats.dequeue();
        if (pref === "dog") return this.dogs.dequeue();
    }

    peek(pref) {
        if (pref !== "cat" && pref !== "dog") return null;
        if (pref === "cat") return this.cats.peek();
        if (pref === "dog") return this.dogs.peek();
    }
}

module.exports = { AnimalShelter, Dog, Cat };