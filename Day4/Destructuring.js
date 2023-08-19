// Destructuring is a feature in programming languages, including JavaScript, that
// allows you to extract values from arrays, objects, and other data structures into
// distinct variables. It provides a concise and expressive way to unpack elements
// from data structures, making your code cleaner and more readable.

// In JavaScript, destructuring can be applied to arrays and objects, and
// it's commonly used for assignments and function parameter handling. Here's
// how destructuring works for arrays and objects:

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// In this example, the values from the numbers array are extracted and
// assigned to variables first, second, and rest using destructuring.

<br />;

// 2. objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName, age } = person;
console.log(firstName); // Output: John
console.log(age); // Output: 30

// In this example, the values of the firstName and age properties of the person object are extracted
// using object destructuring.
