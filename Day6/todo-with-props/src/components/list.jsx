import React, { useState } from "react";
import { ThirdComponent } from "./thirdComponent";

export const ListComponent = (props) => {
  //// props is receiveing the values

  console.log(props, "I am props");
  // we are destructuring and taking the values from props
  const { data, page } = props;

  const handleChangeStatus = (item) => {
    data = [{}];
  };

  const handleDelete = (item) => {};

  return (
    <div>
      <h3
        style={{
          color: "red",
        }}
      >
        List Component{" "}
      </h3>
      {data.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <h2>{item.title}</h2>={" "}
            <h3>{item.status ? "Completted" : "Pending"}</h3>
            <div>
              <button onClick={() => handleChangeStatus(item)}>
                Change Status
              </button>
              <button onClick={() => handleDelete(item)}>Delete Todo</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
