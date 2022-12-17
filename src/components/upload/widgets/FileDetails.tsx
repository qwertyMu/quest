import React from "react";

import { Box, Typography } from "@mui/material";

export default function FileDetails() {
  const name = "Report 1.xlsx";
  const size = "30.4 mb";

  return (
    <Box
      sx={{
        border: "1px solid darkgrey",
        borderRadius: "6px",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "80%",
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
        File Details
      </Typography>
      <Typography color="darkgrey">Filename: {name}</Typography>
      <Typography color="darkgrey">Size: {size}</Typography>
    </Box>
  );
}
