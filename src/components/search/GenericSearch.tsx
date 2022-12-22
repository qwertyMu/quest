import React, { useState } from "react";

import { Box } from "@mui/material";

import AttributionSearchResults from "./AttributionsSearchResults";
import InteractionSearchResults from "./InteractionSearchResults";
import SearchBar from "./SearchBar";

export default function GenericSearch() {
  const [search, setSearch] = useState("");

  return (
    <Box>
      <SearchBar searchTerm={search} setSearchTerm={setSearch} />
      {search !== "" && (
        <Box sx={{ width: "100%", typography: "body1" }}>
          <AttributionSearchResults pk={search} />
          <InteractionSearchResults searchTerm={search} />
        </Box>
      )}
    </Box>
  );
}
