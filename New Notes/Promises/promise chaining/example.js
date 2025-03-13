const promise = new Promise((resolve, reject) => {
    resolve("First");
})

promise
    .then((value1, value2) => {
        console.log(value1)
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Second");
                resolve("Third");
            }, 2000)
        })
    })
    .then((value) => {
        setTimeout(() => {
            console.log(value)
        }, 1000)
    })
