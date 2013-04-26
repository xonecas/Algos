// Let's try merge sort, seems cool.
'use strict';

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

mergeSort = function (list) {

    if (list.length <= 1) {
        return list;
    }

    var m = Math.floor(list.length / 2),
        a = list.slice(0, m),
        b = list.slice(m);

    return join(mergeSort(a), mergeSort(b));

};

// expose as the global/module (part of the build process with uglifyjs
if (module) {
    module.exports.mergeSort = mergeSort;
}
