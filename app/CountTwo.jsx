import React from "react";

const CountTwo = (chacha) => {
  const { ctname, ctage } = chacha;
  return (
    <div>
      <h1>
        My name is {ctname} and i am {ctage} year old.
      </h1>
    </div>
  );
};

export default CountTwo;
