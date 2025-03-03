//Creating a simple object
const animal = {
    eat: function() {
        return "nom nom nom"
    }
};

//Creating another object with animal as its prototype
const dog = Object.create(animal);
dog.bark = function() {
    return "Woof!";
}

console.log(dog.eat()); // "nom nom nom" - inherited from animal
console.log(dog.bark()); // "Woof!" - defined by dog
