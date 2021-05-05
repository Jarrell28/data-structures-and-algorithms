'use strict';

const { AnimalShelter } = require('./fifo-animal-shelter.js');
const { Dog } = require('./fifo-animal-shelter.js');
const { Cat } = require('./fifo-animal-shelter.js');

let shelter = new AnimalShelter();

let pit = new Dog('sheba');
let pit1 = new Dog('blue');
let cat = new Cat('kitty');
let cat1 = new Cat('kittyOne');

console.log(shelter.enqueue(pit));
console.log(shelter.enqueue(cat1));
console.log(shelter.enqueue(pit1));
console.log(shelter.enqueue(cat));

console.log(shelter.dequeue('dog'));
console.log(shelter.dequeue('cat'));