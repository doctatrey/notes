/**
 * Challenge 3: Recipe Ingredient Processor
 * 
 * Create an advanced promise-based system that processes recipe ingredients
 * with proper error handling and conditional logic.
 * 
 * 1. Create a function "fetchIngredients" that returns a promise
 *    resolving after 1-2 seconds with an array of ingredients:
 *    [
 *      { name: "flour", quantity: 2, unit: "cups" },
 *      { name: "sugar", quantity: 1, unit: "cup" },
 *      { name: "eggs", quantity: 3, unit: "whole" }
 *    ]
 * 
 * 2. Create a function "checkAvailability" that takes the ingredients array
 *    and returns a promise that:
 *    - Checks each ingredient after a 0.5 second delay per ingredient
 *    - For "sugar" there's a 30% chance it's unavailable (reject with message)
 *    - For "eggs" there's a 20% chance there are fewer than needed
 *      (modify quantity to a random number between 1 and the required amount)
 *    - Returns the potentially modified ingredients array
 * 
 * 3. Create a function "adjustRecipe" that takes potentially modified ingredients
 *    and returns a promise that resolves after 1.5 seconds with:
 *    - If all quantities match or exceed the original, return "Recipe ready: [ingredients]"
 *    - If any quantity is lower than needed, return "Adjusted recipe: [ingredients]"
 *      with the quantities halved (to adjust the recipe for fewer ingredients)
 * 
 * 4. Create a function "prepareInstructions" that takes the recipe message and
 *    returns a promise that resolves after 1 second with:
 *    - If it's the original recipe: "Follow standard instructions for [recipe]"
 *    - If it's adjusted: "Follow modified instructions for half-sized [recipe]"
 * 
 * 5. Chain these together with proper error handling at each step
 *    - If an ingredient is unavailable, the error should say which one
 *    - Each step should log its progress
 *    - The final result should be a set of instructions for the recipe
 */


let originalRecipe = [
    { name: 'flour', quantity: 2, unit: 'cups' },
    { name: 'sugar', quantity: 1, unit: 'cup' },
    { name: 'eggs', quantity: 3, unit: 'whole' }
  ]

function fetchIngredients() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Ingredients Fetched")
           resolve([
                  { name: "flour", quantity: 2, unit: "cups" },
                  { name: "sugar", quantity: 1, unit: "cup" },
                  { name: "eggs", quantity: 3, unit: "whole" }
                ])
        }, 2000)
    })
}

function checkAvailability(arr) {
    return new Promise((resolve, reject) => {
        let newArr = JSON.parse(JSON.stringify(arr))
        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
                if (arr[i].name == 'sugar') {
                    if (Math.random() < 0.3) {
                        reject("Sugar Unavailable")
                        newArr[i].quantity = 0;
                    } else console.log("Sugar Available")

                } else if (arr[i].name == 'eggs') {
                    if (Math.random() < 0.2) {
                        let off = Math.floor(Math.random() * (arr[i].quantity - 1 + 1) ) + 1;
                        console.log(`${off} Eggs Missing`)
                        newArr[i].quantity = arr[i].quantity - off;
                    } else console.log("Eggs Available")
                }
                if (i == arr.length - 1) resolve(newArr)
            }, 500 * i)
        }
    })
}

function adjustRecipe(recipe) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let same = true;
            for (let i = 0; i < recipe.length; i++) {
                if (parseInt(recipe[i].quantity) != parseInt(originalRecipe[i].quantity)) {
                    same = false;
                }
            }
            if (same == false) {
                for (let i = 0; i < recipe.length; i++) {
                    recipe[i].quantity = originalRecipe[i].quantity / 2;
                }
                resolve('Adjusted Recipe: ' + JSON.stringify(recipe))
            } else resolve('Recipe Ready: ' + JSON.stringify(originalRecipe))
        }, 1500)
    })
}

function prepareInstructions(recipe) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (recipe.includes('Adjusted')) resolve('Follow modified instructions for half-sized: ' + recipe)
            else resolve('Follow standard instructions for: ' + recipe)
        }, 1000)
    })
}

fetchIngredients().then((value) => {
    return checkAvailability(value);
}).then((value) => {
    console.log("New Ingredients:", value)
    return adjustRecipe(value)
}).then((value) => {
    console.log(value)
    return prepareInstructions(value)
}).then((value) => {
    console.log(value)
}).catch((err) => {
    console.log("ERROR", err)
})
