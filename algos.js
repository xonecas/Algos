(function() {
    "use strict";
    var algos = {};
    var insertionSort;
    insertionSort = algos.insertionSort = function(list) {
        var len = list.length, val, i, hole;
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
    var join, mergeSort;
    join = function(a, b) {
        var joined = [], ai = 0, bi = 0;
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
    mergeSort = algos.mergeSort = function(list) {
        if (list.length <= 1) {
            return list;
        }
        var m = Math.floor(list.length / 2), a = list.slice(0, m), b = list.slice(m);
        return join(mergeSort(a), mergeSort(b));
    };
    var swap, partition, quickSort;
    swap = function(list, first, second) {
        var tmp = list[first];
        list[first] = list[second];
        list[second] = tmp;
    };
    partition = function(list, left, right) {
        var pivot = list[Math.floor((left + right) / 2)];
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
    quickSort = algos.quickSort = function(list, left, right) {
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
    var bubbleSort;
    bubbleSort = algos.bubbleSort = function(list) {
        var len = list.length, i, j;
        for (i = 0; i < len; i += 1) {
            for (j = 0; j < len - i; j += 1) {
                if (list[j] > list[j + 1]) {
                    swap(list, j, j + 1);
                }
            }
        }
        return list;
    };
    var shuffle;
    shuffle = algos.shuffle = function(list) {
        var len = list.length, max = len - 1;
        while (len) {
            len -= 1;
            swap(list, len, Math.floor(Math.random() * max));
        }
        return list;
    };
    var fuzzy;
    fuzzy = algos.fuzzy = function(a, b) {
        if (a === b) {
            return 0;
        }
        if (!a.length || !b.length) {
            return 0;
        }
        return Math.min(fuzzy(a.substring(1), b) + 1, fuzzy(b.substring(1), a) + 1, fuzzy(a.substring(1), b.substring(1)) + (a[0] !== b[0] ? 1 : 0));
    };
    if (module && module.exports || exports) {
        module = module || {};
        exports = module.exports = algos;
    } else {
        window.algos = algos;
    }
})();