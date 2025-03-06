function fetchData(callback) {
    // Simulate API call with setTimeout
    setTimeout(() => {
        const data = { name: "user", id: 1}
        // Call the callback with (error, data) pattern
        // First parameter is null because there's no error
        callback(null, data)
    }, 1000) // Wait for 1 second before resolving
}

//Using the fetchData function with a callback
fetchData((error, data) => {
    //Check if an error occurred during the operation
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data received:", data);
    }
});
