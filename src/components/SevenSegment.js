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
export function SevenSegment(props) {
  const { color, number } = props;

  const segmentArray = segmentMatrix[number || 6];

  return (
    <div
      style={{
        position: "relative",
        margin: "8px",
        width: "60px",
        height: "120px",
      }}>
      {/* a */}
      {segmentArray[0] ? (
        <Segment
          color={color}
          horizontal
          position={{ top: "0px", left: "35px" }}
        />
      ) : null}
      {/* b */}
      {segmentArray[1] ? (
        <Segment color={color} position={{ top: "15px", left: "50px" }} />
      ) : null}
      {/* c */}
      {segmentArray[2] ? (
        <Segment color={color} position={{ top: "65px", left: "50px" }} />
      ) : null}
      {/* d */}
      {segmentArray[3] ? (
        <Segment
          color={color}
          horizontal
          position={{ top: "100px", left: "35px" }}
        />
      ) : null}
      {/* e */}
      {segmentArray[4] ? (
        <Segment color={color} position={{ top: "65px", left: "0px" }} />
      ) : null}
      {/* f */}
      {segmentArray[5] ? (
        <Segment color={color} position={{ top: "15px", left: "0px" }} />
      ) : null}
      {/* g */}
      {segmentArray[6] ? (
        <Segment
          color={color}
          horizontal
          position={{ top: "50px", left: "35px" }}
        />
      ) : null}
    </div>
  );
}

export default SevenSegment;
