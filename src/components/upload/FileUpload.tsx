import React from "react";

import { Box, Typography } from "@mui/material";

export default function FileUpload() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "calc(100vh - 80px)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          border: "8px dashed darkgrey",
          borderRadius: "6px",
          width: "32em",
          height: "20em",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="darkgrey" variant="h4">
          Drag file(s) here to upload
        </Typography>
      </Box>
    </Box>
  );
}
