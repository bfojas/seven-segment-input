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
];

const segmentProperties = [
  { horizontal: true, position: { top: "0px", left: "35px" } },
  { position: { top: "15px", left: "50px" } },
  { position: { top: "65px", left: "50px" } },
  { horizontal: true, position: { top: "100px", left: "35px" } },
  { position: { top: "65px", left: "0px" } },
  { position: { top: "15px", left: "0px" } },
  { horizontal: true, position: { top: "50px", left: "35px" } },
];
export function SevenSegment(props) {
  const { color, number } = props;

  const segmentArray = segmentMatrix[number || 6];

  const segmentMap = segmentArray.map((val, i) => {
    return val ? (
      <Segment key={i} color={color} {...segmentProperties[i]} />
    ) : null;
  });

  return (
    <div
      style={{
        position: "relative",
        margin: "8px",
        width: "60px",
        height: "120px",
      }}>
      {segmentMap}
    </div>
  );
}

export default SevenSegment;
