import React from "react";
function CalculatorButtons(props) {
  return (
    <div className="calculator-buttons">
      <button className="button" onClick={props.addOne}>
        {props.countOne}
      </button>
      <span className="h1 math-sign">+</span>
      <button className="button" onClick={props.addTwo}>
        {props.countTwo}
      </button>
    </div>
  );
}

export default CalculatorButtons;
