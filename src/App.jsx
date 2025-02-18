import React, { useState } from 'react';
import Calculator from "./components/Calculator";

function App() {
  return (
    <div>
      <Calculator />
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 0);
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

// CSS styles
const styles = {
  counter: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  button: {
    padding: '5px 10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
