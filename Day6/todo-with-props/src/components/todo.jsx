import React, { useState } from "react";
import { ListComponent } from "./list";
import uuid from "react-uuid";

export const Todo = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const handleTodo = () => {
    setData([...data, { title: query, status: false, id: uuid() }]);
  };

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  console.log(data, "data consoling");
  return (
    <div>
      <h1
        style={{
          color: "white",
        }}
      >
        Todo Components Main
      </h1>

      <div
        style={{
          border: "2px solid red",
          padding: 20,
          backgroundColor: "black",
        }}
      >
        <input
          placeholder="write task"
          value={query}
          onChange={(event) => handleInput(event)}
        />

        <button onClick={handleTodo}>Add Todo</button>
      </div>

      <br />

      <ListComponent data={data} page={page} />
    </div>
  );
};
