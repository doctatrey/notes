function printTriplets(arr) {
    for (let i = 0; i < arr.length; i++) { //O(n)
        for (let j = 0; j < arr.length; j++) { //O(n)
            for (let k = 0; k < arr.length; k++) { //O(n)
                console.log(arr[i], arr[j], arr[k]) // Total iterations = n * n * n = O(n^3)
            }
        }
    }
}

const nums = [1, 2, 3];
printTriplets(nums);