/**
 * Function to find the largest and smallest elements in an array
 * @param {array} arr the array to find the largest and smallest elements in
 * @returns {object} an object with the largest and smallest elements
 */
function findLargestAndSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return { largest, smallest };
}

/**
 * Function to sort an array in ascending order
 * @param {array} arr the array to sort
 * @returns {array} the sorted array
 */
function sortArrayAsc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

function iterateArrayUsingLoop(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function iterateArrayUsingForEach(arr) {
    arr.forEach(el => console.log(el));
}
