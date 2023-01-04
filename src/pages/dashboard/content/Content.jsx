import { Button, InputBase,Toolbar } from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import { styled} from "@mui/material/styles";
import logo from "../../../Images/logo-library.png"
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar from "@mui/material/AppBar";

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
const Content = (props) => {

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
                  placeholder="Search Book…."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Stack spacing={2} direction="row">
                <Button>help</Button>
                <img src={logo} style={{ width: "50px" }} alt="" />
              </Stack>
            </Toolbar>
          </AppBar>
       
      </>
    </>
  );
};

export default Content;
