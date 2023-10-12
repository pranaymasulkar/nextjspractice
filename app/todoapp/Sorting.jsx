"use client";
import React, { useState } from "react";

const Sorting = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
  ]);

  const sortAscending = () => {
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setItems(sortedItems);
  };

  // Sort items in descending order based on the "name" property
  const sortDescending = () => {
    const sortedItems = [...items].sort((a, b) => b.name.localeCompare(a.name));
    setItems(sortedItems);
  };
  return (
    <div>
      <h1>Sortable Items</h1>
      <button onClick={sortAscending}>Sort Ascending</button>
      <button onClick={sortDescending}>Sort Descending</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sorting;
