import { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [count, setCount] = useState(new Date().toLocaleTimeString());
  const inp = useRef(null);
  useEffect(() => {
    inp.current = setInterval(() => {
      const date = new Date();
      setCount(
        `${date.getMinutes()}:${date.getSeconds()}:${parseInt(
          +date.getMilliseconds() / 10
        )}`
      );
    }, 10);
    return () => {
      clearInterval(inp.current);
    };
  }, []);
  return (
    <>
      <h2>useRef hook</h2>
      <input
        className="p-2"
        type="text"
        ref={inp}
        placeholder="focus me by clicking on button"
      />{" "}
      <br />
      <button
        className="bg-blue-600 rounded-lg px-4 py-2"
        onClick={() => {
          // inp.current.focus()
          console.log(inp);
          clearInterval(inp.current);
        }}
      >
        Click me
      </button>
      <time dateTime="10-10-2004">{count}</time>
    </>
  );
};

export default UseRefHook;
