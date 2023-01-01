import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import { MainListItems, SecondaryListItems } from "./ListItems";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Stack } from "@mui/system";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import RuleIcon from "@mui/icons-material/Rule";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import SettingsIcon from "@mui/icons-material/Settings";
// import SearchIcon from "@mui/icons-material/Search";
import SearchIcon from "@mui/icons-material/Search";

import { MainListItems } from "../menulist/ListItems";
import { Button, InputBase } from "@mui/material";
import logo from "../../../Images/u-smart.svg";

import Academics from "../content/Academics";


// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="https://mui.com/">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

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
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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

  width: "95.2%",
  backgroundColor: "#EFF5FF",
 ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
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

function DashboardContent() {
  const [shownotif, setShownotif] = useState(false);

  const [open, setOpen] = React.useState(true);
  // const [component, setComponent] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  

  return (
    <>
      {/* {shownotif && <Notifications close={setShownotif} />} */}
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position={"absolute"} open={open}>
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
                  <Typography sx={{ p: 1 }}>John Doe </Typography>
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
              <MainListItems />
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
              // marginTop:"40px",
              padding: "15px",
            }}
          >
            {/* {<Show />} */}
            {/* {component} */}
            <Academics/>
            {
              <>
                {/* <Routes>
                  <Route exact path="/" element={component} />
                  <Route exact path="/cards" element={<Cards />} />
                  <Route exact path="/cards/:cardname" element={<Cards />} />
                  <Route
                    exact
                    path="/user-profile"
                    element={<Settingsamit />}
                  />
                  <Route exact path="/user-setting" element={<Settings />} />
                  <Route
                    exact
                    path="/user-transaction"
                    element={<Transactions />}
                  />
                  <Route
                    exact
                    path="/user-voilation"
                    element={<Voilations />}
                  />
                  <Route exact path="/rules" element={<Rules1 />} />

                  <Route path="/worksheet" element={<Worksheet />} />
                  <Route path="/directive" element={<Directmanage />} />

                  <Route path="/roles" element={<Roletable />} />
                  <Route path="/user-calendar" element={<Fullcalender />} />
                  <Route path="/user" element={<User />} />
                </Routes> */}
              </>
            }
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
