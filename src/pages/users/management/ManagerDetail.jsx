import { Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));

const ManagerDetail = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, m: 2, backgroundColor: "#E8F4FB", p: 3 }}>
      <span className="title_school">
          <IconButton>
            {" "}
            <ArrowBackIcon color="primary" />{" "}
          </IconButton>{" "}
          <span>Management User</span>
        </span>

        <Grid container sx={{mt:2}} spacing={2}>
          <Grid
            item
            xs={3}
            sx={{ alignItems: "center", textAlign: "center", P: 4 }}
          >
            <Item
              sx={{
                borderRadius: "15px",
                textAlign: "center",
                alignItems: "center",
                p: 4,
              }}
            >
              <Typography sx={{ fontWeight: "600" }} variant="h6">
                Profile Pic
              </Typography>
              <div
                style={{
                  alignItems: "center",
                  marginTop: "20px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                {" "}
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  src="/broken-image.jpg"
                />
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={9}>
            <Item>
              <Typography
                sx={{ fontWeight: "600", textAlign: "left", p: 1 }}
                variant="h6"
              >
                User Details
              </Typography>
              <Grid container spacing={2}>
                <Grid spacing={2} xs={6}>
                  <Grid
                    container
                    // spacing={3}
                    sx={{m:2}}
                    rowSpacing={3}
                    // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                    <p className="lable-text">First Name</p>
                    <Typography>pooja  </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <p className="lable-text">Last Name</p>
                    <Typography>pooja  </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <p className="lable-text">Email Id</p>
                    <Typography>pooja  </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <p className="lable-text">Designation</p>
                    <Typography>pooja  </Typography>
                    </Grid>
                   
                  </Grid>
                </Grid>
                <Grid sx={{mt:2}} rowSpacing={3} item xs={6}>

                <Grid  item xs={12}>
                    <p className="lable-text">Phone Number</p>
                    <Typography>pooja  </Typography>
                    </Grid>
                </Grid>
               
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ManagerDetail;
