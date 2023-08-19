// In React, both state and props are concepts used to manage
// and pass data within components. They play different roles in
// managing a component's behavior and rendering. Let's dive into each
// concept in detail with examples:

<br />;

State; ///

// State in React is an internal data storage mechanism for components.
// It allows components to hold and manage data that can change over time.
// State is specific to the component it belongs to and can only be modified
//  using the useState hook in functional components. When the state
//  changes, React re-renders the component to reflect the updated data.

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;

<br />;

<br />;

<br />;

Props;

// Props (short for properties) are a way to pass data from a parent
// component to a child component. They allow components to be customized
// and configured based on external data. Props are read-only, meaning
// that a child component cannot modify the props it receives; they
// are immutable.


import React from 'react';

function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

export default App;




////


// State is used for managing internal component data that can change 
// over time. It's created and managed using the useState hook in 
// functional components.

// Props are used to pass data from parent to child components. 
// They allow components to be customized and configured based on external 
// data, and they are immutable.

