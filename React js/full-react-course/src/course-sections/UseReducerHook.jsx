import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div className="">
      <h3 className="bg-gray-700 text-white border-2 border-black bg-gray-700 ">useReducer hook</h3>
      <span>{state.count}</span>
      <button className="bg-white" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default UseReducerHook;
