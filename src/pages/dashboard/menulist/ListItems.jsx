import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from '@mui/icons-material/School';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import GroupsIcon from '@mui/icons-material/Groups';
import BarChartIcon from "@mui/icons-material/BarChart";
import BalanceIcon from '@mui/icons-material/Balance';
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {Link, Navigate} from "react-router-dom";

// Icons
import dashboard_icon from "../../../Images/Icons/dashboard.svg"
import activity_icon from "../../../Images/Icons/activity.svg"
import academic_icon from "../../../Images/Icons/academic.svg"
import certificate_icon from "../../../Images/Icons/certificate.svg"
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';




export const MainListItems = (props) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (

    <React.Fragment>
      
    
      <Link  style={{textDecoration:"none",color:"#fff"}} to='/dashboard'>
        <ListItemButton  >
          <ListItemIcon>
      <img src={dashboard_icon} alt="dash" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>

      {/* <Link style={{textDecoration:"none"}} to='/cards'> */}
      <ListItemButton>
        <ListItemIcon>
        <img src={activity_icon} alt="dash" />
        </ListItemIcon>
        <ListItemText primary="Activities" />
      </ListItemButton>
      {/* </Link> */}
      {/* <Link style={{textDecoration:"none"}} to='/worksheet'> */}
      <ListItemButton>
        <ListItemIcon>
        <img src={academic_icon} alt="dash" />

        </ListItemIcon>
        {/* <Link to='/user-transaction'> */}
        <ListItemText primary="Academic" />
        {/* </Link> */}
      </ListItemButton>
      {/* </Link> */}
      <Link style={{textDecoration:"none", color:"#fff"}} to='certificates'>
      <ListItemButton>
        <ListItemIcon  >
        <img src={certificate_icon} alt="dash" />

        </ListItemIcon>

        <ListItemText primary="Certificate" />
      </ListItemButton>
      </Link>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
  
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          </List>
      </Collapse>
      {/* <Link style={{textDecoration:"none"}} to='/roles'> */}
      
      {/* </Link> */}
      {/* <Link style={{textDecoration:"none"}} to='/calendar'>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText secondary="Calender" />
      </ListItemButton>
      </Link> */}
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
