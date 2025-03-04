const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag) //This references the global object, you must pass in a second parameter for ForEach to reference the object
        }, this)
    }
}

video.showTags(); //Consoles each tag
