import React from "react";

const Count = (props) => {
  return (
    <div>
      <h1>
        My name is {props.name} and i am {props.age} year old.
      </h1>
    </div>
  );
};

export default Count;
