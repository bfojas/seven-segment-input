import React from "react";
import Segment from "./Segment";

const segmentMatrix = [
  [1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [0, 1, 1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1],
];

const segmentSwitch = (number) => {
  switch (number) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      return segmentMatrix[Number(number)];
    case "-":
      return segmentMatrix[11];
    default:
      return segmentMatrix[10];
  }
};

const segmentProperties = [
  { horizontal: true, position: { top: "-10px", left: "25px" } },
  { position: { top: "5px", left: "40px" } },
  { position: { top: "55px", left: "40px" } },
  { horizontal: true, position: { top: "90px", left: "25px" } },
  { position: { top: "55px", left: "-10px" } },
  { position: { top: "5px", left: "-10px" } },
  { horizontal: true, position: { top: "40px", left: "25px" } },
];
export function SevenSegment(props) {
  const { color, number, decimal } = props;

  const segmentArray = segmentSwitch(number);

  const segmentMap = segmentArray.map((val, i) => {
    return val ? (
      <Segment
        key={i}
        color={color}
        {...segmentProperties[i]}
        zIndex={`${i}`}
      />
    ) : null;
  });

  return (
    <div
      style={{
        position: "relative",
        margin: "8px",
        width: "65px",
        height: "110px",
      }}>
      {segmentMap}
      {decimal ? (
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            bottom: "0",
            left: "-10px",
            backgroundColor: color,
          }}
        />
      ) : null}
    </div>
  );
}

export default SevenSegment;
