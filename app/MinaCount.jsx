import React from "react";
import Count from "./Count";
import CountOne from "./CountOne";
import CountTwo from "./CountTwo";
import MapFillRedu from "./MapFillRedu";

const MinaCount = () => {
  return (
    <div>
      <MapFillRedu />
      <Count name="pranay" age="29" />
      <CountOne C1name="Vicky" C1age="Twenty Nine" />
      <CountTwo ctname="Pranay Masulkar" ctage="28" />
    </div>
  );
};

export default MinaCount;
