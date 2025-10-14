import React from "react";
import card from "./Components/Card";

const App = () => {
  return (
    <div className="parent">
      {card()}
      {card()}
      {card()}
    </div>
  );
};

export default App;
