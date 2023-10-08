import React, { useEffect } from "react";

const Buttons = ({ onSetNumber, onSetShowAnswer }) => {
  function addItem(item) {
    onSetNumber((number) =>
      number[0] == 0 ? [item] : number.length > 16 ? number : [...number, item]
    );
  }
  function deleteItem() {
    onSetNumber((number) => number.slice(0, -1));
  }
  function deleteNumber() {
    onSetShowAnswer(false);
    onSetNumber([0]);
  }
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.key === "Backspace") {
        deleteItem();
      } else if (e.key === "Delete") {
        deleteNumber();
      } else if (e.key === "Enter") {
        onSetShowAnswer(true);
      } else if (e.key === "0") {
        addItem(0);
      } else if (e.key === "1") {
        addItem(1);
      } else if (e.key === "2") {
        addItem(2);
      } else if (e.key === "3") {
        addItem(3);
      } else if (e.key === "4") {
        addItem(4);
      } else if (e.key === "5") {
        addItem(5);
      } else if (e.key === "6") {
        addItem(6);
      } else if (e.key === "7") {
        addItem(7);
      } else if (e.key === "8") {
        addItem(8);
      } else if (e.key === "9") {
        addItem(9);
      } else if (e.key === ".") {
        addItem(".");
      } else if (e.key === "+") {
        addItem("+");
      } else if (e.key === "-") {
        addItem("-");
      } else if (e.key === "/") {
        addItem("/");
      } else if (e.key === "*") {
        addItem("x");
      }
    });
  }, []);
  return (
    <div className="buttons">
      <div className="btn" onClick={() => addItem(7)}>
        <span>7</span>
      </div>
      <div className="btn" onClick={() => addItem(8)}>
        <span>8</span>
      </div>
      <div className="btn" onClick={() => addItem(9)}>
        <span>9</span>
      </div>
      <div className="btn remove" onClick={deleteItem}>
        <span>DEL</span>
      </div>
      <div className="btn" onClick={() => addItem(4)}>
        <span>4</span>
      </div>
      <div className="btn" onClick={() => addItem(5)}>
        <span>5</span>
      </div>
      <div className="btn" onClick={() => addItem(6)}>
        <span>6</span>
      </div>
      <div className="btn" onClick={() => addItem("+")}>
        <span>+</span>
      </div>
      <div className="btn" onClick={() => addItem(1)}>
        <span>1</span>
      </div>
      <div className="btn" onClick={() => addItem(2)}>
        <span>2</span>
      </div>
      <div className="btn" onClick={() => addItem(3)}>
        <span>3</span>
      </div>
      <div className="btn" onClick={() => addItem("-")}>
        <span>-</span>
      </div>
      <div className="btn" onClick={() => addItem(".")}>
        <span>.</span>
      </div>
      <div className="btn" onClick={() => addItem(0)}>
        <span>0</span>
      </div>
      <div className="btn" onClick={() => addItem("/")}>
        <span>/</span>
      </div>
      <div className="btn" onClick={() => addItem("x")}>
        <span>x</span>
      </div>
      <div className="btn remove reset" onClick={deleteNumber}>
        <span>RESET</span>
      </div>
      <div className="btn equal" onClick={() => onSetShowAnswer(true)}>
        <span>=</span>
      </div>
    </div>
  );
};

export default Buttons;
