'use strict';

const LL = require('../linked-list.js');
const zipLists = require('../../ll-zip.js');

describe('Linked List ZIP', () => {

    it('should return null if both lists are empty', () => {
        let list1 = new LL();
        let list2 = new LL();

        expect(zipLists(list1, list2)).toEqual(null);
    });

    it('should return list1 if list2 is null', () => {
        let list1 = new LL();
        list1.append(1);
        list1.append(3);

        let list2 = new LL();

        expect(zipLists(list1, list2)).toEqual("{ 1 } -> { 3 } -> NULL");
    })

    it('should return list2 if list1 is null', () => {
        let list1 = new LL();


        let list2 = new LL();

        list2.append(2);
        list2.append(5);

        expect(zipLists(list1, list2)).toEqual("{ 2 } -> { 5 } -> NULL");
    });

    it('should return combined list', () => {
        let list1 = new LL();
        let list2 = new LL();

        list1.append(1);
        list1.append(3);
        list1.append(2);

        list2.append(5);
        list2.append(9);
        list2.append(4);

        expect(zipLists(list1, list2)).toEqual("{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL");
    })



})