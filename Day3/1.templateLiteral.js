// Template literals, also known as template strings,
// are a feature in JavaScript that allow you to embed expressions and
//  variables within strings using a special syntax. Template literals
//  are enclosed by backticks (``) instead of single or double quotes.
//  This makes it easier to create complex strings with dynamic content.

const name1 = "John";
const age = 30;

// Using template literals

const greeting0 = "Hello, my name is ${name1} and I am ${age} years old.";

const greeting = `Hello, my name is ${} and I am ${age} years old.`;
console.log(greeting);
// Outputs: "Hello, my name is John and I am 30 years old."

<br />;

// When generating HTML content dynamically in JavaScript,
// template literals can be used to create cleaner and more readable code.
const user = {
  name: "Bob",
  age: 25,
};

const userHTML = `
  <div class="user">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
  </div>
  `;

<br />;

// Conditional Rendering:
// Template literals can be combined with
//  ternary operators or other conditionals to
//   conditionally include content in strings.

const isLoggedIn = true;
const welcomeMessage = `
${isLoggedIn ? "Welcome back!" : "Please log in."}
`;

<br />;

///Urls

const userID = 123;
const profileURL = `https://example.com/profile/${userID}`;
