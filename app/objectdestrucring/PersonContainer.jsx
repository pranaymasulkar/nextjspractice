import React from "react";
import Person from "../objectdestrucring/Person";
const PersonContainer = () => {
  const PersoneInfo = {
    name: "pranay",
    age: 30,
  };
  return (
    <div>
      <h1>This is the details about users.</h1>
      <Person {...PersoneInfo} />
    </div>
  );
};

export default PersonContainer;
