const myName = "Trey"

// This function is technically closure because it is accessing a variable outside of it's "scope"
function printName() {
    console.log(myName)
}

printName()