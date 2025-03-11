// 5 promises that resolve with different data types

let promise1 = new Promise((resolve, reject) => {
    let a = "String";

    if (typeof a == "string") {
        resolve("a is a string", x)
    } else {
        reject("Error")
    }
})

let promise2 = new Promise((resolve, reject) => {
    let b = 0;

    if (typeof b == "number") {
        resolve("b is a number")
    } else {
        reject("Error")
    }
})

let promise3 = new Promise((resolve, reject) => {
    let c = true;

    if (typeof c == "boolean") {
        resolve("c is a boolean");
    } else {
        reject("Error")
    }
})

let promise4 = new Promise((resolve, reject) => {
    let d = {}

    if (typeof d == "object") {
        resolve("d is an object")
    } else {
        reject("Error")
    }
})

let promise5 = new Promise((resolve, reject) => {
    let e = undefined;

    if (typeof e == "undefined") {
        resolve("e is an undefined variable")
    } else {
        reject("Error")
    }
})

promise1.then(
    function(result) {console.log(result)},
    function(error) {console.log(error)}
)

promise2.then(
    function(result) {console.log(result)},
    function(error) {console.log(error)}
)

promise3.then(
    function(result) {console.log(result)},
    function(error) {console.log(error)}
)

promise4.then(
    function(result) {console.log(result)},
    function(error) {console.log(error)}
)

promise5.then(
    function(result) {console.log(result)},
    function(error) {console.log(error)}
)

