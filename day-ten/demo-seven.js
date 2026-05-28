class Animal {
  constructor(){
    console.log("Animal");
  }
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  constructor(){
    super();
    console.log("Dog")
  }
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // inherited
d.bark();  // own method