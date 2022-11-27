import React from "react";

import FormControl, { useFormControl } from "@mui/material/FormControl";
import { Box, TextField } from "@mui/material";

export default function SearchBar(props: any) {
  const { searchTerm, setSearchTerm } = props;

  const MyFormHelperText = () => {
    const { focused } = useFormControl() || {};
    const helperText = React.useMemo(() => {
      if (focused) {
        return "Type your query.";
      }
      return "You can search for Names | Phone Numbers | Email Addresses | Social Media Identifiers | WiFi Access Points etc...";
    }, [focused]);

    return null;
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
      <TextField
        value={searchTerm}
        sx={{
          backgroundColor: "whitesmoke",
          borderRadius: "12px",
          color: "#972021",
        }}
        onChange={(e: any) => setSearchTerm(e.target.value)}
      />
    </Box>
  );
}
