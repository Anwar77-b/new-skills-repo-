import "./App.css";
import Header from "./meme generator/Header";
// import Meme from "./meme generator/Meme";
import { useContext, createContext } from "react";

const Val = createContext("ggg");

function App() {
  return (
    <>
      <Header></Header>
      <CompoA></CompoA>
    </>
  );
}

export default App;

function CompoA() {
  return (
    <div className="compo">
      Component A
      <Val.Provider value="hhhhhh">
        <CompoB></CompoB>
      </Val.Provider>
    </div>
  );
}
function CompoB() {
  return (
    <div className="compo">
      Component B<CompoC></CompoC>
    </div>
  );
}
function CompoC() {
  return (
    <div className="compo">
      Component C<CompoD></CompoD>
    </div>
  );
}
function CompoD() {
  const ddd = useContext(Val)
  return <div className="compo">Component D {ddd}</div>;
}
