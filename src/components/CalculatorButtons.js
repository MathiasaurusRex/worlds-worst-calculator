import React from "react";
function CalculatorButtons(props) {
  return (
    <div className="calculator-buttons">
      <button className="button" onClick={props.addOne} data-testid='first-button'>
        {props.countOne}
      </button>
      <span className="h1 math-sign">+</span>
      <button className="button" onClick={props.addTwo} data-testid='second-button'>
        {props.countTwo}
      </button>
    </div>
  );
}

export default CalculatorButtons;
