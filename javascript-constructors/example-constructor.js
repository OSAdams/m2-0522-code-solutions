function ExampleConstructor() {}
console.log('value of the prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof the prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);

const exampleConstructorVariable = new ExampleConstructor();
console.log('exampleConstructorVariable instanceof ExampleConstructor:', exampleConstructorVariable instanceof ExampleConstructor);
