import React from "react";

import { Box, TextField, Typography, Button } from "@mui/material";

import SearchSummary from "./SearchSummary";

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
          flexGrow: 2,
          flexBasis: 2,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <TextField
            fullWidth
            sx={{
              backgroundColor: "whitesmoke",
              borderRadius: "8px 0 0 8px",
              color: "#972021",
              boxShadow: "0px 2px 4px #000000A0",
              fieldset: {
                borderRadius: "8px 0 0 8px",
                borderColor: "black !important",
              },
            }}
            value={searchTerm}
            onChange={handleChange}
            placeholder={"Enter Search"}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "0 8px 8px 0",
              border: "1px solid black",
              borderLeft: 0,
              boxShadow: "0px 2px 4px #000000A0 !important",
              "&:disabled": {
                backgroundColor: "darkgrey",
              },
            }}
            disabled={searchTerm.length < 4}
          >
            Go
          </Button>
        </Box>

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
      >
        <SearchSummary />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 2,
          flexBasis: 2,
        }}
      ></Box>
    </Box>
  );
}
