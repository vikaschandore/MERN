import React from "react";

export const ThirdComponent = (props) => {
  return (
    <div>
      <h1>Third Component</h1>
      {props.data.map((el) => {
        return <h3>{el}</h3>;
      })}
    </div>
  );
};
