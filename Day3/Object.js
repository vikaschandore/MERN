// Different ways to create object //

// OBJECT LITERAL

const person0 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

//ES6//

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
}
const person = new Person("John", "Doe", 30);
person.greet();

// 2//

const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 30;

//3//

const personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};
const person3 = Object.create(personPrototype);

//4// Constructor Function:

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
const person4 = new Person("John", "Doe", 30);

<br />;

<br />;

/// Different Object Methods:

// Object.keys(obj) & Object.values(obj)://

const person7 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const keys = Object.keys(person7);
const values = Object.values(person7);

console.log(keys); // Outputs: ["firstName", "lastName", "age"]

console.log(values); // Outputs: ["John", "Doe", 30]

// Object.entries //

const entries = Object.entries(person);
console.log(entries);
// Outputs:
// [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]

/// How to Loop an object

const person11 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (const key in person11) {
  console.log(key, person11[key]);
}
// Outputs:
// firstName John
// lastName Doe
// age 30

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}

const entries34 = Object.entries(person);
entries34.forEach(([key, value]) => {
  console.log(key, value);
});

///
