import React from "react";

import { Box, Typography, Divider, Tooltip } from "@mui/material";

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
        <Divider sx={{ width: "100%" }}>
          <Tooltip title="Where this identifier has been seen in the quest database, the names associated with it by other devices">
            <Typography
              sx={{
                color: "white",
                backgroundColor: "#f05c54",
                paddingTop: "0.5em",
                paddingBottom: "0.5em",
                paddingLeft: "5em",
                paddingRight: "5em",
                borderRadius: "0.3em",
                fontSize: "1.2em",
              }}
            >
              ({attributionCount}) Attributions for "{props.pk}" identified <br/>
              ({interactionCount}) Known interactions with "{props.pk}"
            </Typography>
          </Tooltip>
        </Divider>
        <AttributionsList searchTerm={props.pk} />
      </React.Fragment>
    </Box>
  );
}
