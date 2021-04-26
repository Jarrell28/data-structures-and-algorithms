'use strict';

const LL = require('./lib/linked-list.js');

let ll = new LL();

ll.append(5);

ll.append(10);

ll.append(20);

ll.insertAfter(5, 8);

// ll.insert(5);

// ll.includes(30);

// ll.insertBefore(20, 15);

console.log(ll.toString());

console.log(ll);
