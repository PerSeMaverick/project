import React from "react";

function DemoOutput(props) {
  return <p>{props.show ? "This is New Paragraph" : ""}</p>;
}

export default React.memo(DemoOutput);
