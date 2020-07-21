import React from "react";
import SevenSegment from "./SevenSegment";

export function Display(props) {
  const { number } = props;
  const numberArray = number ? number.split("") : [];
  let segmentMap = numberArray.map((val, i) => {
    return val ? <SevenSegment key={i} number={val} /> : null;
  });
  return (
    <div
      style={{
        position: "relative",
        height: "200px",
        display: "flex",
        margin: "8px",
      }}>
      {segmentMap}
    </div>
  );
}

export default Display;
