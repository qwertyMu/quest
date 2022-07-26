import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";

import { Box, Chip } from "@mui/material";

import useResultsStore from "../../datastore/resultsStore";

export default function SearchSummary() {
  const attributionCount = useResultsStore((s) => s.attributionCount);
  const interactionCount = useResultsStore((s) => s.interactionCount);

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
        icon={<PersonIcon sx={{ color: "black !important" }} />}
        label={"Attributions - " + attributionCount}
        sx={{ background: attributionCount ? "white" : "grey" }}
      />
      <Chip
        icon={<CallIcon sx={{ color: "black !important" }} />}
        label={"Interactions - " + interactionCount}
        sx={{ background: "grey" }}
      />
    </Box>
  );
}
