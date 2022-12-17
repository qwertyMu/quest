import React from "react";

import { Box, Typography, Divider, Tooltip } from "@mui/material";

import resultsStore from "../../datastore/resultsStore";
import AttributionsList from "./results/AttributionsCardList";
import InteractionsList from "./results/InteractionsCardList";

import TimelineView from "./results/TimelineView";

export default function TimelineViewContainer(props) {
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
        <TimelineView searchTerm={props.pk} />
      </React.Fragment>
    </Box>
  );
}
