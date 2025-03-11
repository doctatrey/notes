// When you use this on a constructor function (calling the function with the "new" operator), it will reference a new empty object

// Constructor Function
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('Video Title'); //Logs the video object -> {title: "Video Title"}

