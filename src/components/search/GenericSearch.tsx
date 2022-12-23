import React, { useState } from "react";

import { Box } from "@mui/material";

import { searchAttributions, searchInteractions } from "../../graphql/api";
import useResultsStore from "../../datastore/resultsStore";
import AttributionSearchResults from "./AttributionsSearchResults";
import InteractionSearchResults from "./InteractionSearchResults";
import SearchBar from "./SearchBar";

export default function GenericSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [setAttributions, setAttributionCount] = useResultsStore((s) => [
    s.setAttributions,
    s.setAttributionCount,
  ]);
  const [setInteractions, setInteractionCount] = useResultsStore((s) => [
    s.setInteractions,
    s.setInteractionCount,
  ]);

  const doSearch = () => {
    searchAttributions(searchTerm).then((results) => {
      setAttributions(results.data.listAttributions.items);
      setAttributionCount(results.data.listAttributions.items.length);
    });
    searchInteractions(searchTerm).then((results) => {
      setInteractions(results.data.listInteractions.items);
      setInteractionCount(results.data.listInteractions.items.length);
    });
  };

  return (
    <Box>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        doSearch={doSearch}
      />
      {searchTerm !== "" && (
        <Box sx={{ width: "100%", typography: "body1" }}>
          <AttributionSearchResults pk={searchTerm} />
          <InteractionSearchResults searchTerm={searchTerm} />
        </Box>
      )}
    </Box>
  );
}
