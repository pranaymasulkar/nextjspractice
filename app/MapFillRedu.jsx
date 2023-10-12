import React from "react";

const MapFillRedu = () => {
  const names = ["pranay", "rakesh", "rahul", "santosh"];

  const filName = names.filter((names) => names === "rahul");

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dbnum = arr.map((num) => num * 2 + " ");
  const fildata = arr.filter((num) => num < 2);
  const rednum = arr.reduce((first, number) => first + number, 0);
  return (
    <div>
      <h2>{filName.join(" ")}</h2>
      <h5>
        {dbnum} <br />
      </h5>
      <h2>{arr.join("  ")}</h2>
      <h3>{fildata}</h3>
      <h6>{rednum}</h6>
      <ul>
        {arr.map((item) => {
          return (
            <>
              <li>
                {item} <br />
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MapFillRedu;
