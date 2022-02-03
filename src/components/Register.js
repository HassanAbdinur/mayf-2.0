import React from "react";
import "./Register.css";
// import { UsersContext } from "../App";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // const user = useContext(UsersContext);

  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  const handleChange = () => navigate("/Login");

  return (
    <div className="register--form">
      <form>
        <br />
        <label> NAME</label>
        <br />
        <input type="text" name="name" required="required" placeholeder="Enter Name" /> <br />
        <label> EMAIL</label>
        <br />
        <input /> <br />
        <label>PHONE NUMBER</label>
        <br />
        <input /> <br />
        <label> PASSWORD </label>
        <br />
        <input /> <br />
        <label> CONFIRM PASSWORD</label>
        <br />
        <input /> <br />
        <button
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        > 
        REGISTER
        </button>
        <br />
        <span>Already Have an Count</span>
        <button
          onClick={handleChange}
          style={{ backgroundColor: "#ffa500", cursor: "pointer" }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
