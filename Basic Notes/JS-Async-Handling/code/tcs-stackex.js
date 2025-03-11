function foo() {
    throw new Error('Oops!')
}

function bar() {
    foo()
}

function baz() {
    bar();
}

baz();

/*
CONSOLE WHEN RAN:  
Error: Oops!
    at foo (/Users/treymay/Documents/notes/JS-Async-Handling/code/tcs-practice2.js:2:11) // Ran by bar
    at bar (/Users/treymay/Documents/notes/JS-Async-Handling/code/tcs-practice2.js:6:5)  //Ran by baz
    at baz (/Users/treymay/Documents/notes/JS-Async-Handling/code/tcs-practice2.js:10:5) //Ran by main()
    at Object.<anonymous> (/Users/treymay/Documents/notes/JS-Async-Handling/code/tcs-practice2.js:13:1) // main()
*/