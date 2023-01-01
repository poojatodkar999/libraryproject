import React, { useState } from "react";
import "../css/Sign.css";
import sign_img from "../Images/login.svg";
import logo_img from "../Images/read1.png";
import issuer_img from "../Images/issuer.svg";
import receiver_img from "../Images/receiver.svg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Outlet } from "react-router-dom";

const Main = () => {

 
  return (
    <div className="container">
      <div className="left_container">
        <img src={sign_img} alt="signimg" />
      </div>
      <div className="right_container">
        <img className="logoimg" src={logo_img} alt="usmartimg" />
        <Outlet />
        {/* <SignUp/> */}
        
       
      </div>
    </div>
  );
};

export default Main;
