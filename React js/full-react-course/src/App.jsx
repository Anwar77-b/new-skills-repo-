import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-900 min-h-lvh">
      <header className="p-4 bg-gray-700 text-white backdrop-blur-sm flex justify-between items-center ">
        <h2>Hello</h2>
        <ul className="flex">
          <li className="p-2">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="p-2">
            <Link to={"/about"}>about</Link>
          </li>
          <li className="p-2">
            <Link to={"signup"}>signup</Link>
          </li>
          <li className="p-2">
            <Link to={"profiles/1"}>profiles</Link>
          </li>
        </ul>
        <button
          className="p-2 bg-violet-600 text-white cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          click me {count}
        </button>
      </header>
      <main className="p-5 mx-20 rounded-md flex flex-col gap-2 relative">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
