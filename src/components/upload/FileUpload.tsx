import React from "react";

import { Grid } from "@mui/material";

import UploadHistory from "./UploadHistory";
import UserDetails from "./UserDetails";
import UploadArea from "./UploadArea";

export default function FileUpload() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        width: "100%",
        height: "calc(100vh - 80px)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          padding: "12px 8px 12px 8px",
          alignSelf: "flex-start",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "12px",
          height: "100%",
        }}
      >
        <UserDetails />
        <UploadHistory />
      </Grid>
      <Grid item xs={4}>
        <UploadArea />
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}
