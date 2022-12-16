import React from "react";

import { Box, Typography, Divider, Tooltip } from "@mui/material";

import resultsStore from "../../datastore/resultsStore";
import InteractionsList from "./results/InteractionsList";

export default function InteractionSearchResults(props) {
  const [attributionCount, interactionCount] = resultsStore((s) => [
    s.attributionCount,
    s.interactionCount,
  ]);

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5em",
        padding: "0.5em",
      }}
    >
      <React.Fragment>
        <InteractionsList searchTerm={props.pk} />
      </React.Fragment>
    </Box>
  );
}
