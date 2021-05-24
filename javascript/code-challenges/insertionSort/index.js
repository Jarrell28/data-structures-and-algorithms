'use strict'

module.exports = function insertionSort(arr) {
    if (arr.length === 0) return [];

    for (let i = 1; i < arr.length; i++) {
        //j keeps track of previous array index
        let j = i - 1;
        //Keeps track of current array value
        let temp = arr[i];

        //While j is a valid index and current iteration is less than previous iteration
        while (j >= 0 && temp < arr[j]) {
            //set current iteration = to previous iteration
            //moves higher numbers to right
            arr[j + 1] = arr[j];
            //decrements j until lowest number is first index and breaks out of loop
            j = j - 1;
        }

        //sets previous iteration as current iteration
        //moves lower number to left;
        arr[j + 1] = temp;
    }

    return arr;
}

// console.log(insertionSort([8, 4, 23, 42, 16, 15]));