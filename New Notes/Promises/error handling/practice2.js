/**
 * Challenge 2: Fetching Data with a Retry
 * 
 * Create a function that simulates fetching data from an API.
 * If the request fails, retry once before giving up.
 * 
 * Steps to Implement:
 * 1. Create a function "fetchData()" that:
 *    - Has a 50% chance of failing with the error `"Fetch failed!"`.
 *    - Otherwise, resolves with `{ data: "Here is your data!" }`.
 * 
 * 2. Create a function "fetchWithRetry()" that:
 *    - Calls fetchData().
 *    - If the first attempt fails, retry once.
 *    - If both attempts fail, return `"Failed after retrying."`.
 * 
 * Expected Output Examples:
 * - Success on the first try:  
 *   Successfully fetched: { data: "Here is your data!" }
 * 
 * - Fail first, succeed on retry: 
 *   First attempt failed: Fetch failed!
 *   Successfully fetched on retry: { data: "Here is your data!" }
 * 
 * - Both attempts fail:
 *   First attempt failed: Fetch failed!
 *   Retry attempt failed: Fetch failed!
 *   Failed after retrying.
 */

function fetchData() {
    return new Promise((resolve, reject) => {
        random = Math.random()
        if (random > 0.5) {
            resolve(`{ data: "Here is your data!" }`)
        } else {
            reject(new Error("Fetch Failed!"))
        }
    })
}

function fetchWithRetry() {
    fetchData()
    .then((data) => {
        console.log("Successfully fetched:", data)
    })
    .catch((error) => {
        console.log("First attempt failed:", error.message)
        return fetchData()
                .then((data) => {
                    console.log("Successfully fetched on retry:", data)
            })
                .catch((error) => {
                    console.log("Retry attempt failed:", error.message)
                    console.log("Failed after retrying")
            })
    })
}


fetchWithRetry()