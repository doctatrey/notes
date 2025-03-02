function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case: already sorted

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
    let right = mergeSort(arr.slice(mid));  // Recursively sort right half

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

const numbers = [5, 2, 9, 1, 7, 6];
console.log(mergeSort(numbers)); 
