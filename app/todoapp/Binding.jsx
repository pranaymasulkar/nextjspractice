import React from "react";

const Binding = () => {
  const handlelick = () => {
    console.log("button clicked");
  };

  const HandleCLickBind = handlelick.bind(this);

  return (
    <div>
      <button onClick={HandleCLickBind()}>CLick me</button>
    </div>
  );
};

export default Binding;
