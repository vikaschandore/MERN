// An array in JavaScript is a data structure used to store a collection of values, which can be of any data type,
//  such as numbers, strings, objects, or even other arrays.
//   Arrays are ordered, meaning each element is assigned a
//    numerical index, starting from 0 for the first element, 1 for the second, and so on.

// In JavaScript, you can create an array using square
// brackets [] and placing the elements inside, separated
//  by commas. Here's an example of how to create an array:

const fruits = ["apple", "banana", "orange", "grape"];

const numbers = [1, 2, 3, 4, 5];

// push: Adds elements to the end of an array.
// pop: Removes and returns the last element from an array.
// shift: Removes and returns the first element from an array, shifting all other elements down.
// unshift: Adds elements to the beginning of an array, shifting existing elements up.
// length: Returns the number of elements in the array.
// splice: Adds or removes elements from a specified index in the array.
// concat: Combines multiple arrays into a single array.
// slice: Creates a new array containing a portion of the original array.

numbers.push(6); // [1, 2, 3, 4, 5, 6]
numbers.pop(); // [1, 2, 3, 4, 5]
numbers.shift(); // [2, 3, 4, 5]
numbers.unshift(0); // [0, 2, 3, 4, 5]
const sliced = numbers.slice(1, 3); // [2, 3]

// map Method: This method creates a new array by
// applying a provided function to each element of the
//  original array.

const numbers3 = [1, 2, 3, 4, 5];

const doubled = numbers3.map((el) => console.log(el));
console.log(doubled); // Output: [2, 4, 6, 8, 10]

//// Filter Method

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4, 6, 8, 10]

/// Sort

const fruits2 = ["banana", "apple", "orange", "grape"];

const ex2 = [2, 4, 1, 0, 22];

const sortedFruits = fruits2.sort((a,b)=>);
console.log(sortedFruits, "sortig");
console.log(sortedFruits); // Output: ["apple", "banana", "grape", "orange"]

/// reverse

const letters = ["a", "b", "c", "d"];

const reversedLetters = letters.reverse();
console.log(reversedLetters); // Output: ["d", "c", "b", "a"]
