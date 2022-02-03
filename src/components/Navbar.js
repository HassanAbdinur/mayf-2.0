import React from "react";
import "./Navbar.css";
import logo from '../imgs/mayflogo.png';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleChange = () => navigate("Register");
  const handleClick = () => navigate("/");

  return (
      <div className="container">
        <div onClick={handleClick}>
          <img src={logo} alt="" style={{ width: "130", height: "60px", cursor: "pointer" }}></img>
        </div>
        <h1 
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
        Mayf Membership
        </h1>
        <p
          style={{ cursor: "pointer" }}
          onClick={handleChange}
        >
        Create New User
        </p>
      </div>
  );
}
