import "./FormState.css";
import { useState } from "react";

export default function Form() {
  let [userInputs, setUserInputs] = useState({
    email: "",
    name: "",
    info: "",
    student: false,
  });
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={userInputs.email}
          onChange={(e) => {
            setUserInputs({ ...userInputs, email: e.target.value });
          }}
        />
      </div>
      <div className="userName">
        <label htmlFor="name">User Name</label>
        <input
          type="text"
          id="name"
          value={userInputs.name}
          onChange={(e) => {
            setUserInputs({ ...userInputs, name: e.target.value });
          }}
        />
      </div>
      <div className="info">
        <label htmlFor="info">More informations</label>
        <textarea
          id="info"
          cols="38"
          rows="5"
          value={userInputs.info}
          onChange={(e) => {
            setUserInputs({ ...userInputs, info: e.target.value });
          }}
        ></textarea>
      </div>
      <div className="checkbox">
        <label htmlFor="isStudent">are you a student</label>
        <input
          type="checkbox"
          id="isStudent"
          checked={userInputs.student}
          onChange={(e) => {
            setUserInputs({ ...userInputs, student: e.target.checked });
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            console.log(userInputs);
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
