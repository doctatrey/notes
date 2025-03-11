function fetchData() {
    // Return a promise object to handle the async operation
    return new Promise((resolve, reject) => {
        // Simulate API call with setTimeout
        setTimeout(() => {
            const data = { name: "user", id: 1}
            // On success call resolve with the data
            resolve(data);
            // If there was an error, we would call:
            // reject(new Error("failed to fetch"))
        }, 1000)
    })
}

// Using the promise-based function
fetchData()
    .then(data => {
        // This executes when the promise resolves successfully
        console.log("Data received:", data);
        // We can return another promise for chaining
        return processData(data)
    })
    .then(result => {
        // This receives the result from the previous promise
        console.log("Processing complete:", result)
    })
    .catch(error => {
        //This catches any errors that occurred in any of the previous promises
        console.error("Error:", error)
    })

