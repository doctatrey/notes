/**
 * Challenge 2: Bank Transaction Simulator
 * 
 * Build a series of functions that simulate a bank transaction pipeline.
 * 
 * 1. Create a function "checkBalance" that takes an account object and returns a promise
 *    that resolves after a random delay (0.5-1.5 seconds) with:
 *    - If account.balance >= account.withdrawalAmount, return the account object
 *    - Otherwise reject with "Insufficient funds"
 * 
 * 2. Create a function "processWithdrawal" that takes an account object and returns a promise
 *    that resolves after a random delay (0.8-2 seconds) with the account object
 *    but with its balance reduced by the withdrawalAmount
 *    - 10% chance this function rejects with "Transaction network error"
 * 
 * 3. Create a function "notifyUser" that takes an account object and returns a promise
 *    that resolves after a 1 second delay with a message:
 *    "Transaction complete. New balance: [updated balance]"
 * 
 * 4. Setup a test account: { id: 'AC123', balance: 500, withdrawalAmount: 200 }
 * 
 * 5. Chain these promises to process a withdrawal and log the final notification
 *    or error message
 * 
 * 6. Create a second test that would fail due to insufficient funds
 */


let account1 = { id: 'GOOD', balance: 500, withdrawalAmount: 200 }
let account2 = { id: 'BAD', balance: 500, withdrawalAmount: 600 }

function checkBalance(obj) {
    let delay = (Math.random() * (1.5 - 0.5) + 0.5) * 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (obj.balance >= obj.withdrawalAmount) resolve(obj)
            else reject("Insufficient Funds")
        }, delay)
    })
}

function processWithdrawal(obj) {
    let delay = (Math.random() * (2 - 0.8) + 0.8) * 1000;

    return new Promise((resolve, reject) => {
        if (Math.random() < 0.1) {
            reject("Transaction Network Error");
            return;
        }
        setTimeout(() => {
            if (obj.balance >= obj.withdrawalAmount) {
                let newObj = JSON.parse(JSON.stringify(obj))
                newObj.balance = obj.balance - obj.withdrawalAmount
                newObj.withdrawalAmount = 0;
                resolve(newObj);
            } else reject("Insufficient Funds")
        }, delay)
    })
}

function notifyUser(obj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Transaction Complete. New Balance: ${obj.balance}`)
        }, 1000)
    })
}


//First Transaction (No Errors)
checkBalance(account1)
    .then((value) => {
        console.log(value)
        return processWithdrawal(value)
    })
    .then((value) => {
        return notifyUser(value)
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })

//Second Transaction (Error)
// checkBalance(account2)
//     .then((value) => {
//         console.log(value)
//         return processWithdrawal(value)
//     })
//     .then((value) => {
//         return notifyUser(value)
//     })
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((error) => {
//         console.log('error', error)
//     })