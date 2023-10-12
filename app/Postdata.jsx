"use client";
import React, { useEffect, useState } from "react";

const Postdata = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const row = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await row.data;
    console.log(row);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        <div key={index}>{item.title}</div>;
      })}
    </div>
  );
};

export default Postdata;
