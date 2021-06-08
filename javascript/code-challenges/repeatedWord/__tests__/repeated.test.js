'use strict';

const Hashmap = require('../hashtable');

describe('REPEATED WORD', () => {

    it('should return the first repeated word in a string', () => {
        let hash = new Hashmap(50);

        expect(hash.repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...")).toEqual("summer");
    })

    it('should return null if there are no repeated words in a string', () => {
        let hash = new Hashmap(50);

        expect(hash.repeatedWord("It should return null")).toBe(null);
    })
})