import React, { useState } from "react";

import { Box, Typography, Tooltip } from "@mui/material";

import useResultsStore from "../../datastore/resultsStore";
import AttributionDisplaySelect from "./widgets/AttributionDisplaySelect";
import AttributionsCardList from "./results/AttributionsCardList";
import AttributionWordCloud from "./results/AttributionWordCloud";

type SearchResultsPropType = {
  pk: string;
};

export default function AttributionSearchResults(props: SearchResultsPropType) {
  const [attributions, attributionCount] = useResultsStore((s) => [
    s.attributions,
    s.attributionCount,
  ]);

  const [displayType, setDisplayType] = useState("wordcloud");
  const searchTerm = props.pk;

  if (!attributionCount) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.5em",
        padding: "0.5em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Tooltip
          title="The names associated to this identifier by devices found in the quest database."
          arrow
          placement="bottom"
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "1.2em",
              fontFamily: "monospace",
            }}
          >
            {`Attributions x${attributionCount}`}
          </Typography>
        </Tooltip>
        <AttributionDisplaySelect
          value={displayType}
          setValue={(x: string) => setDisplayType(x)}
        />
      </Box>
      {displayType === "wordcloud" && (
        <AttributionWordCloud data={attributions} />
      )}
      {displayType === "cardlist" && (
        <AttributionsCardList searchTerm={searchTerm} />
      )}
    </Box>
  );
}
