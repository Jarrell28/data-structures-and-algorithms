
function binarySearch(arr, target) {

    //Left tracker - beginning of array
    let left = 0;

    //Right tracker - last index of array
    let right = arr.length - 1;

    //Loop while left index is less than right index
    while (left <= right) {
        //Get the middle index of array
        let middle = Math.floor((left + right) / 2);

        //If middle number is less than the target, move left index to middle of array
        if (arr[middle] < target) {
            left = middle + 1;

            //If middle number is greater than the target, move right index to middle of array
        } else if (arr[middle] > target) {
            right = middle - 1;

            //Other wise the middle would be equal to the target - returns middle index
        } else {
            return middle;
        }
    }

    //The target was not in the array, returns -1
    return -1;
}

module.exports = binarySearch;