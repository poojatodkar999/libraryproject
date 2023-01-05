import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MainListItems } from "./menulist/ListItems";

import "../../dashboard/dashboard.css"
import { Stack } from "@mui/system";
import logo from "../../../Images/logo-library.png"
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar from "@mui/material/AppBar";

import { Link, Outlet, useNavigate } from "react-router-dom";

import { Button, Grid, InputBase, Paper, Toolbar, Typography } from "@mui/material";








export default function AdminDash(props) {


const drawerWidth = props.drawerWidth;
const open=props.open;
const setOpen=props.setOpen;
const toggle= props.toggle;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow:"none",
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


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "sticky",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "#2689C3",

     boxSizing: "border-box",
    color: "#fff",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

 

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: [1],
                paddingRight: "20px",
              }}
            >
              {open ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
             <>
                 <img
                    style={{
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                    src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=170667a&w=0&k=20&c=S9AVbcsSpY1e6vwbnrrZHJzlAtnuSQKtmk11fDItSHE="
                    alt="profile"
                  />
                  <Typography sx={{ p: 1 }}>Admin </Typography></>
                  
                  <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
              ) : (
                ""
              )}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginLeft: "0.5px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <MainListItems toggle={toggle} />
              <Divider sx={{ my: 1 }} />
              {/* <SecondaryListItems /> */}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: "#EFF5FF",
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",

              padding: "15px",
            }}
          >
           {/* <Toolbar /> */}
        
        <AppBar position={"absolute"} open={open}>
   <Toolbar
     sx={{
       // pr: "24px", // keep right padding when drawer closed
       display: "flex",
       justifyContent: "space-between",
     }}
   >
    <Typography variant="h6" style={{color:"#2689C3",marginLeft:"20px"}}>Library management System</Typography>
    
     <Stack spacing={2} direction="row">
       <Button>help</Button>
       <img src={logo} style={{ width: "50px" }} alt="" />
     </Stack>
   </Toolbar>
 </AppBar>
 <Toolbar/>



        <Outlet/>

        
           
          </Box>
         
        </Box>
      </ThemeProvider>  
      
    </>
  );



}
