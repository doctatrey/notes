//Simple Error
const promise1 = new Promise((resolve, reject) => {
    reject("Something went wrong")
})

promise1
    .then(() => {
        console.log("Everything went well!")
    })
    .catch((error) => {
        console.log(error) // Reject passes information to the catch block
    })


// Error Object
const promise2 = new Promise((resolve, reject) => {
    reject(new Error("Something went wrong"))
})

promise2
    .then(() => {
        console.log("Everything went well")
    })
    .catch((error) => {
        console.log(error.message) 
    })