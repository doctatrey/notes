async function getData() {
    try {
        // The 'await keyword pauses execution until the promise resolves
        const data = await fetchData()
        console.log("data received", data)

        // We can await multiple promises in sequence
        const result = await processData(data)
        console.log("Processing complete", result)

        //The return value os automatically wrapped in a promise
        return result;
    } catch (err) {
        console.error("Error:",err)
    }
}

getData().then(finalResult => {
    console.log("Final result:", finalResult)
})