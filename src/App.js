import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Signupform from "./pages/signup/Signupform";
import { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Nav from "./pages/admin/Nav";
import AddBook from "./pages/admin/AddBook";
import Content from "./pages/dashboard/content/Content";
import AdminDash from "./pages/admin/dashboard/AdminDash";
import Home from "./pages/admin/content/Home";

function App() {

  const drawerWidth = 240;
  const [open, setOpen] = useState(true);
  
  const [toggle, setToggle] = useState('');


  return (
    <>
     
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<SignIn toggle={toggle} setToggle={setToggle} />} />
          <Route path="signup" element={<SignUp  />}>
            {/* <Route index element={<Signupform  />} /> */}
          </Route>
        </Route>
       { !toggle && <Route path="/dashboard" element={ <Dashboard drawerWidth={drawerWidth} open={open} setOpen={setOpen} toggle={toggle} />}>
          <Route path="/dashboard" element={<Content drawerWidth={drawerWidth} open={open} setOpen={setOpen}  toggle={toggle} />} />
        </Route>}
       { toggle && <Route path="/admin" element={<AdminDash drawerWidth={drawerWidth} open={open} setOpen={setOpen} toggle={toggle} />} >
       < Route  path="/admin" element={<Home drawerWidth={drawerWidth} open={open} setOpen={setOpen}/> }/>   

          < Route  path="addbook" element={<AddBook /> }/>   
        </Route>}
        
      </Routes>


    </>
  );
}

export default App;
