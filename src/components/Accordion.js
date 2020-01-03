import React from "react";

function Accordion(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.description}</div>
    </div>
  );
}

export default Accordion;
