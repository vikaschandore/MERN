// Certainly! async/await is a modern way of
// handling asynchronous operations in JavaScript
// that makes asynchronous code look and feel more
// like synchronous code, without blocking the main thread.
//  It's built on top of Promises and provides a more readable
//  and structured approach to dealing with asynchronous tasks.

<br />;

// 1. async Function Declaration:
// You define an async function by using the
// async keyword before the function keyword.
//  This tells JavaScript that the function
//  will contain asynchronous operations and will return a Promise.

async function fetchData() {
  // Asynchronous operations
}

<br />;

// 2. await Keyword:
// Inside an async function, you can use the await
//  keyword before a Promise to pause the execution of
//   the function until the Promise resolves. This allows
//   you to write code that appears synchronous, even though it's asynchronous.

async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

// In this example, the fetch function returns a Promise
// that resolves with the response. The first await pauses the
// function until the Promise is resolved, allowing you to work with the response.
// The second await does the same for parsing the response body as JSON.

<br />;

// An async function always returns a Promise. If you return a
// value from the function, the Promise will resolve
// with that value. If you throw an exception, the Promise will reject.

async function fetchAndProcessData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

fetchAndProcessData()
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   async/await makes it easier to manage the flow of
//   asynchronous operations, especially when you have
//   multiple asynchronous tasks that need to be
//   executed in a certain order. It's a powerful
//   tool that enhances the readability and maintainability
//   of asynchronous code. However, keep in mind that async/await is
//   still based on Promises, so understanding how Promises work is
//   fundamental to using async/await effectively.
