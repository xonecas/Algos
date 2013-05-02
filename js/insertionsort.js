/*jslint node:true browser:true */
'use strict';
// Insertion sort, the stable sort.
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

insertionSort = function (list) {
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

// module jargon
if (module && module.exports) {
    module.exports.insertionSort = insertionSort;
} else {
    window.algos = window.algos || {};
    window.algos.insertionSort = insertionSort;
}
