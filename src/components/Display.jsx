import React, { memo } from "react";

const Display = memo(({ input, result, memory }) => {
  return (
    <div className="display">
      <div>Memory: {memory}</div>
      <h2>{input || "0"}</h2>
      <h3>{result}</h3>
    </div>
  );
});

export default Display;


  