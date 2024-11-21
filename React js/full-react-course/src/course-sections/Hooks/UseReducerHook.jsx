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
      <h3 className="bg-gray-700 text-white border-2 border-black ">useReducer hook</h3>
    <div className="p-5 shadow-sm bg-gray-500 my-4 rounded-xl">
    <span className="bg-white px-2 py-1 m-2 rounded-sm w-10 inline-block text-center">{state.count}</span>
      <button className="bg-white px-2 py-1 m-2 rounded-sm" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <button className="bg-white px-2 py-1 m-2 rounded-sm" onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button className="bg-white px-2 py-1 m-2 rounded-sm" onClick={() => dispatch({ type: "reset" })}>reset</button>
      <span className="ml-4">
        {(state.count % 3) == 1  ?  "سبحان الله": (state.count % 3) == 2 ? "الحمد لله": "الله اكبر"}
      </span>
    </div>
    </div>
  );
};

export default UseReducerHook;
