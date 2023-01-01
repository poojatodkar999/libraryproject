import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Signupform from "./pages/signup/Signupform";
import Detailorganization from "./pages/signup/Detailorganization";
import Organization from "./pages/signup/Organization";
import { useState } from "react";
import UniversityDetail from "./pages/signup/UniversityDetail";
import Dashboard from "./pages/dashboard/Dashboard";
import Academics from "./pages/dashboard/content/Academics";
import Overview from "./pages/dashboard/content/Overview";
import Socialmedia from "./pages/dashboard/content/Socialmedia";
import Skills from "./pages/dashboard/content/Skills";
import Certificates from "./pages/dashboard/Certificates";
import Certificate2 from "./pages/Certificate2";
import Academictoggle from "./pages/dashboard/Activity/Academictoggle";
// import School from "./pages/school/School";
import Addnew from "./pages/school/Addnew";
import EnhancedTable from "./pages/school/School";
import ViewschoolDetails from "./pages/school/ViewschoolDetails";
import Addmanageuser from "./pages/users/management/Addmanageuser";
import ManagerDetail from "./pages/users/management/ManagerDetail";
import Adddept from "./pages/users/Department/Adddept";
// import Dashboard from "./pages/dashboard/sidebar/Drawer";
// import AppBar from "./pages/dashboard/AppBar";

function App() {
  const [page, setPage] = useState(0);
  const drawerWidth = 240;
  const [open, setOpen] = useState(true);
const [focus,setFocus]=useState([true,false,false])

  return (
    <>
      {/* <Main/> */}
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<SignIn />} />

          <Route path="signup" element={<SignUp page={page} />}>
            <Route index element={<Organization setPage={setPage}/>} />
            <Route path="org-detail" element={<Detailorganization setPage={setPage}/>} />
            <Route path="uni-detail" element={<UniversityDetail setPage={setPage}/>} />

            <Route path="signup-form" element={<Signupform setPage={setPage}/>} />
          </Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard drawerWidth={drawerWidth} open={open} setOpen={setOpen} />}>
          <Route path="/dashboard" element={<Academics drawerWidth={drawerWidth} open={open} setOpen={setOpen} focus={focus}/>}>
          <Route index element={<Overview focus={focus} setFocus={setFocus} />} >
          </Route>
          <Route path="social-analytics" element={<Socialmedia focus={focus} setFocus={setFocus} />}/>
          <Route path="skill-in-demand" element={<Skills focus={focus} setFocus={setFocus} />}/>
          </Route>
          <Route path="certificates" element={<Certificates/>}/>
          <Route path="cert-sheet" element={<Certificate2/>}/>



        </Route>
      </Routes>
      {/* <EnhancedTable/>
      <Addnew/>
      <ViewschoolDetails/> */}
      {/* <Addmanageuser/> */}
      {/* <ManagerDetail/> */}
      {/* <Adddept/> */}

      {/* <Dashboard/> */}
    </>
  );
}

export default App;
