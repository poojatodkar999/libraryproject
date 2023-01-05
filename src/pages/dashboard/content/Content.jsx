import { Button, Grid, InputBase, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import logo from "../../../Images/logo-library.png"
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar from "@mui/material/AppBar";

import { Link, Outlet, useNavigate } from "react-router-dom";
import ardunio from "../../../Images/book/ardunio.jpg"
import csharp from "../../../Images/book/c#.jpg"
import javajpg from "../../../Images/book/javajpg.jpg"
import php from "../../../Images/book/php.png"
import python from "../../../Images/book/javajpg.jpg"
import sql from "../../../Images/book/sql.jpg"
import machine from "../../../Images/book/machine.jpg"
import cplus from "../../../Images/book/c++.jpg"
import cprog from "../../../Images/book/Cprog_book.jpg"











const bookdata = [


  { img: ardunio, title: "Ardunio programming Book", author: "Eric Evans" },
  { img: csharp, title: "C# programming Book", author: "Martin Fowler" },
  { img: cplus, title: "C++ programming Book", author: "Zed Shaw" },
  { img: cprog, title: "C programming programming Book", author: "Brian Kernighan" },
  { img: javajpg, title: "java programming Book", author: "Greg Perry" },
  { img: machine, title: "machine Learning programming Book", author: "K. N King" },
  { img: php, title: "PHP programming Book", author: "Yashavant Kanetkar" },
  { img: python, title: "Pyhon programming Book", author: "Gayle Laakmann McDowell" },
  { img: sql, title: "SQL programming Book", author: "Erich Gamma" },



]







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

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(bookdata);





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
  const excludeColumns = ["id"];
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(bookdata);
    else {
      const filteredData = bookdata.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }



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
              marginLeft: "20px"
            }}
          >

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Book…."
                inputProps={{ "aria-label": "search" }}
                value={searchText}
                onChange={e => handleChange(e.target.value)}
              />
            </Search>
            <Stack spacing={2} direction="row">
              <Button>help</Button>
              <img src={logo} style={{ width: "50px" }} alt="" />
            </Stack>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
            textAlign: "center",
            P: 4,
          }}
        >
          <div className="main-section">
            {data.map((data) => (


              <div className="card">
                <div className="card-header">
                  <img src={data.img} className="header-img" />
                </div>
                <div className="card-title">
                  <h1>{data.title}</h1>

                  <p><strong>Author -</strong> <span>{data.author}</span></p>
                </div>
                <div>           <a className="btnproduct">Read More </a>
                </div>


              </div>
            ))}

          </div>


        </Grid>





      </>
    </>
  );
};

export default Content;
