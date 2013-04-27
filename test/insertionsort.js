'use strict';
var insertionSort = require('../algos.js').insertionSort,
    items = [ 4, 8, 1, 4, 9, 0, 3, 2, 6 ];
console.log("JS Insertionsort\nBefore:");
console.log(items);
console.log("After:");
console.log(insertionSort(items));
