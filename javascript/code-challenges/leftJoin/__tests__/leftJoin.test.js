'use strict';

const Hashmap = require('../hashtable');

describe('LEFT JOIN', () => {
    it('should perform LEFT JOIN functionality on two hashtables', () => {
        let hash1 = new Hashmap(50);
        let hash2 = new Hashmap(50);

        hash1.set("fond", "enamored");
        hash1.set("wrath", "anger");
        hash2.set("wrath", "delight");

        expect(hash1.leftJoin(hash1, hash2).get("wrath").head.val).toEqual(["wrath", "anger", "delight"]);
    })
})