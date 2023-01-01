import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Skills = (props) => {
  useEffect(()=>{
    props.setFocus([false,false,true])

  },[])
  
    const skills_data =[
        {head:"Cloud Computing",range:"79"},
        {head:"Strategy and Operations",range:"50"},
        {head:"Business Analytics",range:"45"},
        {head:"Engineering",range:"15"},
        {head:"Marine",range:"20"},
        {head:"Sales & Business Development",range:"30"},
        {head:"Programming Language",range:"38"},
        {head:"Automation",range:"40"},
        {head:"Management",range:"39"},
        {head:"CAD Design",range:"13"}
    ]
  return (
    <>
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        textAlign: "Left",
        ml: 2,

        mt: 2,
      }}
    >
      <Grid item xs={12} md={12} lg={11} spacing={2}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h4">Top Skills To Learn</Typography>
          {skills_data.map((data) => (
         <Grid container spacing={2} sx={{mt:"5px"}}>
         <Grid  item xs={12} md={4}>
         <span>{data.head}</span>
          
         </Grid>
         <Grid item xs={12} md={7}>
         <input
              style={{minWidth:"100%",maxWidth:"100px",width:"100%"}}  
                type="range"
                id="vol"
                min={data.range}
              //   disabled={true}
                max="100"
              />
             
         </Grid>
         <Grid item xs={12} md={1}>
         <span>{data.range}%</span>
             
         </Grid>
         
       </Grid> 
          
          
              ))} 
        </Paper>
      </Grid>
    </Grid>
  </>
  )
}

export default Skills