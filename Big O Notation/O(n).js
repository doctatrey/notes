function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { //Loop runs 'n' times
        sum[i] += arr[i];
    }
    return sum;
}

const nums = [10, 20, 30, 40, 50];
console.log(sumArray(nums))


let arr1 = [1, 2, 3, 4, 5, 6];
arr.splice(2,1) //Remove element at index 2 (value 3), takes O(n) time.

let arr2 = [1, 2, 3, 4, 5, 6];
arr.splice(3, 0, 4); //Insert 4 at index 3, takes O(n) time.

