import React from "react";
import SevenSegment from "./SevenSegment";

export function Display(props) {
  const { number } = props;
  const numberArray = number ? number.split("") : [];
  let segmentMap = numberArray.map((val, i, arr) => {
    return val && val !== "." ? (
      <SevenSegment
        key={i}
        decimal={arr[i - 1] === "."}
        color={"black"}
        number={val}
      />
    ) : null;
  });
  return (
    <div
      style={{
        position: "relative",
        height: "140px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "8px",
        border: "24px solid black",
        backgroundColor: "darkkhaki",
      }}>
      {segmentMap}
    </div>
  );
}

export default Display;
