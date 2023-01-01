import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../school/school.css";
import IconButton from "@mui/material/IconButton";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";

const Addmanageuser = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#E8F4FB",
          height: "100vh",
        }}
      >
        <span className="title_school">
          <IconButton>
            {" "}
            <ArrowBackIcon color="primary" />{" "}
          </IconButton>{" "}
          <span>Add Management User</span>
        </span>

        <Paper sx={{ m: 4, p: 3 }}>
          <Grid
            container
            // rowSpacing={3}
            // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            spacing={4}
          >
            <Grid item xs={2.5}>
              <TextField
               fullWidth
                id="standard-basic"
                label="First Name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2.5}>
              <TextField
               fullWidth
                id="standard-basic"
                label="Last Name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
               fullWidth
                id="standard-basic"
                label="Designation"
                variant="standard"
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
               fullWidth
                id="standard-basic"
                label="Email Id"
                variant="standard"
              />
            </Grid>
            .
            <Grid item xs={5}>
              <TextField
               fullWidth
                id="standard-basic"
                label="Phone Number"
                variant="standard"
              />
            </Grid>
          </Grid>
        </Paper>

        <div className="submitdiv">
          <button className="submitbtn">Submit</button>
        </div>
      </Box>
    </>
  );
};

export default Addmanageuser;
