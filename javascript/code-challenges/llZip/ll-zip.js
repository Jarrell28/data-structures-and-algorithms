'use strict';

const LL = require('./lib/linked-list.js');

module.exports = function zipLists(list1, list2) {
    if (!list1.head && !list2.head) return null;
    if (!list1.head) return list2.toString();
    if (!list2.head) return list1.toString();

    let current = list1.head;
    let current2 = list2.head;

    let newList = new LL();

    while (current || current2) {
        if (current) {
            newList.append(current.value);

            current = current.next;
        }

        if (current2) {
            newList.append(current2.value);

            current2 = current2.next;
        }

    }

    return newList.toString();
}
