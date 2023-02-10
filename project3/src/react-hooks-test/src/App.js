import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const ontoggleParagraph = () => {
    setShowParagraph((prev) => !showParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={ontoggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
