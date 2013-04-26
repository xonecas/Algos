// quick sort baby! 
//
// Chome's V8 uses this for Array.sort() for larger arrays (length 20ish or more)
// much more to be found about quicksort here http://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
'use strict';

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

quickSort = function (list, left, right) {
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


// can this be used for sorting lists of strings alphabetically ?

// expose as the global/module (part of the build process with uglifyjs
if (module) {
    module.exports.quickSort = quickSort;
}
