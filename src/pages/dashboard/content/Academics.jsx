import { Button, Grid, InputBase, Paper, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Stack } from "@mui/system";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../../Images/u-smart.svg"
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar from "@mui/material/AppBar";
import Academictoggle from "../Activity/Academictoggle";
import Activity from "../Activity/Activity";
import Socialmedia from "./Socialmedia";
import Skills from "./Skills";
import { Link, Outlet, useNavigate } from "react-router-dom";



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
const Academics = (props) => {
//   const [focus,setFocus]=useState(
//     {
//       activeClasses:[true,false,false]

//     }
//   )
// const activeClasses= focus.activeClasses.slice();
// const addactiveClasses=(index)=>{
//   console.log(index);
//   const activeClasses = [...focus.activeClasses.slice(0, index), !focus.activeClasses[index], focus.activeClasses.slice(index + 1)].flat();
//   setFocus({activeClasses});

// }
  const navigate=useNavigate();

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
const opener = props.open;
  return (
    <>
      <>
        <Toolbar />
        
                 <AppBar position={"absolute"} open={opener}>
            <Toolbar
              sx={{
                // pr: "24px", // keep right padding when drawer closed
                display: "flex",
                justifyContent: "space-between",
              }}
            >
             
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search learner…."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Stack spacing={2} direction="row">
                <Button>help</Button>
                <img src={logo} style={{ width: "50px" }} alt="" />
              </Stack>
            </Toolbar>
          </AppBar>
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
          // pr: 50,
          mt: 4,
          
        }}
      >
        <Grid item xs={12} md={3} lg={2}>
          <Typography variant="h5">Dashboard</Typography>
        </Grid>
        
        
        <Grid item xs={12} md={3} lg={3} >
       <span  className={props.focus[0]?'focus add':'focus'} onClick={()=>navigate('/dashboard')}  >  Overview</span>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <span className={props.focus[1]?'focus add':'focus'} onClick={()=>navigate('social-analytics')} >
          Social Media Analytics</span>
                    </Grid>
        <Grid item xs={12} md={3} lg={3}>
        <span className={props.focus[2]?'focus add':'focus'} onClick={()=>navigate('skill-in-demand')}>
        Skill In Demand
            </span>
        </Grid>
      </Grid>
     
      <Outlet/>
      
     {/* {active ? <Academictoggle/>:<Activity/>} */}

     {/* <Socialmedia/> */}
     {/* <Skills/> */}
        </Grid>
      </>
    </>
  );
};

export default Academics;
