// A closure is a concept in programming that occurs when a function
// "closes over" or captures the variables from its surrounding lexical scope.
// In simpler terms, a closure allows a function to remember the variables from
// its containing function even after that containing function has finished executing.

// Closures are commonly encountered in languages that support
// nested functions, such as JavaScript. When a function is defined within
// another function, the inner function has access to its own local variables
// as well as the variables of the outer (enclosing) function. These variables are
// retained in memory even after the outer function has completed execution, as
// long as the inner function still references them.

function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  return innerFunction;
}

const closureFunction = outerFunction(); // closureFunction now holds a reference to innerFunction

closureFunction(); // This will log: "I am from the outer function"

<br />;

// In this example, innerFunction is defined within outerFunction. Even
// though outerFunction completes execution and its local variable outerVariable would
// normally be out of scope, the closure maintains access to outerVariable
// when closureFunction is executed.

// Closures are powerful because they enable creating functions with
// persistent private data and state. They are commonly used for scenarios
// like creating private variables in JavaScript, implementing data encapsulation,
// and managing asynchronous operations.

// It's important to understand closures when dealing with languages
// that support them, as they can have implications for memory usage and
// unexpected behavior if not managed properly.
