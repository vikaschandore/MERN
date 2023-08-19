// A higher-order function is a concept in programming where a function
// takes one or more functions as arguments, returns a function as a result,
// or both. Essentially, it treats functions as first-class citizens, just like
// any other data type. Higher-order functions enable a more modular and functional
// programming style, allowing you to abstract and compose functionality in a
// flexible manner.

// Here are a few common scenarios where higher-order functions are used:

<br />;

// Function as an Argument:

// A higher-order function can accept other functions as arguments. This allows
// you to customize the behavior of the higher-order function.

function doTwice(sayHello2) {
  sayHello2();
  sayHello2();
}

function sayHello() {
  console.log("Hello!");
}

doTwice(sayHello); // Calls sayHello function twice

<br />;

// Function as a Return Value:

// A higher-order function can also return a function. This
// is often used to create specialized functions
// with varying behavior.

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
