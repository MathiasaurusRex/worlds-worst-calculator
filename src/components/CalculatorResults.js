import React from "react";
function CalculatorButtons(props) {
  return (
    <h1>
      <div>Equals</div>
      <div>{props.countOne}</div>
    </h1>
  );
}

export default CalculatorButtons;
