import React from "react";

import { Box, Typography, Tooltip } from "@mui/material";

import QuizIcon from '@mui/icons-material/Quiz';

import resultsStore from "../../datastore/resultsStore";
import AttributionsList from "./results/AttributionsList";

export default function AttributionSearchResults(props) {
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
        <Box>
          <Tooltip title="The names associated to this identifier by devices found in the quest database." arrow placement="right">
            <Typography
              sx={{
                color: "white",
                fontSize: "1.2em",
                fontFamily: 'monospace',
              }}>
                <QuizIcon sx={{marginBottom:-1}} />&nbsp; Attributions x{attributionCount}
            </Typography>
          </Tooltip>
        </Box>
        <AttributionsList searchTerm={props.pk} />
      </React.Fragment>
    </Box>
  );
}
