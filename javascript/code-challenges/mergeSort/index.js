'use strict';

function mergeSort(arr) {
    let len = arr.length;

    if (len > 1) {
        let mid = Math.floor(len / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);

        mergeSort(left);

        mergeSort(right);

        merge(left, right, arr);
    }

    return arr;
};

function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i = i + 1;
        } else {
            arr[k] = right[j];
            j = j + 1;
        }

        k = k + 1;
    }

    if (i === left.length) {
        arr = [...arr, ...left]
    } else {
        arr = [...arr, ...right]
    }
}

console.log(mergeSort([2, 3, 5, 7, 13, 11]));