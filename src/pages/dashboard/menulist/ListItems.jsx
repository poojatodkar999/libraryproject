import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import AssignmentIcon from "@mui/icons-material/Assignment";
import {Link} from "react-router-dom";

// Icons
import activity_icon from '../../../Images/Icons/activity.svg'


import HomeIcon from '@mui/icons-material/Home';



export const MainListItems = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (

    <React.Fragment>
      
    <>
    
    <Link  style={{textDecoration:"none",color:"#fff"}} to='/dashboard'>
        <ListItemButton  >
          
          <ListItemIcon >
        <HomeIcon style={{color:"#fff"}} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </Link>

      {/* <Link style={{textDecoration:"none"}} to='/cards'> */}
      <ListItemButton>
        <ListItemIcon>
        <img src={activity_icon} alt="dash" />
        </ListItemIcon>
        <ListItemText primary="Activities" />
      </ListItemButton>
      
      
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
