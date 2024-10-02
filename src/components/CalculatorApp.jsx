import { useState, useCallback, useMemo } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

export const CalculatorApp = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState(0);
  const [calculated, setCalculated] = useState(false);

  const handleInput = useCallback((value) => {
    if (calculated) {
      setInput(value);
      setCalculated(false);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  }, [calculated]);

  const handleClear = useCallback(() => {
    setInput("");
    setResult("");
    setCalculated(false);
  }, []);

  const handleCalculate = useCallback(() => {
    try {
      const res = eval(input);
      setResult(res);
      setInput(res.toString());
      setCalculated(true);
    } catch (error) {
      setResult("Error");
    }
  }, [input]);

  const handleMemoryAdd = useCallback(() => {
    try {
      setMemory((prevMemory) => prevMemory + eval(input));
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  }, [input]);

  const handleMemorySubtract = useCallback(() => {
    try {
      setMemory((prevMemory) => prevMemory - eval(input));
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  }, [input]);

  const handleMemoryClear = useCallback(() => {
    setMemory(0);
  }, []);

  const memoizedMemory = useMemo(() => memory, [memory]);

  return (
    <div className="calculator">
      <Display input={input} result={result} memory={memoizedMemory} />
      <Keypad
        onInput={handleInput}
        onClear={handleClear}
        onCalculate={handleCalculate}
        onMemoryAdd={handleMemoryAdd}
        onMemorySubtract={handleMemorySubtract}
        onMemoryClear={handleMemoryClear}
      />
    </div>
  );
};

export default CalculatorApp;



