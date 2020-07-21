import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";

function App() {
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length < 10) {
      setNumber(e.target.value);
    }
  };
  return (
    <div className="App">
      <Display number={number} />
      <input type="number" onChange={handleChange} max="99999999" />
    </div>
  );
}

export default App;
