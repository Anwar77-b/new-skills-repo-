import React, { createContext, useContext, useEffect, useState } from "react";

const myContext = createContext()
const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("manny")
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   const aa = async () => {
  //     const dat = await fetch("https://jsonplaceholder.typicode.com/posts")
  //     const dataa = await dat.json()
  //     setData(dataa)
  //   }
  //   aa()
  //   console.log(data[5]);
    
  // }, [])
  return (
    <>
      <div className="bg-gray-900 absolute inset-0 -z-10 "></div>
      <header className="p-4 bg-gray-700 text-white backdrop-blur-sm flex justify-between items-center ">
        <h2>Hello</h2>
        <ul className="flex">
          <li className="p-2">Home</li>
          <li className="p-2">About</li>  
          <li className="p-2">sign up</li>
          <li className="p-2">login</li>
        </ul>
        <button className="p-2 bg-violet-600 text-white cursor-pointer" onClick={() => setCount(count + 1)}>click me {count}</button>
      </header>
      <main className="bg-gray-400 p-5 mx-20 my-5 rounded-md flex flex-col gap-2">
        {/* {data.slice(0, 10).map(ele => {
          return (<p className="bg-gray-50 p-5">{ele.title ? ele.title : "nothing is here"}</p>)
        })} */}
        <myContext.Provider value={{name, setName}}>
          <Compo1/>
        </myContext.Provider>
      </main>
    </>
  );
};


const Compo1 = () => {
  return (
    <div className="border-blue-950 border-2 p-2">
      component A
      <Compo2></Compo2>
    </div>
  )
}
const Compo2 = () => {
  return (
    <div className="border-blue-950 border-2 p-2">
      component B
      <Compo3></Compo3>
    </div>
  )
}
const Compo3 = () => {
  const value = useContext(myContext)
  const [inp, setInp] = useState("")
  return (
    <div className="border-blue-950 border-2 p-2">
      component C : {value.name}
      <br />
      <input type="text"  className="p-1 my-2" placeholder="new name" value={inp} onChange={(e) => {
        setInp(e.target.value)
      }}/>
      <button className=" bg-purple-500 p-1  border-white" onClick={() => {
        if (inp) {
          value.setName(inp)
          setInp("")
        }
      }}>Change Name</button>
    </div>
  )
}



export default App;
