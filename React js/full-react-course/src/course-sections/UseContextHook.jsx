import React, { createContext, useContext, useEffect, useState } from "react";

const myContext = createContext();

const UseContextHook = () => {
  const [name, setName] = useState("manny")

  return (
    <div>
      <myContext.Provider value={{ name, setName }}>
        <Compo1 />
      </myContext.Provider>
    </div>
  );
};
const Compo1 = () => {
  return (
    <div className="border-blue-950 border-2 p-2">
      component A<Compo2></Compo2>
    </div>
  );
};
const Compo2 = () => {
  return (
    <div className="border-blue-950 border-2 p-2">
      component B<Compo3></Compo3>
    </div>
  );
};
const Compo3 = () => {
  const value = useContext(myContext);
  const [inp, setInp] = useState("");
  return (
    <div className="border-blue-950 border-2 p-2">
      component C : {value.name}
      <br />
      <input
        type="text"
        className="p-1 my-2"
        placeholder="new name"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
      <button
        className=" bg-purple-500 p-1  border-white"
        onClick={() => {
          if (inp) {
            value.setName(inp);
            setInp("");
          }
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default UseContextHook;
