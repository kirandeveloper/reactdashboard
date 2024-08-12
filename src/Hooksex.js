import React, { useState } from 'react';

const Hookaex = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-success">Click me</button>
    </div>
  );
};

export default Hookaex;
