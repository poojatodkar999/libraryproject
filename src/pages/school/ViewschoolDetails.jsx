import { IconButton, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./school.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { PhotoCamera } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));
const ViewschoolDetails = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#E8F4FB", m: 2 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0 23px",
          }}
        >
          {" "}
          <Typography variant="h5">Schools</Typography>{" "}
          <button className="submitbtn">Edit</button>
        </div>
        <Grid container spacing={2}>
          <Grid xs={12} md={3}>
            <Grid>
              {" "}
              <Item sx={{ paddingTop: "10px" }}>
                {" "}
                <Typography variant="h5">Logo</Typography>
                <Grid sx={{ marginTop: "10px" }}>
                  {" "}
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </Grid>
              </Item>
            </Grid>
            <Grid sx={{ marginTop: "10px" }}>
              {" "}
              <Item>
                <Typography variant="h5">Social Media Handles</Typography>
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    mt: 3,
                  }}
                >
                  <LinkedInIcon /> <FacebookIcon />
                  <InstagramIcon />
                  <TwitterIcon />
                  <LanguageIcon />{" "}
                </Grid>
              </Item>
            </Grid>
          </Grid>
          <Grid xs={12} md={9}>
              <Item>
            <Typography variant="h6" sx={{ textAlign: "left", p: 1 }}>
              Details
            </Typography>
            <Grid  direction="column" xs={12} md={12}   >
              {" "}
                <Grid md={4}>
                  <Typography
                    variant="body1"
                    style={{
                      color: "rgb(117, 117, 117)",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Name of the School
                  </Typography>
                 
                </Grid>
                <Grid Item md={4}>
                  <Typography
                    variant="body1"
                    style={{
                      color: "rgb(117, 117, 117)",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Name of the School
                  </Typography>
                </Grid>
            </Grid>
            <Grid item direction="column" xs={12} md={12}   >
              {" "}
                <Grid md={4}>
                  <Typography
                    variant="body1"
                    style={{
                      color: "rgb(117, 117, 117)",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Name of the School
                  </Typography>
                 
                </Grid>
                <Grid Item md={4}>
                  <Typography
                    variant="body1"
                    style={{
                      color: "rgb(117, 117, 117)",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Name of the School
                  </Typography>
                </Grid>
            </Grid>
            
              </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ViewschoolDetails;
