import { FormControl, Grid, IconButton, MenuItem, NativeSelect, Paper, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Adddept = () => {
  const [activetab, setActivetab] = useState([true, false, false]);

  const [org, setOrg] = useState("");
  const handleChange = (event) => {
    setOrg(event.target.value);
  };


  return (
    <>
      <Box
        sx={{
          backgroundColor: "#E8F4FB",
          height: "100vh",
        }}
      >
        <span className="title_school">
         <span> <IconButton>
            {" "}
            <ArrowBackIcon color="primary" />{" "}
          </IconButton>{" "}
          <span>Department Users</span>{" "}</span>
          <span className="tabs">
            <button className={activetab[0]?"activetab":""} onClick={()=>setActivetab([true,false,false])}  >Approved</button>
            <button className={activetab[1]?"activetab":""} onClick={()=>setActivetab([false,true,false])} >Requested</button>
            <button className={activetab[2]?"activetab":""} onClick={()=>setActivetab([false,false,true])} >Rejected</button>{" "}
          </span>
        <div>  <button className="submitbtn">Add User</button></div>
        </span  >

        <Paper sx={{ m: 4, p:4 }}>
          <Grid
          
            container
            rowSpacing={2}
            sx={{ display: "flex", alignItems: "flex-end",p:3 }}
            columnSpacing={{ xs: 2, sm: 2, md: 5 }}
          >
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="First Name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Last Name"
                variant="standard"
              /></Grid>
            <Grid item xs={6}>
            <TextField
                fullWidth
                id="standard-basic"
                label="Designation"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Phone Number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Email Id"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
            <FormControl  sx={{mt:2,  minWidth: 120  }} fullWidth>
        <NativeSelect
          value={org}
          onChange={handleChange}
          displayEmpty
        >
          <option disabled={true} value="">
            Select School
          </option>
          <option value={"university"}>University</option>
          <option value={"Institude"}>Institude</option>
          
        </NativeSelect> 
       
      </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl  sx={{mt:2}} fullWidth>
        <NativeSelect
          value={org}
          onChange={handleChange}
          displayEmpty fil
        >
          <option disabled={true} value="">
            Select Department
          </option>
          <option value={"university"}>University</option>
          <option value={"Institude"}>Institude</option>
          
        </NativeSelect> 
       
      </FormControl>
            </Grid>
          </Grid>
        </Paper>

        <div className="submitdiv">
          <button className="submitbtn">Add Now</button>
        </div>
      </Box>
    </>
  );
};

export default Adddept;
