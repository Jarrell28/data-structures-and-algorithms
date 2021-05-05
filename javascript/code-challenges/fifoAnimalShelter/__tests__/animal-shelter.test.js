'use strict';

const { AnimalShelter } = require('../fifo-animal-shelter.js');
const { Dog } = require('../fifo-animal-shelter.js');
const { Cat } = require('../fifo-animal-shelter.js');

describe('Animal Shelter', () => {
    const shelter = new AnimalShelter();
    const dog = new Dog('spot');
    const cat = new Cat('fluffy');

    it('should enqueue a Dog and Cat to the Animal Shelter', () => {
        shelter.enqueue(dog);
        shelter.enqueue(cat);

        expect(shelter.peek('dog').name).toEqual('spot');
        expect(shelter.peek('cat').name).toEqual('fluffy');
    });

    it('should enqueue multiple Dogs and Cats to the Animal Shelter', () => {
        const dog2 = new Dog('doggy');
        const cat2 = new Cat('kitty');

        shelter.enqueue(dog2);
        shelter.enqueue(cat2);

        expect(shelter.peek('dog').next.name).toEqual('doggy');
        expect(shelter.peek('cat').next.name).toEqual('kitty');
    })

    it('should dequeue a Dog and Cat from the Animal Shelter', () => {
        expect(shelter.dequeue('dog').name).toEqual('spot');
        expect(shelter.dequeue('cat').name).toEqual('fluffy');
    });

    it('should dequeue multiple Dogs and Cats from the Animal Shelter', () => {
        expect(shelter.dequeue('dog').name).toEqual('doggy');
        expect(shelter.dequeue('cat').name).toEqual('kitty');
    })
})