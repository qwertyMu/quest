import React from "react";

import { Box, TextField, Typography, Button } from "@mui/material";

import SearchSummary from "./SearchSummary";

type searchBarProps = {
  searchTerm: string;
  setSearchTerm: (x: string) => void;
  doSearch: () => void;
};

export default function SearchBar(props: searchBarProps) {
  const { searchTerm, setSearchTerm, doSearch } = props;

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "calc(100vw - 16px)",
        margin: "4px 8px 0 8px",
        padding: "8px 16px",
        borderRadius: "6px",
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
              fieldset: {
                borderRadius: "8px 0 0 8px",
              },
            }}
            value={searchTerm}
            onChange={handleChange}
            placeholder={"Enter Search"}
            onKeyPress={(e) => {
              if (e.key === "Enter") doSearch();
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "0 8px 8px 0",
              borderLeft: 0,
              boxShadow: "0px 2px 4px #000000A0 !important",
              "&:disabled": {
                backgroundColor: "darkgrey",
              },
            }}
            disabled={searchTerm.length < 4}
            onClick={doSearch}
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
