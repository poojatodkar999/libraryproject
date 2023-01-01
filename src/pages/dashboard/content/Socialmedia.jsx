import { Grid, Input, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import linkdin_icon from "../../../Images/socialicon/linkdin.svg";
import facebook_icon from "../../../Images/socialicon/facebook.svg";
import whatsapp_icon from "../../../Images/socialicon/whatsapp.svg";
import twitter_icon from "../../../Images/socialicon/twitter.svg";

const Socialmedia = (props) => {
  useEffect(()=>{
    props.setFocus([false,true,false])

  },[])
  const social_data = [
    { icon: linkdin_icon, range: "50" },
    { icon: facebook_icon, range: "70" },
    { icon: twitter_icon, range: "12" },
    { icon: whatsapp_icon, range: "30" },
  ];

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
        <Grid item xs={12} md={8} lg={11} spacing={2}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h5">No. of Shares (0)</Typography>
            {social_data.map((data) => (
            
            
            
            
            
            <Grid
              spacing={2}
                item
                xs={12}
                md={12}
                // sx={{alignItems:"center",m:1}}
                lg={12}
                 sx={{display:"flex",m:1,flexWrap:"wrap"}}
              
              >
               <span><img src={data.icon} alt="abc" />

</span>
                  {" "}
                  <input
                  style={{marginLeft:"10px",minWidth:"400px",maxWidth:"100px",width:"100%"}}
                    type="range"
                    id="vol"
                    min={data.range}
                    // disabled={true}
                    max="100"
                  />
              {" "}
              </Grid>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Socialmedia;
