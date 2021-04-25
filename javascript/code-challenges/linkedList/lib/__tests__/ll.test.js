'use strict';

const LL = require('../linked-list.js');

describe('Linked List', () => {
    it('should create an empty LL on instantiation', () => {
        let list = new LL();
        expect(list.head).toEqual(null);
    });

    it('should properly insert into the linked list', () => {
        let list = new LL();
        list.append(10);

        list.insert(5);

        expect(list.head.value).toEqual(5);
    });

    it('head should properly point ot the first node in the linked list', () => {
        let list = new LL();
        let first = 1;
        let second = 2;

        list.append(first);
        expect(list.head.value).toEqual(1);
    });

    it('should properly insert multiple nodes into the linked list', () => {
        let list = new LL();
        let first = 20;
        let second = 10;
        let third = 5;

        list.insert(first);
        list.insert(second);
        list.insert(third);

        expect(list.head.value).toEqual(5);
        expect(list.head.next.value).toEqual(10);
        expect(list.head.next.next.value).toEqual(20);

    });

    it('should return true when finding a value within the linked list that exists', () => {
        let list = new LL();
        list.append(10);

        expect(list.includes(10)).toBe(true);
    });

    it('should return false when searching for a value in the linked list that does not exist', () => {
        let list = new LL();
        list.append(30);

        expect(list.includes(10)).toBe(false);
    });


    it('should return a list of all the values in the linked list', () => {
        let list = new LL();

        list.append(5);
        list.append(10);
        list.append(15);
        list.append(20);

        expect(list.toString()).toEqual("{ 5 } -> { 10 } -> { 15 } -> { 20 } -> NULL");
    })


    it('should add a node to the list', () => {
        let list = new LL();
        let first = 1;
        let second = 2;

        list.append(first);
        expect(list.head.value).toEqual(1);

        list.append(second);
        expect(list.head.next.value).toEqual(2);
    });


})