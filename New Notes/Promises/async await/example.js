function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if (location == 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only make requests to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra Information + ${response}`)
    })
}

// Using Promises
makeRequest('Google')
    .then((response) => {
        console.log('Response Received')
        return processRequest(response);
    })
    .then((processedResponse) => {
        console.log(processedResponse)
    })
    .catch((error) => {
        console.log(error)
    })

// Using Async / Await
async function doWork() {
    try {
        const response = await makeRequest('Google');
        console.log('Response Received')
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch (error) {
        console.log(error)
    }
}

doWork();