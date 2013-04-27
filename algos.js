(function(exports, global) {
    global["algos"] = exports;
    "use strict";
    var insertionSort;
    insertionSort = function(list) {
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
    if (module && module.exports) {
        module.exports.insertionSort = insertionSort;
    } else {
        window.algos = window.algos || {};
        window.algos.insertionSort = insertionSort;
    }
    "use strict";
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
    mergeSort = function(list) {
        if (list.length <= 1) {
            return list;
        }
        var m = Math.floor(list.length / 2), a = list.slice(0, m), b = list.slice(m);
        return join(mergeSort(a), mergeSort(b));
    };
    if (module && module.exports) {
        module.exports.mergeSort = mergeSort;
    } else {
        window.algos = window.algos || {};
        window.algos.mergeSort = mergeSort;
    }
    "use strict";
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
    quickSort = function(list, left, right) {
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
    if (module && module.exports) {
        module.exports.quickSort = quickSort;
    } else {
        window.algos = window.algos || {};
        window.algos.quickSort = quickSort;
    }
})({}, function() {
    return this;
}());