import React from "react";

import FormControl, { useFormControl } from "@mui/material/FormControl";
import { Box, OutlinedInput, FormHelperText } from "@mui/material";

export default function SearchBar(props) {
  const { searchTerm, setSearchTerm } = props;

  const MyFormHelperText = () => {
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
  };

  return (
    <Box
      sx={{
        width: "calc(100vw - 16px)",
        margin: "4px 8px 0 8px",
        padding: "8px 16px",
        borderRadius: "8px",
        backgroundImage: "linear-gradient(#f05c54, #ff4242)",
      }}
    >
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: "90%" }}>
          <OutlinedInput
            placeholder="Please enter search text"
            value={searchTerm}
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "12px",
              color: "#972021",
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MyFormHelperText />
        </FormControl>
      </Box>
    </Box>
  );
}
