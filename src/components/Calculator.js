import React, { useState, useEffect, createContext } from "react";
import GridContainer from "./GridContainer";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorResults from "./CalculatorResults";

function Calculator(props) {
  const [countFirstNumber, setCount] = useState(1);
  const [countSecondNumber] = useState(2);

  const addOne = () => {
    setCount(countFirstNumber + 1);
  };
  const addTwo = () => {
    setCount(countSecondNumber + 2);
  };

  const myHandleClick = React.createContext(() => addOne(1));

  useEffect(() => {
    document.title = `You clicked ${countFirstNumber} times`;
  });
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
