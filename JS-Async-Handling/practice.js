//EX. 1

// Makes an API call, returns a Promise
const fetchPromise = fetch("https://catfact.ninja/fact") 

fetchPromise
// Converts our response to JSON
.then((response) => response.json()) 
// Logs the fact from the data
.then((data) => console.log(data.fact)) 


//EX. 2

// The async keyword allows us to use await in out function
async function fetchFact() {
    try {  
        // Await allows us to make a fetch call synchronously, which is
        // necessary when the code in the function depends on this data
        const response = await fetch("https://catfact.ninja/fact")
        //Ensuring our response was successfully made w
        if (!response.ok) {
            console.log('HTTP Error. Status: ', response.status)
        }
        // Converting our data to JSON 
        const data = await response.json()
        // Logging the fact from the data / We can also return this
        console.log(data.fact)
    } catch (err) {
        // Catches any error
        console.log(`Could not get facts: ${err}`)
    }
}

// Calling the function
fetchFact()