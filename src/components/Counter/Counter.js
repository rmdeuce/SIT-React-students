import React, { useState } from 'react';

const Counter = () => {
const [count, setCount] = useState(0);
const plus = () => {
    setCount(count + 1);
  };
const minus = () => {
  setCount(count - 1);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Counter;