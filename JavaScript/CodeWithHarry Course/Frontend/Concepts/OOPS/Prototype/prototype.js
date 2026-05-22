const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = {
  bark() {
    console.log("Woof!");
  }
};

// Set animal as prototype of dog
Object.setPrototypeOf(dog, animal);

console.log(dog.eats); // true
dog.walk(); // Animal walks
dog.bark(); // Woof!

let cat={
    jumps:true,
}

cat.__proto__=animal;
console.log(cat.eats);
console.log(cat.jumps);