var foo = $.getSync('//foo.com') // Assume each
var bar = $.getSync('//bar.com') // of these functions 
var qux = $.getSync('//qux.com') // are synchronous

console.log(foo)
console.log(bar)
console.log(qux)

/*STACK*/

/* 
$.getSync('//foo.com') //Must wait for this function to complete fetching data -> then can be popped off the stack
main()

$.getSync('//bar.com') //Must wait for this function to complete fetching data -> then can be popped off the stack
main()

var qux = $.getSync('//qux.com') //Must wait for this function to complete fetching data -> then can be popped off the stack
main()

Then all console.logs go through the stack
*/

