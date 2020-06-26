import React, { useState } from "react";
import "./styles.css";
import Dropdown from "./Dropdown/Dropdown";

export default function App() {
  const items = [
    { id: "1", value: "val 1" },
    { id: "2", value: "val 2" },
    { id: "3", value: "val 3" }
  ];

  // Control initially selected option from parent
  const [optSelected, setOptSelected] = useState({});

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
            handleOnSelect={setOptSelected}
          />
        </div>
        <div>
          <h3>{`You selected: ${
            optSelected.value ? optSelected.value : "-"
          }`}</h3>
        </div>
        <div>
          <button className="btn btn-default" onClick={setOptSelected}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
