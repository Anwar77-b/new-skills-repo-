import "./LoanApplicationForm.css";
import { useState } from "react";
import Message from "./Message";
export default function LoanApplicationForm() {
    const [userInputs, setUserInputs] = useState({
        phoneNumber: "",
        name: "",
        age: "",
        employee: false,
        salary: "Above 500"
    });
    const [modalAppearance, setModalAppearance] = useState({
      appearance: false,
      message: "",
      valid: false,
    })
    function handleFormClick() {
      if (modalAppearance.appearance) {
        setModalAppearance({...modalAppearance, appearance:false})
      }
    }

  return (
    <form onSubmit={(e) => e.preventDefault()} onClick={handleFormClick}>
      <div className="userName">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          value={userInputs.name}
          onChange={(e) => {
            setUserInputs({ ...userInputs, name: e.target.value });
          }}
        />
      </div>
      <div className="phoneNumber">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="number"
          id="phoneNumber"
          placeholder="+0123456789"
          value={userInputs.phoneNumber}
          onChange={(e) => {
            setUserInputs({ ...userInputs, phoneNumber: e.target.value });
          }}
        />
      </div>
      <div className="age">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={userInputs.age}
          onChange={(e) => {
            setUserInputs({ ...userInputs, age: e.target.value });
          }}
        ></input>
      </div>
      <div className="checkbox">
        <label htmlFor="isEmployee">are you an employee</label>
        <input
          type="checkbox"
          id="isEmployee"
          checked={userInputs.employee}
          onChange={(e) => {
            setUserInputs({ ...userInputs, employee: e.target.checked });
          }}
        />
      </div>
      <div className="salary">
        <label htmlFor="salary">Salary</label>
        <select id="salary" value={userInputs.salary} 
                  onChange={(e) => {
                    setUserInputs({ ...userInputs, salary: e.target.value });
                  }}>
            <option>Above 500</option>
            <option>Bteween 500 and 1000</option>
            <option>More than 1000</option>
        </select>
      </div>
      <div>
        <button
          disabled={userInputs.name == "" || userInputs.age == "" || userInputs.phoneNumber == ""}
          onClick={() => {
            if (!(/\d{10,12}/g).test(userInputs.phoneNumber))  {
                setModalAppearance({
                  appearance:true,
                  message: "The phone number is invalid",
                  valid: false
                })
            } else if (userInputs.age < 18 || userInputs.age > 100) {
              setModalAppearance({
                appearance:true,
                message: "The age is invalid",
                valid: false
              })
            }
            else {
              setModalAppearance({
                appearance:true,
                message: "success",
                valid: true
              })
              console.log(userInputs);
            }
          }}
        >
          Submit
        </button>
      </div>
      <Message active={modalAppearance.appearance} message={modalAppearance.message} valid={modalAppearance.valid}></Message>
    </form>
  );
}
