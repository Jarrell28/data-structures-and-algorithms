//Write a function which takes in an array and the value to be added
//Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

module.exports = function insertShiftArray(arr, val) {

    //Get the middle of the array and save it into a variable
    let middle = Math.ceil(arr.length / 2);

    //Create variable that saves current value and next value
    let currentVal = 0;
    let nextVal = 0;

    //Loop over the array
    for (let i = 0; i <= arr.length; i++) {
        //When reaching the middle of the array, save the current index value in the nextVal variable
        if (i === middle) {
            nextVal = arr[i];

            //replace the current array value with the val parameter
            arr[i] = val;

        } else if (i > middle && i < arr.length) {
            //When reaching the next iteration after middle replacement and not at the end of the array

            //save the current array value as current variable
            currentVal = arr[i];
            //update the current array value with the next variable
            arr[i] = nextVal;
            //save the current value as next for next iteration
            nextVal = currentVal;

        } else if (i === arr.length) {
            //When reaching the end of the array, 

            //set the last array index to the nextVal variable
            arr[i] = nextVal;
            break;
        }
    }

    //return array
    return arr;

}