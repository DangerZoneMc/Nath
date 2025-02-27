import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
        marginBottom: "20px"
      }}>
        <h1 style={{ color: "#333" }}>Counter: {count}</h1>
        <button style={{ margin: "5px", padding: "10px", fontSize: "16px", cursor: "pointer" }} onClick={increment}>Increment</button>
        <button style={{ margin: "5px", padding: "10px", fontSize: "16px", cursor: "pointer" }} onClick={decrement}>Decrement</button>
        <button style={{ margin: "5px", padding: "10px", fontSize: "16px", backgroundColor: "#ff4d4d", color: "white", border: "none", cursor: "pointer" }} onClick={reset}>Reset</button>
      </div>

      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <input type="text" value={input} disabled style={{
          width: "100%",
          padding: "10px",
          fontSize: "18px",
          textAlign: "right",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px"
        }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          {"123+456-789*0.=/".split("").map((item) => (
            <button key={item} onClick={() => (item === "=" ? handleEvaluate() : handleClick(item))} style={{
              padding: "15px",
              fontSize: "18px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px"
            }}>
              {item}
            </button>
          ))}
          <button onClick={handleClear} style={{
            gridColumn: "span 2",
            padding: "15px",
            fontSize: "18px",
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            width: "100px"
          }}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;