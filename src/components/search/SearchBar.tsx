import React from "react";

import { Box, TextField, Typography } from "@mui/material";

export default function SearchBar(props: any) {
  const { searchTerm, setSearchTerm } = props;

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "calc(100vw - 16px)",
        margin: "4px 8px 0 8px",
        padding: "8px 16px",
        borderRadius: "8px",
        backgroundImage: "linear-gradient(#f05c54, #ff4242)",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          flexBasis: 1,
        }}
      >
        <TextField
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "8px",
            color: "#972021",
            fieldset: { borderRadius: "8px", borderColor: "black !important" },
          }}
          value={searchTerm}
          onChange={handleChange}
          placeholder={"Enter Search"}
        />
        <Typography variant="caption">
          You can search for Names | Phone Numbers | Email Addresses | Social
          Media Identifiers | WiFi Access Points etc...
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          flexBasis: 1,
        }}
      ></Box>
    </Box>
  );
}
