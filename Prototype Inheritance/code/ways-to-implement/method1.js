// 1. Using Object.create()
// The cleanest way to establish inheritance

const parent = {
    greet: function() {
        return "Hello"
    }
};

const child = Object.create(parent);
console.log(child.greet()) // "Hello"
