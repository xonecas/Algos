'use strict';
var quickSort = require('../algos.js').quickSort,
    items = [ 4, 8, 1, 4, 9, 0, 3, 2, 6 ];
console.log("JS quicksort\nBefore:");
console.log(items);
console.log("After:");
console.log(quickSort(items));
