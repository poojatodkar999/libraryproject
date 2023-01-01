import { Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Certificates = () => {
  const navigate =useNavigate();
  return (
    <>
      <div className="cert_container">
        <span className="cert_heading"> Assign Certificate</span>

        <Grid container sx={{mt:3}} spacing={4}>
          <Grid item xs={4}>
            <div><p>First Name</p>
              <input type="text" /></div>
              <div><p>Organisation</p>
              <input type="text" /></div>
              <div><p>Assigned Date</p>
              <input type="text" /></div>
              <div><p>Email Id</p>
              <input type="text" /></div>
              </Grid>
          <Grid item xs={4}> <div><p>Last Name</p>
              <input type="text" /></div>
              <div><p>Certified For</p>
              <input type="text" /></div>
              <div><p>Duration</p>
              <input type="text" /></div></Grid>
             
              <Grid sx={{alignItems:"center",textAlign:"center",justifyContent:"center",display:"flex"}} item xs={8}>
             
              <Grid   xs={4}>  <button className="btn_blue" onClick={()=>navigate('/dashboard/cert-sheet')} >Submit</button></Grid> 
              </Grid>
          
        </Grid>
      </div>
    </>
  );
};

export default Certificates;
