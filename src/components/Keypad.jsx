import React, { memo } from "react";

const Keypad = memo(({ onInput, onClear, onCalculate, onMemoryAdd, onMemorySubtract, onMemoryClear }) => {
  const buttons = [
    { label: "M+", value: "M+", onClick: onMemoryAdd },
    { label: "M-", value: "M-", onClick: onMemorySubtract },
    { label: "MC", value: "MC", onClick: onMemoryClear },
    { label: "÷", value: "/" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "x", value: "*" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "-", value: "-" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "+", value: "+" },
    { label: "0", value: "0" },
    { label: ".", value: "." },
    { label: "=", value: "=", onClick: onCalculate },
    { label: "C", value: "C", onClick: onClear },
  ];

  const handleButtonClick = (value, onClick) => {
    if (onClick) {
      onClick();
    } else {
      onInput(value);
    }
  };

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(btn.value, btn.onClick)}
          className={btn.value === "=" ? "equal" : btn.value === "C" ? "clear" : ""}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
});

export default Keypad;



  