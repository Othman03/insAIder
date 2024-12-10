import React, { useContext } from "react";
import "./output.css";
import uiContext from "../../context/UiContext";

const Output = () => {
  const { sideBar } = useContext(uiContext);
  return (
    <div className={`output ${sideBar ? "active" : ""}`}>
      <h2>Output</h2>
      <div className="results">
        <label>Final results</label>
        <p>Final results</p>
        <label>Event details</label>
        <p>event details</p>
      </div>
    </div>
  );
};

export default Output;
