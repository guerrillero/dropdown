import React from "react";
import "./dropdown.css";

function Dropdown({ ...props }) {
  return (
    <>
      <div className="dropdown">
        <button className="dropdown-btn">Dropdown</button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#l1">
            Link 1
          </a>
          <a className="dropdown-item" href="#l2">
            Link 1
          </a>
          <a className="dropdown-item" href="#l3">
            Link 1
          </a>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
