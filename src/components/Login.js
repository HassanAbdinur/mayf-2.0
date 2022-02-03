import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/register");

  const handleChange = () => navigate("/");
  
  return (
    <div className="login--form">
      <form>
        <br />
        <label> EMAIL</label>
        <br />
        <input /> <br />
        <label> PASSWORD</label>
        <br />
        <input /> <br />
        <button
          style={{ cursor: "pointer" }}
          onClick={handleChange}
        > 
        LOGIN
          </button>
        <br />
        <span> Dont have an account ?</span>
        <button
          onClick={handleClick}
          style={{ backgroundColor: "#ffa500", color: "black", cursor: "pointer" }}
        >
          REGISTER ACCOUNT
        </button>
      </form>
    </div>
  );
}
