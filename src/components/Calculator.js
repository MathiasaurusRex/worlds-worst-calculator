import React from "react";
import GridContainer from "./GridContainer";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorResults from "./CalculatorResults";

function Calculator(props) {
  // If each button is active
  // Then show the results
  return (
    <GridContainer gridType="grid-2">
      <CalculatorButtons />
      <CalculatorResults />
    </GridContainer>
  );
}

export default Calculator;
