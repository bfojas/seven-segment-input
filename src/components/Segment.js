import React from "react";

export function Segment(props) {
  const { horizontal, position, color } = props;
  const containerStyle = {
    position: "absolute",
    marginLeft: "10px",
    width: "10px",
    height: "30px",
    ...position,
  };

  if (horizontal) {
    containerStyle.transform = "rotate(90deg)";
  }
  return (
    <div style={containerStyle}>
      <div
        style={{
          width: "0px",
          height: "5px",
          borderBottom: `${color || "red"} 5px solid`,
          borderLeft: "rgba(0,0,0,0) 5px solid",
          borderRight: "rgba(0,0,0,0) 5px solid",
        }}
      />
      <div
        style={{
          width: "10px",
          backgroundColor: `${color || "red"}`,
          height: "30px",
        }}
      />
      <div
        style={{
          width: "0px",
          height: "5px",
          borderTop: `${color || "red"} 5px solid`,
          borderLeft: "rgba(0,0,0,0) 5px solid",
          borderRight: "rgba(0,0,0,0) 5px solid",
        }}
      />
    </div>
  );
}

export default Segment;
