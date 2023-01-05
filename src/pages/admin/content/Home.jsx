import { Button, Grid, InputBase, Paper, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Stack } from "@mui/system";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../../Images/logo-library.png"
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar from "@mui/material/AppBar";

import { Link, Outlet, useNavigate } from "react-router-dom";
import Piechart from "../charts/Piechart";
import Columnchart from "../charts/Columnchart";
import FileDownloadIcon from "@mui/icons-material/FileDownload";




const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  color: "#000",
  border: " 1px solid #fff",

  "&:hover": {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12c",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Home = (props) => {

  const navigate = useNavigate();

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: "none",
    // width: `calc(100% - ${drawerWidth}px)`,

    width: "96.2%",
    backgroundColor: "#EFF5FF",
    ...(open && {
      marginLeft: props.drawerWidth,
      width: `calc(100% - ${props.drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),

    }),
  }));
  const opener = props.open;
  return (
    <>
      <>
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
            textAlign: "center",
            P: 2,
          }}
        >



          <Grid
            container
            spacing={2}
            sx={{
              alignItems: "center",
              textAlign: "center",
              ml: 2,
              color: "#2689C3",
              mt: 2,
            }}
          >

            <Grid item xs={12} md={3} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p className="number_para">5</p>

                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <span>Book Launched</span>{" "}
                  <span>
                    <FileDownloadIcon />
                  </span>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} md={3} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // height: 240,
                }}
              >
                <p className="number_para">7</p>

                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <span>Manage users</span>{" "}
                  <span>
                    <FileDownloadIcon />
                  </span>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // height: 240,
                }}
              >
                <p className="number_para">71</p>

                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <span> Issued Book</span>{" "}
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // height: 240,
                }}
              >
                <p className="number_para">71</p>

                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <span>Fine Connected</span>{" "}
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={6} sx={{ textAlign: "center" }}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <h4>Course Process</h4>
                <Piechart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Columnchart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Piechart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Piechart />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default Home;
