import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const inc = () => {
    dispatch({ type: 'increment' });
  };

  const dec = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div className='App'>
      <h1>useReducer</h1>
      <button onClick={inc}>Plus</button>
      <button onClick={dec}>Minus</button>
      <h1>Count: {state.count}</h1>
    </div>
  );
}

export default App;
