import React, { Fragment } from "react";
import "./App.css";

import Accordion from "./components/Accordion";
import Calculator from "./components/Calculator";
import GridContainer from "./components/GridContainer";

function App() {
  return (
    <Fragment>
      <GridContainer gridType="grid-1">
        <h1>
          Worlds Worst
          <br /> Calculator
        </h1>
        <Accordion
          title={"Will the calculator always equal 2?"}
          description={"Maybe."}
        />
      </GridContainer>
      <Calculator />
    </Fragment>
  );
}

export default App;
