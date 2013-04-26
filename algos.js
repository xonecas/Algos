(function(exports, global) {
    global["algos"] = exports;
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
    if (module) {
        module.exports.mergeSort = mergeSort;
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
    if (module) {
        module.exports.quickSort = quickSort;
    }
})({}, function() {
    return this;
}());