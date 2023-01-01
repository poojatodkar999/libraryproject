import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Academictoggle from '../Activity/Academictoggle'
import Activity from '../Activity/Activity'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/system';


const Overview = (props) => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    // const[active , setActive]=useState(true)  
    useEffect(()=>{
      props.setFocus([true,false,false])
  
    },[])

  return (
    <> 
     <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          textAlign: "center",
          // pr: 50,
          color:"#2689C3",
          mt: 4,
        }}
      >
       
      </Grid>
      
      
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',ml:5 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Academics" value="1" />
            <Tab label="Activities" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Academictoggle/></TabPanel>
        <TabPanel value="2"><Activity/></TabPanel>
      </TabContext>
    </Box>
    
     </>
  )
}

export default Overview