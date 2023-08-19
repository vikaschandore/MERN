// Promises in JavaScript are a way to handle asynchronous
// operations in a more structured and manageable manner.
// A Promise represents a value that might be available now,
//  or in the future, or never. Promises are commonly used for
//   handling asynchronous operations like fetching data from a server,
//   reading files, or making database queries.

//ex//

<br />;

// Creating a Promise:
// A Promise is created using the Promise constructor.
//  The constructor takes a function with two parameters:
//  resolve and reject. Inside this function, you perform
//  the asynchronous operation and then call resolve if the
//   operation is successful, or reject if it fails.

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const isSuccess = true; // Simulating success for the example

  if (isSuccess) {
    resolve("Operation was successful");
  } else {
    reject("Operation failed");
  }
});

// Promises have two main methods for handling their eventual
// result or error: .then() and .catch(). The .then()
//  method is called when the Promise is resolved, and
//   the .catch() method is called when the Promise is rejected.

myPromise
  .then((successMessage) => {
    console.log("Success:", successMessage);
  })
  .catch((errorMessage) => {
    console.error("Error:", errorMessage);
  });

// uses//

//  Fetching Data,
//  Api call
//  error handling

/// fetch ///

<br />;

// XMLHttpRequest, xhr, fetch, axios, async await with fetch, Superagent etc..

// The fetch API returns a Promise that resolves to the
//  Response object representing the response to the request.
//   You can then use methods like .json(), .text(), or .blob()
//    on the Response object to extract the data.

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetch(apiUrl)
  .then((response) => {
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`Fetch Error: ${response.status} ${response.statusText}`);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then((data) => {
    // Data is now available and processed
    console.log(data);
  })
  .catch((error) => {
    // Handle errors here
    console.error("Fetch Error:", error);
  });

// 1. We start by calling fetch(apiUrl), which returns a Promise that
// resolves to a Response object representing the API response.

// 2. In the first .then() block, we check if the response status is OK
//  (status code 200). If it's not OK, we throw an error with details about the
//  response status and status text.

// 3. Inside the same .then() block, if the response is OK, we call .json()
// on the response object. This returns a Promise that resolves to the
// parsed JSON data.

// 4. In the second .then() block, the resolved JSON data is available and
// can be processed as needed.

// 5. In the .catch() block, we handle any errors that occur during the entire
// Promise chain. This could include network errors, parsing errors, or any other
//  unexpected issues.

// 6. Promises in the fetch API allow you to handle asynchronous operations in a
//  structured manner. You can use the .then() and .catch() methods to create a
//  chain of actions that occur sequentially, making your code more organized and
//   readable.
