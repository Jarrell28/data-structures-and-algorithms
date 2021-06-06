'use strict';

const Hashmap = require('../hashtable');

describe('HASH TABLES', () => {

    it('should add key/value pair to the hashtable', () => {
        let hash = new Hashmap(10);

        hash.set('jarrell', 'houston');

        expect(hash.get('jarrell').head.val).toEqual(['jarrell', 'houston'])
    });

    it('should retrieve a value using a key from the hashtable', () => {
        let hash = new Hashmap(10);
        hash.set('bob', 'marley');

        expect(hash.get('bob').head.val).toEqual(['bob', 'marley'])
    })

    it('should return null for a key that does not exist in the hashtable', () => {
        let hash = new Hashmap(10);

        expect(hash.get('null')).toEqual(null)
    })

    it('should successfully handle a collision within a hashtable', () => {
        let hash = new Hashmap(10);

        hash.set('jarrell', 'houston')
        hash.set('jarrell', 'test');

        expect(hash.get('jarrell').head.next.val).toEqual(['jarrell', 'houston'])
    })
})