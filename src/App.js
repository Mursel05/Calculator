import React, { useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState([0]);
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="calculator">
      <Header />
      <Screen
        number={number}
        showAnswer={showAnswer}
        onSetShowAnswer={setShowAnswer}
        onSetNumber={setNumber}
      />
      <Buttons onSetNumber={setNumber} onSetShowAnswer={setShowAnswer} />
    </div>
  );
};

export default App;
