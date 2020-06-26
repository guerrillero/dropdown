import React, { useState } from "react";
import "./styles.css";
import Dropdown from "./Dropdown/Dropdown";

export default function App() {
  const items = [
    { id: "1", value: "val 1" },
    { id: "2", value: "val 2" },
    { id: "3", value: "val 3" }
  ];
  const [optSelected, setOptSelected] = useState({});

  const handleOnSelect = event => {
    setOptSelected(event);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="flex">
        <div>
          <Dropdown
            options={items}
            placeholder="Select options"
            selected={optSelected}
            handleOnSelect={handleOnSelect}
          />
        </div>
        <div>
          <h3>{`You selected: ${
            optSelected.value ? optSelected.value : "-"
          }`}</h3>
        </div>
      </div>
    </div>
  );
}
