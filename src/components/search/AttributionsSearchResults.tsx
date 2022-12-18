import React, { useState } from "react";

import { Box, Typography, Tooltip } from "@mui/material";

import resultsStore from "../../datastore/resultsStore";
import AttributionsCardList from "./results/AttributionsCardList";
import AttributionDisplaySelect from "./widgets/AttributionDisplaySelect";

type SearchResultsPropType = {
  pk: string;
};

export default function AttributionSearchResults(props: SearchResultsPropType) {
  const attributionCount = resultsStore((s) => s.attributionCount);
  const [displayType, setDisplayType] = useState("wordcloud");
  const searchTerm = props.pk;

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
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
        <AttributionsCardList searchTerm={searchTerm} />
      </React.Fragment>
    </Box>
  );
}
