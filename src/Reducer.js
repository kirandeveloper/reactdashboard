import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      
      <button onClick={() => dispatch({ type: 'decrement' })} className="btn btn-success mx-2">
        -
      </button>
      <button onClick={() => dispatch({ type: 'increment' })} className="btn btn-success">
        +
      </button>
    </div>
  );
}

export default Reducer;