'use strict';

const LL = require('./lib/linked-list.js');

let ll = new LL();

ll.append(10);

ll.append(20);

ll.insert(5);

ll.includes(30);

console.log(ll.toString());

console.log(ll);
