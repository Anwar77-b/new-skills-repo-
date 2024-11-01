import "./ArrayState.css";
import { useState } from "react";

let count = 5;
export default function ArrayState() {
  const [products, setProducts] = useState([
    { id: 1, name: "ios" },
    { id: 2, name: "android" },
    { id: 3, name: "win" },
    { id: 4, name: "mac" },
  ]);
  const [devInput, setDevInput] = useState("");

  const productList = products.map((ele) => (
    <li key={ele.id}>
      {ele.name}{" "}
      <br></br>
      <button
        onClick={() => {
          setProducts(products.filter((el) => el.id != ele.id));
        }}
      >
        Delete
      </button>  
      <button onClick={() => {
        setProducts(products.map(el => {
            if (el.id === ele.id) {
                return {id: el.id, name: ele.name + "0"}
            }
            else
                return el
        }))
      }}>
        Edit
      </button>
    </li>
  ));

  return (
    <div className="arrState">
      <input
        type="text"
        value={devInput}
        onChange={(e) => setDevInput(e.target.value)}
      />
      <button
        className="submit"
        onClick={() => {
            if (devInput) {
                setProducts([...products, { id: count, name: devInput }]);
                count++;
                setDevInput("");
            }
        }}
      >
        Submit
      </button>
      <ul>{productList}</ul>
    </div>
  );
}
