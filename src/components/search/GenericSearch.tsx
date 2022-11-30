import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box } from "@mui/material";

import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";

export default function GenericSearch() {
  const client = new QueryClient();
  const [search, setSearch] = useState<String>("");

  return (
    <Box>
      <SearchBar searchTerm={search} setSearchTerm={setSearch} />
      {search !== "" && (
        <QueryClientProvider client={client}>
          <SearchResults pk={search} />
        </QueryClientProvider>
      )}
    </Box>
  );
}
