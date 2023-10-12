"use client";
import React, { useState } from "react";

const Addtodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMaintask] = useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescript = (e) => {
    setDesc(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(title, desc);
    setMaintask(...maintask, { title, desc });
    setTitle("");
    setDesc("");
  };
  const arr = ["rahul", "santosh", "pranay", "rakesh", "akash"];
  const sharr = arr.sort().join(" ");
  const str = "pranay";
  const strnew = str.split("").reverse().join("");

  return (
    <div>
      {strnew}
      <br />
      {sharr}
      <br />
      <form action="" onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="enter title"
          value={title}
          onChange={handleTitle}
        />
        <br />
        <input
          type="text"
          placeholder="enter descr"
          value={desc}
          onChange={handleDescript}
        />
        <br />
        <button type="submit">Add Todo</button>
      </form>
      <br />
      <hr />
      <div>
        <ul>
          {maintask &&
            maintask.map((item, index) => {
              return (
                <li key={index}>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Addtodo;
