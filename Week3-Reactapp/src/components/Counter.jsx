import React, { useState } from 'react';
import "../styles/index.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
