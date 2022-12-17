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
        User Details
      </Typography>
      <Typography color="darkgrey">Username: {username}</Typography>
      <Typography color="darkgrey">Organisation: {org}</Typography>
    </Box>
  );
}
