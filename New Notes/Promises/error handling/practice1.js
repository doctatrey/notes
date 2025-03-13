/**
 * Challenge 1: Error Recovery
 * 
 * Create a function that simulates fetching user data from an unreliable API
 * and implement proper error handling with recovery options.
 * 
 * 1. Create a function "fetchUserData" that returns a promise that:
 *    - Has a 40% chance of failing with error "Network error"
 *    - Has a 20% chance of failing with error "Not found"
 *    - Otherwise resolves with: { id: 123, name: "User", isActive: true }
 * 
 * 2. Create a function "fetchUserBackup" that returns a promise that:
 *    - Has only a 10% chance of failing with error "Backup service down"
 *    - Otherwise resolves with: { id: 123, name: "User", isActive: false }
 * 
 * 3. Implement a promise chain that:
 *    - Tries to fetch from the primary source
 *    - If that fails, tries the backup source
 *    - If both fail, resolves with a default user: { id: 0, name: "Guest", isActive: false }
 *    - Logs each attempt and whether it succeeded or failed
 *    - Finally logs the user data that was ultimately used
 */

function fetchUserData() {
    return new Promise((resolve, reject) => {
        let random = Math.random();
    if (random > 0.6) { // 40%
        reject(new Error("Network error"))
    } else if (random > 0.4) { //20%
        reject(new Error("Not found"))
    } else { // 40%
        resolve({ id: 123, name: "User", isActive: true })
    }
    })
}

function fetchUserBackup() {
    return new Promise((resolve, reject) => {
        random  = Math.random()
        if (random < 0.1) {
            reject(new Error("Backup service down"))
        } else {
            resolve({ id: 123, name: "User", isActive: false })
        }
    })
}

fetchUserData()
    .then((user) => {
        console.log("Fetched From Primary:",user)
        return user
    })
    .catch((error) => {
        console.log("Primary Fetch Failed:", error.message)
        return fetchUserBackup()
        .then((user) => {
            console.log("Fetched From Backup:", user)
            return user;
        })
        .catch((error) => {
            console.log("Backup Fetch Failed:", error.message)
            return { id: 0, name: "Guest", isActive: false }
        })
    })
    .then((user) => {
        console.log("Final User Data:", user)
    })