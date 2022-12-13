import React from "react";

import { Box, Chip } from "@mui/material";

import resultsState from "../../datastore/resultsStore";

export default function PreviousSearches() {
//   const [previousSearches] = useResultsStore((s) => [s.previousSearches]);
  const [previousSearches, setPreviousSearches, setPreviousSearchesCount] = resultsState(
    (s) => [s.previousSearches, s.setPreviousSearches, s.setPreviousSearchesCount]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Chip
        // icon={<PersonIcon sx={{ color: "black !important" }} />}
        // label={"Attributions - " + attributionCount}
        // sx={{ background: attributionCount ? "white" : "grey" }}
      />
      <Chip
        // icon={<CallIcon sx={{ color: "black !important" }} />}
        // label={"Interactions - " + attributionCount}
        // sx={{ background: "grey" }}
      />
    </Box>
  );
}
