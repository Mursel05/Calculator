import React, { useState } from "react";

const Header = () => {
  const [longClick, setLongClick] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(910);
  function onMouseMove(e) {
    if (longClick) {
      setCursorPosition(
        e.screenX < 910 ? 910 : e.screenX > 941 ? 941 : e.screenX
      );
    }
  }
  const modeStyle = {
    transform: !longClick
      ? cursorPosition > 916 && cursorPosition < 932
        ? "translateX(14px)"
        : cursorPosition >= 932
        ? "translateX(31px)"
        : "translateX(0px)"
      : `translateX(${cursorPosition - 910}px)`,
  };
  return (
    <div className="header">
      <span className="logo">calc</span>
      {/* <div className="mode">
        <span>MODE</span>
        <div className="mode-btn">
          <div className="mode-number">
            <span onClick={() => setCursorPosition(912)}>1</span>
            <span onClick={() => setCursorPosition(924)}>2</span>
            <span onClick={() => setCursorPosition(940)}>3</span>
          </div>
          <div
            className="mode-slider"
            onMouseMove={onMouseMove}
            onMouseOut={() => setLongClick(false)}
          >
            <div className="mode-parts">
              <div
                className="mode-part"
                onClick={() => setCursorPosition(912)}
              ></div>
              <div
                className="mode-part"
                onClick={() => setCursorPosition(924)}
              ></div>
              <div
                className="mode-part"
                onClick={() => setCursorPosition(940)}
              ></div>
            </div>
            <div
              className="mode-circle"
              style={modeStyle}
              onTouchStart={() => setLongClick(true)}
              onTouchEnd={() => setLongClick(false)}
              onMouseUp={() => setLongClick(false)}
              onMouseDown={() => setLongClick(true)}
            ></div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
