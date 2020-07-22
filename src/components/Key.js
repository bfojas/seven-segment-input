import React from "react";

export function Key(props) {
  const { dimension, color, onClick, children } = props;
  const containerStyle = {
    gridColumn: `auto / span ${dimension ? dimension[0] : 1}`,
    gridRow: `auto / span ${dimension ? dimension[1] : 1}`,
    backgroundColor: color || "black",
    borderRadius: "5px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: '36px'
  };

  return <div onClick={onClick} style={containerStyle}>{children}</div>;
}

export default Key;
