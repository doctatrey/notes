// 2. Using Constructor Functions
// The traditional way before ES6 classes

function Animal(name) {
    this.name;
}

Animal.prototype.getName = function() {
    return this.name;
};

function Dog(name, breed) {
    Animal.call(this, name); //Call parent constructor
    this.breed = breed;
}

//Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Fix constructor reference

//Add methods to Dog prototype
Dog.prototype.getBreed = function() {
    return this.breed;
}

const myDog = new Dog("Rex", "German Shepherd");
console.log(myDog.getName());
console.log(myDog.getBreed());
