'use strict';

const BT = require('./binary-tree.js');

const bt = new BT();
bt.add(3);
bt.add(6);
bt.add(5);
bt.add(9);
bt.add(4);
bt.add(12);

console.log(bt.findMaxValue());