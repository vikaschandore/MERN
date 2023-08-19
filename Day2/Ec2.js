function sum(...numbers) {
  console.log(numbers, "loop");
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
