'use strict';
var mergeSort = require('../algos.js').mergeSort,
    items = [4, 8, 1, 4, 9, 0, 3, 2, 6];
console.log("JS Mergesort\nBefore:");
console.log(items);
console.log("After:");
console.log(mergeSort(items));
