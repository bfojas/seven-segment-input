import React, { useEffect } from "react";
import Key from "./Key";

export function Display(props) {
  const { handleChange } = props;
  useEffect(() => {
    window.addEventListener("keydown", handleChange);
    return () => {
      window.removeEventListener("keydown", handleChange);
    };
  }, [handleChange]);

  let keys = [...Array(10).keys()];
  keys.push(keys.shift(), ".", "=");

  const keyMapper = (val) => {
    if (val || val === 0) {
      if (val.key) {
        return (
          <Key
            onClick={() => {
              handleChange({ key: val.key });
            }}>
            {val.label  || val.key}
          </Key>
        );
      } else {
      return (
        <Key
          onClick={() => {
            handleChange({ key: val });
          }}>
          {val}
        </Key>
      );
        }
    } else {
      return null;
    }
  };

  let numberMap = keys.map(keyMapper);

  return (
    <div
      style={{
        position: "relative",
        height: "calc(100% - 220px)",
        width: "calc(100vw - 16px)",
        padding: "8px",
        backgroundColor: "lightgrey",
        display: "grid",
        gridTemplateRows: "auto auto auto auto auto",
        gridTemplateColumns: "auto auto auto auto",
        gridGap: "2%",
      }}>
      <div
        style={{
          gridColumn: `1 / 4`,
          gridRow: `1 / 5`,
          display: "grid",
          gridTemplateRows: "auto",
          gridTemplateColumns: "auto auto auto",
          gridGap: "2%",
        }}>
        {numberMap}
      </div>
      <div
        style={{
          gridColumn: `4`,
          gridRow: `1 / 5`,
          display: "grid",
          gridTemplateRows: "auto",
          gridGap: "2%",
        }}>
        {[{label: 'C', key: 'Escape'}, "+", "-", "*", "/"].map(keyMapper)}
      </div>
    </div>
  );
}

export default Display;
