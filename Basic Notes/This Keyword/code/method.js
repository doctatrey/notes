// method (function is a part of an object) -> "this" references object

// Method
const video = {
    title: 'a',
    play() { // Method in the video object
        console.log(this)
    }
};

video.play(); // Logs the object -> {title: "a", play: f} 

video.stop = function() { // Method in the video object
    console.log(this);
};

video.stop(); // Logs the object -> {title: "a", play: f, stop: f} 