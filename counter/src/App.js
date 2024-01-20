import "./App.css";
import React, { useState } from "react";

function App() {
  let [number, setNumber] = useState(0);

  const increaseBtnHander = () => {
    setNumber(number + 1);
  };
  const reductionBtnHander = () => {
    setNumber(number - 1);
  };

  return (
    <div
      style={{
        background: "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div>
        <div>{number}</div>
        <button onClick={increaseBtnHander}>+ 1</button>
        <button onClick={reductionBtnHander}>- 1</button>
      </div>
    </div>
  );
}

export default App;
