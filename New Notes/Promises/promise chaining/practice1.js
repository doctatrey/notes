// Build a "promise pipeline" that transforms data through multiple steps

let promise = new Promise((resolve, reject) => {
    //Starts as String
    resolve('123');
})

promise
    .then((value) => {
        //Into Int
        console.log(value)
        return parseInt(value)
    })
    .then((value) => {
        //Into Array
        console.log(value)
        return value.toString().split('');
    })
    .then((value) => {
        console.log(value)
    })
