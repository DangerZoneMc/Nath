import React, { useState } from 'react';
import Calculator from "./components/calculator";

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };
  const reset = () => setCount(1);

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
