import { useState } from "react";
// import UseReducerHook from "./course-sections/UseReducerHook";
// import UseContextHook from "./course-sections/UseContextHook";
import "./App.css"
import UseRefHook from "./course-sections/useRefHook";

const App = () => {
  const [count, setCount] = useState(0)
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
      <main className="bg-gray-400 p-5 mx-20 my-5 rounded-md flex flex-col gap-2 bg">
        {/* {data.slice(0, 10).map(ele => {
          return (<p className="bg-gray-50 p-5">{ele.title ? ele.title : "nothing is here"}</p>)
        })} */}
        {/* <UseContextHook></UseContextHook> */}
        {/* <UseReducerHook></UseReducerHook> */}
        <UseRefHook></UseRefHook>
      </main>
    </>
  );
};




export default App;
