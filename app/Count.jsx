"use client";
import React, { useState } from "react";

const Count = () => {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");

  const handlefName = (e) => {
    setName(e.target.value);
  };
  const handleLname = (e) => {
    setLname(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(name);
    setLname(lname);
    console.log(name, lname);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handlefName} value={name} /> <br />
        Entered Name : {name}
        <br />
        <input type="text" onChange={handleLname} lname={lname} />
        <br />
        Enterd Last Name: {lname}
        <br />
        <button type="submit"> Submit</button>
      </form>

      <ul>{}</ul>
    </div>
  );
};

export default Count;
