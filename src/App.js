import React, { Fragment } from "react";
import "./App.css";

import Accordion from "./components/Accordion";
import Calculator from "./components/Calculator";
import GridContainer from "./components/GridContainer";

function App() {
  return (
    <Fragment>
      <GridContainer gridType="center">
        <h1>Worlds Worst Calculator</h1>
      </GridContainer>
      <Calculator />
      <GridContainer gridType="center">
        <h1>What are you going on about?</h1>
        <Accordion
          title={"Does 1 + 1 always equal 2?"}
          description={
            "There is an old philosophical argument that states that we are unable to prove that one + one will always equal two. This is because we are only able to test this a finite amount of times we have to make the assumption that it will always equal two. Fortunately through the power of writting unit tests we can ensure that it will always equal two."
          }
        />
        <Accordion
          title={"Will the calculator always equal 2?"}
          description={"Maybe."}
        />
        <Accordion
          title={"What if it doesn't?"}
          description={"We probably should have written our unit tests better."}
        />
      </GridContainer>
    </Fragment>
  );
}

export default App;
