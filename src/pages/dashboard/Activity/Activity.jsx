import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Columnchart from "../charts/Columnchart";
import Piechart from "../charts/Piechart";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Activity = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        textAlign: "center",
        ml: 2,
        color: "#2689C3",
        mt: 2,
      }}
    >
      <Grid item xs={8} md={3} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p className="number_para">3</p>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span>Events Conducted</span>{" "}
          </div>
        </Paper>
      </Grid>

      <Grid item xs={8} md={3} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            // height: 240,
          }}
        >
          <p className="number_para">20</p>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span>Certificates Issued</span>{" "}
          </div>
        </Paper>
      </Grid>
      <Grid item xs={8} md={3} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            // height: 240,
          }}
        >
          <p className="number_para">72</p>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span>Participants</span>{" "}
            <span>
              <FileDownloadIcon />
            </span>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={8} md={2} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            // height: 240,
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
            <span>Speakers</span>{" "}
            <span>
              <FileDownloadIcon />
            </span>
          </div>
        </Paper>
      </Grid>
      {/* <Grid item xs={8} md={2} lg={2}></Grid> */}

      <Grid item xs={12} md={6} lg={6} sx={{ textAlign: "center" }}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <p className="number_para">5</p>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span>Badges Issued For Speaker</span>{" "}
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <p className="number_para">65</p>

        <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span>Badges Issued For Participants</span>{" "}
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography sx={{ textAlign:"left",fontWeight:"550"}}variant="h6">Participant’s joined</Typography>
          <Columnchart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography  sx={{ textAlign:"left",fontWeight:"550"}}variant="h6">Share Count</Typography>

        </Paper>
        </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Piechart />
        </Paper>
      </Grid>
      
    </Grid>
  );
};

export default Activity;
