function binarySearch(arr, target) {
    let left = 0, right = arr.length-1;

    while (left <= right) { //Each step reduces the search space by half
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) return mid; //Found
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1; //Not found
}

const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(numbers, 7));