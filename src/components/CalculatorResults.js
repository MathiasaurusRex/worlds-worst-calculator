import React from "react";
function CalculatorButtons(props) {
  return (
    <h1>
      <div>Equals</div>
      <div data-testid='final-result'>{props.countOne}</div>
    </h1>
  );
}

export default CalculatorButtons;
