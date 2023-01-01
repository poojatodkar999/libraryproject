import { Grid, Paper } from '@mui/material'
import React from 'react'
import Columnchart from '../charts/Columnchart'
import Piechart from '../charts/Piechart'
import FileDownloadIcon from "@mui/icons-material/FileDownload";


const Academictoggle = () => {
  return (
    <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          textAlign: "center",
          ml:2,
          color:"#2689C3",
          mt: 2,
        }}
      >
          
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="number_para">5</p>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <span>Course Launched</span>{" "}
                <span>
                  <FileDownloadIcon />
                </span>
              </div>
            </Paper>
          </Grid>
       
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                // height: 240,
              }}
            >
              <p className="number_para">7</p>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <span>Learners</span>{" "}
                <span>
                  <FileDownloadIcon />
                </span>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                // height: 240,
              }}
            >
              <p className="number_para">71</p>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <span>Credentials Issued</span>{" "}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                // height: 240,
              }}
            >
              <p className="number_para">71</p>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <span>Badges Issued</span>{" "}
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ textAlign: "center" }}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <h4>Course Process</h4>
              <Piechart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Columnchart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Piechart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Piechart />
            </Paper>
          </Grid>
          </Grid>
  )
}

export default Academictoggle