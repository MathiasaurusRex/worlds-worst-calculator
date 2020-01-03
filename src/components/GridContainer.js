import React from "react";
function GridContainer(props) {
  return (
    <div className="grid-container">
      <div className={"grid " + props.gridType}>{props.children}</div>
    </div>
  );
}

export default GridContainer;
