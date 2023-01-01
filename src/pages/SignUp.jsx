import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "../css/Sign.css";
import Detailorganization from "./signup/Detailorganization";
import Organization from "./signup/Organization";
import Signupform from "./signup/Signupform";
const SignUp = (props) => {
    
  

  return (
    <>
      <div className="signup_container">
        <p className="heading">Sign Up</p>
     <div className="signup_subheading"><span>{props.page==3?"Authorised Representative":"Organization Type"}</span> <p>step {props.page} of 3</p></div>

        {/* <Organization setPage={setPage}/> */}
        {/* <Detailorganization  setPage={setPage}/> */}
        {/* <Signupform setPage={setPage}/> */}
        {/* <Detailorganization/> */}
        <Outlet />  
        

      </div>
    </>
  );
};

export default SignUp;
