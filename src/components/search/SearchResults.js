import React from "react";

import { Box, Typography } from "@mui/material";

import resultsStore from "../../datastore/resultsStore";
import AttributionsList from "./results/AttributionsList";
import InteractionsList from "./results/InteractionsList";

export default function SearchResults(props) {
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
        Attributions for {props.pk}
        <Box sx={{
          backgroundColor: '#6ae674',
          color: '#656665',
          paddingLeft: '0.3em',
          paddingRight: '0.3em',
          float: 'right',
          borderRadius: '0.4em',
        }}>
          {attributionCount}
        </Box>
        <hr />
        <small>
          What name other devices in the Quest database have attributed to your
          identifier
        </small>
      </Typography>
      <AttributionsList searchTerm={props.pk} />
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
        Interactions with {props.pk}
        <Box sx={{
          backgroundColor: '#6ae674',
          color: '#656665',
          paddingLeft: '0.3em',
          paddingRight: '0.3em',
          float: 'right',
          borderRadius: '0.4em',
        }}>
          {interactionCount}
        </Box>
        <hr />
        <small>
          Interactions between your identifier and other devices in the Quest
          database
        </small>
      </Typography>
      <InteractionsList searchTerm={props.pk} />
    </Box>
  );
}
