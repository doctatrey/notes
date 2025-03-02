function generatePermutations(arr, start = 0) {
    if (start === arr.length - 1) {
        console.log(arr.join(" "));
        return;
    }

    for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap
        generatePermutations(arr, start + 1); // Recursive call
        [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap back (backtracking)
    }
}

const elements = [1, 2, 3];
generatePermutations(elements);