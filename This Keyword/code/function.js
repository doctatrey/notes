// function (not part of an object) -> "this" references global (window, global)

// Function
function playVideo() {
    console.log(this);
}

playVideo() //Logs the global object
