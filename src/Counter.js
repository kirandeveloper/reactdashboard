import React from 'react';

const Counter = ({ count, increment }) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment} className="btn btn-primary">Increment</button>
    </div>
  );
};

export default Counter;
