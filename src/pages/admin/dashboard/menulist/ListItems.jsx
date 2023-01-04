import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import AssignmentIcon from "@mui/icons-material/Assignment";
import {Link, Navigate} from "react-router-dom";

// Icons
import dashboard_icon from "../../../../Images/Icons/dashboard.svg"
import activity_icon from "../../../../Images/Icons/activity.svg"
import academic_icon from "../../../../Images/Icons/academic.svg"
import certificate_icon from "../../../../Images/Icons/certificate.svg"




export const MainListItems = (props) => {
  const [open, setOpen] = React.useState(true);

    const toggle1 = props.toggle;
  const handleClick = () => {
    setOpen(!open);
  };
  
  return (

    <React.Fragment>
      


 <>
    
    <Link  style={{textDecoration:"none",color:"#fff"}} to='/admin'>
        <ListItemButton  >
          <ListItemIcon>
      <img src={dashboard_icon} alt="dash" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>

      <Link style={{textDecoration:"none",color:"#fff"}} to='addbook'>
      <ListItemButton>
        <ListItemIcon>
        <img src={activity_icon} alt="dash" />
        </ListItemIcon>
        <ListItemText primary="Add Book" />
      </ListItemButton>
      </Link>
      </>
     
      <>

      </>

     
  
      
      
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </React.Fragment>
  );
};
