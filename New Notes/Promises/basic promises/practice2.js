// built a function that resolves after a random delay

let randomInterval = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000

function fn() {
    //Creates promise
    let myPromise = new Promise((resolve, reject) => {
        // resolves after randomInterval time
        setTimeout(() => resolve("Resolved after: " + randomInterval + "ms"), randomInterval)
    })
    //returns promise
    return myPromise
}

fn().then(
    function(result) {console.log(result)},
    function(error) {console.log(error)}
)
