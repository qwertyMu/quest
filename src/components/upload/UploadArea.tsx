import React from "react";

import { Box, Typography } from "@mui/material";

import UploadButton from "./widgets/UploadButton";

export default function UploadArea() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          border: "8px dashed darkgrey",
          borderRadius: "6px",
          height: "20em",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography color="darkgrey" variant="h4">
          Drag file(s) here to upload
        </Typography>
      </Box>
      <UploadButton />
    </Box>
  );
}
