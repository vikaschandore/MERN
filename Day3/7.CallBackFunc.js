// A callback function is a function that is passed as an
// argument to another function and is intended to be executed later,
// usually after the completion of an asynchronous operation or some other
// event. Callbacks are a core concept in JavaScript, especially when dealing
// with asynchronous programming.

<br />;

function fetchData(callback) {
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    callback(data); // Execute the callback function with the fetched data
  }, 1000);
}

// You can use this function and pass a callback to process the fetched data:

function processData(data) {
  console.log("Processed data:", data);
}

fetchData(processData); // Pass processData as a callback

<br />;

<br />;

<br />;

<br />;

<br />;

<br />;

<br />;

<br />;

<br />;

<br />;
<br />;

<br />;

<br />;

<br />;

<br />;

<br />;

<br />;

<br />;

<br />;

// callback Hell

// Callback Hell is essentially nested callbacks stacked below one
// another forming a pyramid structure. Every callback depends/waits
// for the previous callback, thereby making a pyramid structure that affects
// the readability and maintainability of the code.

function print(i) {
  window.alert("This is call number " + i);
}

function fun1(callback) {
  setTimeout(() => {
    let i = 1;
    callback(i);
    i++;
    setTimeout(() => {
      callback(i);
      i++;
      setTimeout(() => {
        callback(i);
        i++;
        setTimeout(() => {
          callback(i);
          i++;
          setTimeout(() => {
            callback(i);
            i++;
            // .... and so on
          }, 800);
        }, 700);
      }, 500);
    }, 300);
  }, 100);
}

// Calling fun1 with print function as parameter
fun1(print);
