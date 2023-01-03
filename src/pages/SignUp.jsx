import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "../css/Sign.css";

const SignUp = (props) => {
    
  

  return (
    <>
      <div className="signup_container">
        <p className="heading">Sign Up</p>
     <div className="signup_subheading"><span>{props.page==3?"Authorised Representative":"Organization Type"}</span> <p>step {props.page} of 3</p></div>

        
        <Outlet />  
        

      </div>
    </>
  );
};

export default SignUp;
