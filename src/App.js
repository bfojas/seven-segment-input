import React, { useState, useCallback } from "react";
import "./App.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
  const [number, setNumber] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [procedure, setProcedure] = useState(null);
  const [memory, setMemory] = useState("");

  const calculations = {
    "+": (memory, number) => {
      return Number(memory) + Number(number);
    },
    "-": (memory, number) => {
      return Number(memory) - Number(number);
    },
    "*": (memory, number) => {
      return Number(memory) * Number(number);
    },
    "/": (memory, number) => {
      return Number(memory) / Number(number);
    },
  };

  const displayLimit = (number) => {
    return number.length >= 11
      ? number.split(".")[0].length >= 11
        ? "E"
        : number.substring(0, 11)
      : number;
  };

  const handleChange = useCallback(
    (e) => {
      const { key } = e;
      const setNextInput = (nextProcedure) => {
        if (procedure && memory) {
          setMemory(calculations[procedure](memory, number).toString());
          setNumber("");
          setProcedure(nextProcedure);
        } else {
          setMemory(number || displayValue);
          setNumber("");
          setProcedure(nextProcedure);
        }
      };
      const total = () => {
        if (procedure && memory) {
          setDisplayValue(calculations[procedure](memory, number).toString());
          setNumber("");
          setMemory("");
          setProcedure(null);
        }
      };

      const clear = () => {
        setDisplayValue("");
        setProcedure(null);
        setNumber("");
        setMemory("");
      };
      if (number.length < 10) {
        if (key === "0" || Boolean(Number(key))) {
          setNumber(number + key);
          setDisplayValue("");
        } else if (key === ".") {
          if (!number.includes(".")) {
            setNumber(number + key);
            setDisplayValue("");
          }
        }
      }
      if (key === "Backspace") {
        setNumber(number.substring(0, number.length - 1));
      } else if (["+", "-", "*", "/"].includes(key)) {
        setNextInput(key, number);
      } else if (["Enter", "="].includes(key)) {
        total();
      } else if (["Escape"].includes(key)) {
        clear();
      }
    },
    [displayValue, memory, number, procedure]
  );

  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Display number={displayLimit(number || memory || displayValue)} />
      <Keypad handleChange={handleChange} />
    </div>
  );
}

export default App;
