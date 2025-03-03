// You can examine the prototype chain with: 
// ( Using Method 3 (ES6 Classes) )
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
      super(name); // Call parent constructor
      this.breed = breed;
    }
    
    getBreed() {
      return this.breed;
    }
}
  
const myDog = new Dog("Rex", "German Shepherd");
console.log(myDog.getName()); // "Rex"


Object.getPrototypeOf(myDog) === Dog.prototype; // true
Object.getPrototypeOf(Dog.prototype) === Animal.prototype //true
myDog instanceof Dog; //true
myDog instanceof Animal; //true