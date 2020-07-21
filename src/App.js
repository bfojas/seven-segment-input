import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Display from "./components/Display";

function App() {
  const [number, setNumber] = useState("");
  const handleChange = useCallback(
    (e) => {
      if (number.length < 10) {
        if (e.key === "0" || Boolean(Number(e.key))) {
          setNumber(number + e.key);
        }
      }
      if (e.code === "Backspace") {
        setNumber(number.substring(0, number.length - 1));
      }
    },
    [number]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleChange);
    return () => {
      window.removeEventListener("keydown", handleChange);
    };
  }, [handleChange]);

  return (
    <div className="App">
      <Display number={number} />
    </div>
  );
}

export default App;
