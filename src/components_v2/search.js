import React, { useState } from "react";

import FormControl, { useFormControl } from "@mui/material/FormControl";
import { Box, OutlinedInput, FormHelperText } from "@mui/material";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ShowResults from "./showResults";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  let searchTermHandler = (e) => {
    // Handles the search being inputted
    var searchTermInputted = e.target.value;
    setSearchTerm(searchTermInputted);
  };

  const client = new QueryClient();

  function MyFormHelperText() {
    const { focused } = useFormControl() || {};
    const helperText = React.useMemo(() => {
      if (focused) {
        return "Type your query.";
      }
      return "You can search for Names | Phone Numbers | Email Addresses | Social Media Identifiers | WiFi Access Points etc...";
    }, [focused]);

    return (
      <FormHelperText style={{ color: "white" }}>{helperText}</FormHelperText>
    );
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "90%" }}>
        <OutlinedInput
          placeholder="Please enter text"
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: "12px",
            color: "#972021",
          }}
          onChange={searchTermHandler}
        />
        <MyFormHelperText />
      </FormControl>
      <br />
      <br />
      <br />
      {searchTerm !== "" && (
        <QueryClientProvider client={client}>
          <ShowResults pk={searchTerm} />
        </QueryClientProvider>
      )}
    </Box>
  );
}
