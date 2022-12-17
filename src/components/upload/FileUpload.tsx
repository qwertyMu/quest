import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import UploadHistory from "./UploadHistory";
import UserDetails from "./UserDetails";

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
        <Box
          sx={{
            display: "flex",
            border: "8px dashed darkgrey",
            borderRadius: "6px",
            height: "20em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="darkgrey" variant="h4">
            Drag file(s) here to upload
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}
