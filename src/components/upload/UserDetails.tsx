import React from "react";

import { Box, Typography } from "@mui/material";

export default function UserDetails() {
  const username = "OperationXen";
  const org = "Apocrypha Security";

  return (
    <Box
      sx={{
        border: "1px solid darkgrey",
        borderRadius: "6px",
        padding: "1em",
        minWidth: "16em",
        position: "absolute",
        top: "4.6em",
        left: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography color="darkgrey">Username: {username}</Typography>
      <Typography color="darkgrey">Organisation: {org}</Typography>
    </Box>
  );
}
