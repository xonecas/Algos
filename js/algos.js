/*jslint node:true browser:true */
'use strict';
var algos = {};
// Insertion sort, the stable sort.
// ================================
//
// resources:
// https://www.khanacademy.org/science/computer-science/v/insertion-sort-algorithm
// http://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/

var insertionSort;

// Ok, so what on earth is this? it's quite simple to explain visually. Think of bunch of cups,
// each one had a marble with a value written on it. To order the values on the balls we start
// with the second cup from the left and take the ball out. Now compare the value of the loose
// ball with the value of the ball in the cup to the left of the empty cup. If the value is
// greater then we grab that ball and move it to the now empty cup. Continue to do this while the
// values of the balls in the cups to the left are greater than the loose balls vlaue. Once you
// reach the last cup on the left or a value that is lesser than the loose ball's value, just
// place the loose ball in the empty cup and move right to the next cup.
// By the time you reach the last cup on the right, you'll have sorted the balls per their values
// in ascending order.

insertionSort = algos.insertionSort = function (list) {
    var len = list.length,
        val,
        i,
        hole;

    for (i = 1; i < len; i += 1) {

        val = list[i];
        hole = i;

        while (hole > 0 && val < list[hole - 1]) {
            list[hole] = list[hole - 1];
            hole -= 1;
        }

        list[hole] = val;

    }

    return list;

};



// Let's try merge sort, seems cool.
// ================================

var join,
    mergeSort;


// Join two sorted arrays together.
//
// Create two pointers, one for each list, point them both to the value
// at index 0. Keep comparing the idexes values and keep the lowest in the
// joined list, increment by 1 the respective index. Do this until one of
// the indexes matches the length of it's list.
// Simple pile up the remainder of the orther list at the end of the joined
// result. Ta-Da!

join = function (a, b) {
    var joined = [],
        ai = 0,
        bi = 0;

    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) {
            joined.push(a[ai]);
            ai += 1;
        } else {
            joined.push(b[bi]);
            bi += 1;
        }
    }

    return joined.concat(a.slice(ai).concat(b.slice(bi)));

};


// Now for the cool part
//
// Don't you love recursion? Base case is a single item list, that needs no
// sort and can be returned as is. The recursive step finds a middle to the
// list and cuts it in half.
// We return the recursive call, so that we keep on splitting smaller and
// smaller lists until their are of a single item, and then we return them
// as we pile them back up in order one by one.

mergeSort = algos.mergeSort = function (list) {

    if (list.length <= 1) {
        return list;
    }

    var m = Math.floor(list.length / 2),
        a = list.slice(0, m),
        b = list.slice(m);

    return join(mergeSort(a), mergeSort(b));

};



// quick sort baby!
// ================
//
// Chome's V8 uses this for Array.sort() for larger arrays (length 20ish or more)
// much more to be found about quicksort here http://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/

var swap,
    partition,
    quickSort;


// easy peasy swap function.
//
// think 3 glasses, a red one with beer, a blue one with wine, and a white empty one.
// we want the beer in the blue glass and the wine in the red one.
// pour the beer in the white one,
// pour the wine in the red one,
// pour the beer into the blue one.

swap = function (list, first, second) {
    var tmp = list[first];
    list[first] = list[second];
    list[second] = tmp;
};


// creates a smaller partition of the array
//
// starting with a middle point because if the array is sorted you'll get
// the worst possible performance if you choose the first or last elements.
// while the left pointer is smaller or equal to the right pointer
// move the left pointer to the right while it's value is less than the middle's value.
// after, move the right pointer to the left while it's value is greater than the middle's value.
// if the left pointer is smaller or equal to the right pointer swap the pointers values.
// move the pointers one more time in each direction so that we continue in the correct direction.
// return the left pointer so it can be used as the starting point for the next partition.

partition = function (list, left, right) {
    var pivot = list[Math.floor( (left + right) / 2 )];

    while (left <= right) {

        while (list[left] < pivot) {
            left += 1;
        }

        while (list[right] > pivot) {
            right -= 1;
        }

        if (left <= right) {
            swap(list, left, right);
            left += 1;
            right -= 1;
        }

    }

    return left;
};


// Only operate on lists with 2 or more values.
// use default values for left and right if they are undefined (first run).
// partition the array.
// if the left pointer can still be moved right towards the index, call quicksort again in that direction.
// if the right pointer can be moved left, call quicksort from the current index.

quickSort = algos.quickSort = function (list, left, right) {
    var idx;

    if (list.length >= 2) {

        left = left === undefined ? 0 : left;
        right = right === undefined ? list.length - 1 : right;

        idx = partition(list, left, right);

        if (left < idx - 1) {
            quickSort(list, left, idx - 1);
        }

        if (idx < right) {
            quickSort(list, idx, right);
        }
    }

    return list;
};



// Bubble sort, aka blubbly
// ========================

var bubbleSort;


// As the name says, bubbly over here compares all the values in sequence, "bubbling" the
// higher values to the top. VERY SLOW! n^2 slow...

bubbleSort = algos.bubbleSort = function (list) {
    var len = list.length,
        i,
        j;

    for (i = 0; i < len; i += 1) {
        for (j = 0; j < (len - i); j += 1) {
            if (list[j] > list[j + 1]) {
                swap(list, j, j + 1);
            }
        }
    }

    return list;
};


// shuffle, make a mess of things...
// =================================

var shuffle;


// slow and compreensive? fast and simple?
// for each item in the array, create a random number within the length and swap.

shuffle = algos.shuffle = function (list) {
    var len = list.length,
        max = len - 1;

    while (len) {
        len -= 1;
        swap(list, len, Math.floor( Math.random() * max ));
    }

    return list;
};


// Levenshtein distance (fuzzy text matching)
// ==========================================

var fuzzy;


// Levenshtein distance is the number of edits to change one word into another. For example
// `git` and `got` have a Levenshtein distance of 1, since only one edit needs to be made
// to tranform them into equal strings. Levenshtein is not very efficient and for performance
// concerns it should only be applied to small strings at a time, since checking a massive text
// would take forever(ish).

fuzzy = algos.fuzzy = function (a, b) {

    // base cases
    if (a === b) { return 0; }
    if (!a.length || !b.length) { return 0; }

    return Math.min(
        fuzzy(a.substring(1), b) + 1,
        fuzzy(b.substring(1), a) + 1,
        fuzzy(a.substring(1), b.substring(1)) + (a[0] !== b[0] ? 1 : 0)
    );

};
