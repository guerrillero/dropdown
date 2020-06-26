import React, { useState } from "react";
import "./dropdown.scss";

function Dropdown({ placeholder, options = [], selected, handleOnSelect }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <div className="dropdown">
        <button className="btn dropdown-btn" onClick={() => toggle()}>
          {selected.value || placeholder}
        </button>
        {open && (
          <ul className="dropdown-menu">
            {options.map(opt => {
              return (
                <li
                  key={opt.id}
                  className={`dropdown-item`}
                  onClick={() => {
                    handleOnSelect(opt);
                    toggle();
                  }}
                >
                  <span>{opt.value} </span>
                  <span className="dot">
                    {selected.id === opt.id ? "·" : ""}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default Dropdown;
