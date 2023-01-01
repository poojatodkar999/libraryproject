import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./school.css"
import IconButton from '@mui/material/IconButton';
import { Button, Grid, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';


const Addnew = () => {
  return (
   <>
   <Box 
   sx={{
    backgroundColor:"#E8F4FB",height:"100vh"
   }}
   >
   <span className='title_school' >
   <IconButton>  <ArrowBackIcon color='primary'/> </IconButton> <span>Add New School</span>
   </span>
   
<Paper sx={{m:4,p:3}}>
   <Grid container rowSpacing={1} sx={{display:"flex",alignItems:'flex-end'}} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={6}>
        <TextField style={{width:'80%'}} id="standard-basic" label="School Name" variant="standard" />
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={6}>
        <TextField style={{width:'80%',marginTop:"30px"}} id="standard-basic" label="Email Id" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField style={{width:'80%'}} id="standard-basic" label="Phone Number" variant="standard" />

        </Grid>
      </Grid>
      </Paper>

   <div className='submitdiv' ><button className='submitbtn'>Submit</button></div>

   </Box>
   
   </>
  )
}

export default Addnew