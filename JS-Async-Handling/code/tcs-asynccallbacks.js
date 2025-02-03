console.log("Hi")

setTimeout(function cb() {
    console.log("There")
}, 5000)

console.log("Trey")

/*STACK*/

/*
console.log("Hi") //Runs as normal -> leaves stack
main() //main program

setTimeout(cb, 5000) //Magically disappears -> goes to webapis (runs after 5 seconds) -> pushed to the task queue (in the event loop) -> back to the stack after main() finishes
main() //main program

console.log("Trey") //Runs as normal -> leaves stack
main() //main program -> leaves stack

console.log("There") // Pushes the callback from the task queue
*/
