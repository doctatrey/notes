//Promise Syntax

let myPromise = new Promise(function(myResolve, myReject) {
    let x = "It worked!"
    // "Producing Code" (May take some time)

    myResolve(x) // when successful
    myReject("Error") // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) {console.log("Resolved. Value: " + value)},
    function(error) {console.log(error)}
)

