import React from "react";
import GridContainer from "./GridContainer";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorResults from "./CalculatorResults";

function Calculator(props) {
  return (
    <GridContainer gridType="side-by-side">
      <CalculatorButtons />
      <CalculatorResults />
    </GridContainer>
  );
}

export default Calculator;
