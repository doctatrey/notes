/**
 * Challenge 1: Color Mixer
 * 
 * In this challenge, you'll create a series of functions that process colors
 * through a promise chain.
 * 
 * 1. Create a function called "getInitialColor" that returns a promise
 *    which resolves after 1 second with a color: "red"
 * 
 * 2. Create a function "mixWithBlue" that takes a color and returns a promise
 *    which resolves after 0.8 seconds with:
 *    - If the color is "red", return "purple"
 *    - If the color is "yellow", return "green"
 *    - Otherwise reject with "Cannot mix [color] with blue"
 * 
 * 3. Create a function "brighten" that takes a color and returns a promise
 *    which resolves after 1.2 seconds with "light [color]"
 * 
 * 4. Chain these functions together to:
 *    - Get the initial color
 *    - Mix it with blue
 *    - Brighten the result
 *    - Log the final result
 *    - Catch and log any errors
 */

function getInitialColor() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('red')
        }, 1000)
    })
}

function mixWithBlue(value) {
    return new Promise((resolve, reject) => {
        if (value == 'red')  resolve("purple")
        else if(value == 'yellow')  resolve("green")
        else reject(`Cannot mix ${value} with blue`)
    })
}

function brighten(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`light ${value}`)
        }, 1200)
    })
}

getInitialColor()
    .then((value) => {
        console.log(value);
        return mixWithBlue(value);
    })
    .then((value) => {
        console.log(value);
        return brighten(value);
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log('error', error)
    })
