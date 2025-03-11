function multiply(a,b) {
    return a*b;
}

function square(n) {
    return multiply(n, n)
}

function printSquare(n) {
    var squared = square(n)
    console.log(squared)
}

printSquare(4)

/* STACK */

/*
multiply(n, n) // called by square -> taken off once we return a*b
square(n) // called by printSquare -> taken off once we return multiply(n,n)
printSquare(4) // called by main
main()

console.log(squared) // added to stack after the first line of printSquare was executed -> removed from stack once completed
printSquare(4) // removed from stack implicitly once all code has been ran
main()

main() // removed once all code has been ran

done!
*/

