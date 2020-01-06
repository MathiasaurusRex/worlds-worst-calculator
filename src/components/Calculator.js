import React, { useState, useEffect, createContext } from "react";
import GridContainer from "./GridContainer";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorResults from "./CalculatorResults";

function Calculator(props) {
  const [countFirstNumber, setFirstNumber] = useState(1);
  const [countSecondNumber, setSecondNumber] = useState(2);

  // How would I consolidate both of these functions
  // into a single function that updates a variable state?
  const addOne = () => {
    setFirstNumber(countFirstNumber + 1);
  };
  const addTwo = () => {
    setSecondNumber(countSecondNumber + 2);
  };

  return (
    <GridContainer gridType="grid-2">
      <CalculatorButtons
        addOne={addOne}
        addTwo={addTwo}
        countOne={countFirstNumber}
        countTwo={countSecondNumber}
      />
      <CalculatorResults countOne={countFirstNumber + countSecondNumber} />
    </GridContainer>
  );
}

export default Calculator;
