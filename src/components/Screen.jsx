import React, { useEffect, useState } from "react";

const Screen = ({ number, showAnswer, onSetShowAnswer, onSetNumber }) => {
  const [answer, setAnswer] = useState("");
  const newNumber = number.map((item) => (item === "x" ? (item = "*") : item));
  useEffect(() => {
    setAnswer((answer) => {
      if (
        newNumber.some(
          (item, index) =>
            (typeof item === "string" &&
              typeof newNumber[index + 1] === "string") ||
            (typeof item === "string" &&
              newNumber[index + 1] === 0 &&
              typeof newNumber[index + 2] === "number")
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
        console.log(newNumber.join(""));
        return eval(newNumber.join(""));
      }
    });
  }, [number]);
  useEffect(() => {
    if (showAnswer && typeof answer === "number") {
      if (answer < 0) {
        onSetNumber(Array.from(String(answer * -1), Number));
        onSetNumber((number) => ["-", ...number]);
        onSetNumber((number) =>
          number.map((item) =>
            isNaN(item) && item !== "-" ? (item = ".") : item
          )
        );
        onSetShowAnswer(false);
      } else {
        onSetNumber(Array.from(String(answer), Number));
        onSetNumber((number) =>
          number.map((item) => (isNaN(item) ? (item = ".") : item))
        );
        onSetShowAnswer(false);
      }
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
