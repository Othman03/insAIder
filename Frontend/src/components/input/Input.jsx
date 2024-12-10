import React, { useContext, useState } from "react";
import "./Input.css";
import uiContext from "../../context/UiContext";

const Input = () => {
  const [study, setStudy] = useState("stock");
  const [horizon, setHorizon] = useState("select");
  const [risk, setRisk] = useState("select");
  const [ticker, setTicker] = useState("");
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const { sideBar } = useContext(uiContext);

  console.log(ticker);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleClick1 = (study) => {
    setStudy(study);
    setIsOpen1(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleClick2 = (horizon) => {
    setHorizon(horizon);
    setIsOpen2(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleClick3 = (risk) => {
    setRisk(risk);
    setIsOpen3(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown") &&
        !event.target.closest(".dropdown-button")
      ) {
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("", { study, ticker, horizon, risk });
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={`Input ${sideBar ? "active" : ""}`}>
      <form onSubmit={handleSubmit}>
        <h2>Input Field</h2>
        <label className="label0">Select study type</label>
        <div className="dropdown">
          <button
            type="button"
            className="dropdown-button"
            value={study}
            onClick={toggleDropdown1}
          >
            {study}
          </button>
          <div
            className="dropdown-content"
            style={
              isOpen1 ? { height: "100px", padding: "4px", zIndex: 2 } : {}
            }
          >
            <a onClick={() => handleClick1("Stock")} href="javascript:void(0)">
              Stock
            </a>
            <a onClick={() => handleClick1("Crypto")} href="javascript:void(0)">
              Crypto
            </a>
          </div>
        </div>

        <div className="form">
          <div className="label1">
            <label>Enter the {study} ticker</label>
            <input
              value={ticker}
              type="text"
              placeholder="e.g., AAPL"
              onChange={(e) => setTicker(e.target.value)}
            />
          </div>

          <div className="label2">
            <label>Preferred investment horizon</label>
            <div className="dropdown">
              <button
                type="button"
                className="dropdown-button"
                value={horizon}
                onClick={toggleDropdown2}
              >
                {horizon}
              </button>
              <div
                className="dropdown-content0"
                style={
                  isOpen2 ? { height: "150px", padding: "4px", zIndex: 1 } : {}
                }
              >
                <a
                  onClick={() => handleClick2("Short Term")}
                  href="javascript:void(0)"
                >
                  Short Term
                </a>
                <a
                  onClick={() => handleClick2("Mid Term")}
                  href="javascript:void(0)"
                >
                  Mid Term
                </a>
                <a
                  onClick={() => handleClick2("Long Term")}
                  href="javascript:void(0)"
                >
                  Long Term
                </a>
              </div>
            </div>
          </div>

          <div className="label3">
            <label>Risk tolerance</label>
            <div className="dropdown">
              <button
                type="button"
                className="dropdown-button"
                value={risk}
                onClick={toggleDropdown3}
              >
                {risk}
              </button>
              <div
                className="dropdown-content0"
                style={isOpen3 ? { height: "150px", padding: "4px" } : {}}
              >
                <a
                  onClick={() => handleClick3("Low")}
                  href="javascript:void(0)"
                >
                  Low
                </a>
                <a
                  onClick={() => handleClick3("Medium")}
                  href="javascript:void(0)"
                >
                  Medium
                </a>
                <a
                  onClick={() => handleClick3("High")}
                  href="javascript:void(0)"
                >
                  High
                </a>
              </div>
            </div>
          </div>
          <button type="submit" className="start-button">
            Start
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
