'use strict';

var algos = require('../algos.js'),
    list;

list = algos.shuffle(
        [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 20, 30, 40, 55, 65, 85, 99]);
console.log('Unsorted, shuffled');
console.log(list);

var insertionSort = algos.insertionSort;
console.log("JS Insertion sort");
console.log(insertionSort(list));

list = algos.shuffle(list);
var mergeSort = algos.mergeSort;
console.log("JS Merge sort");
console.log(mergeSort(list));

list = algos.shuffle(list);
var quickSort = algos.quickSort;
console.log("JS quick sort");
console.log(quickSort(list));

list = algos.shuffle(list);
var bubbleSort = algos.bubbleSort;
console.log("JS bubble sort");
console.log(bubbleSort(list));

list = algos.shuffle(list);
var randomizedQuickSort = algos.randomizedQuickSort;
console.log("JS randomized quick sort");
console.log(randomizedQuickSort(list));