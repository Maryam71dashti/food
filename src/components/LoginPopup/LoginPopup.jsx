import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt=""/>
        </div>
        <div className="login-popup-inputs">
          {currState==="login" ?<></>:<input type="text" placeholder="Your name" reguired />}
          <input type="email" placeholder="Your email" reguired />
          <input type="password" placeholder="password" reguired />
        </div>
        <button>{currState === "Sign Up" ? "create account" : "login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" />
            <p >by continuing,I agree to the terms of us & privacy policy</p>
        </div>
        {
            currState==="login"?<p>create a new account?<span onClick={()=>setCurrState("Sign Up")}>click here</span> </p>
            :<p>Already have an account?<span onClick={()=>setCurrState("login")}>login here</span> </p>
        }
      </form>
    </div>
  );
};

export default LoginPopup;
