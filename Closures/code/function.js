function outerFunction(outerVariable) {
    const outer2 = 'hi'

    //The innerFunction "saves" the outerVariable, making it accessible throughout the function
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable)
        console.log('Inner Variable: ' + innerVariable)
        //We are able to access outer2 because it is outside of the function
        console.log(outer2)
    }
}

const newFunction = outerFunction('outside')
newFunction('inside')