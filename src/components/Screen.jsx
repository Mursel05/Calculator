import React, { useEffect, useState } from "react";

const Screen = ({ number, showAnswer, onSetShowAnswer, onSetNumber }) => {
  const [answer, setAnswer] = useState("");
  const newNumber = number.map((item) => (item === "x" ? (item = "*") : item));
  useEffect(() => {
    setAnswer((answer) => {
      if (
        newNumber.some(
          (item, index) =>
            typeof item === "string" && typeof newNumber[index + 1] === "string"
        ) ||
        (typeof newNumber[0] === "string" &&
          newNumber[0] !== "-" &&
          newNumber[0] !== ".")
      ) {
        return "NaN";
      } else if (
        newNumber.some(
          (item, index) => item === "/" && newNumber[index + 1] == 0
        )
      ) {
        return "Infinity";
      } else if (typeof newNumber.slice(-1)[0] === "string") {
        return eval(newNumber.slice(0, -1).join(""));
      } else {
        return eval(newNumber.join(""));
      }
    });
  }, [number]);
  useEffect(() => {
    if (showAnswer) {
      onSetNumber(Array.from(String(answer), Number));
      onSetShowAnswer(false);
    }
  }, [showAnswer]);
  return (
    <div className="screen">
      <p>{number.join("")}</p>
      <hr />
      <p className="answer">{answer}</p>
    </div>
  );
};

export default Screen;
