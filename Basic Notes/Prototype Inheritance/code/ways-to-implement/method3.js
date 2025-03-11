// 3. Using eS6 Classes
// The modern syntactic sugar over prototype inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name) //Call parent constructor
        this.breed = breed;
    }

    getBreed() {
        return this.breed
    }
}

const myDog = newDog("Rex", "German Shepherd");
console.log(myDog.getName()) // "Rex"
