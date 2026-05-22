function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Marcos", sayBye);


