import React from "react";

import { Box, Typography, Divider } from "@mui/material";

export default function UploadHistory() {
  return (
    <Box
      sx={{
        border: "1px solid darkgrey",
        borderRadius: "6px",
        padding: "1em",
        minWidth: "16em",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "80%",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          color: "darkgrey",
          background: "#1a1b21",
          padding: "0 4px",
          transform: "translate(0em, calc(-1em - 50%))",
        }}
      >
        Upload History
      </Typography>
      <Typography color="darkgrey">File name</Typography>
      <Typography color="darkgrey">File name</Typography>
      <Typography color="darkgrey">File name</Typography>
      <Typography color="darkgrey">File name</Typography>
      <Typography color="darkgrey">File name</Typography>
      <Typography color="darkgrey">File name</Typography>
      <Typography color="darkgrey">File name</Typography>
      <Typography color="darkgrey">File name</Typography>
      <Typography color="darkgrey">File name</Typography>
      <Typography color="darkgrey">File name</Typography>
    </Box>
  );
}
