function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name);  // Call Animal constructor
  this.breed = breed;
}

// Set Dog prototype to inherit from Animal prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};

const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.speak(); // Output: Buddy barks.
