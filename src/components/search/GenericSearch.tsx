import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box, Tab } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import TimelineIcon from '@mui/icons-material/Timeline';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import TimelineViewContainer from "./TimelineViewContainer";

export default function GenericSearch() {
  const client = new QueryClient();
  const [search, setSearch] = useState<String>("");

  const [value, setValue] = useState('1');

  const handlePanelChange = (event: any, newValue: any) => {
    setValue(newValue);
  };


  return (
    
    <Box>
      <SearchBar searchTerm={search} setSearchTerm={setSearch} />
      {search !== "" && (
        <QueryClientProvider client={client}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value} >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList centered onChange={handlePanelChange} aria-label="lab API tabs example">
                  <Tab sx={{ color:'white' }} icon={<TimelineIcon />} label="Timeline View" value="1" />
                  <Tab sx={{ color:'white' }} icon={<RecentActorsIcon/>} label="Data-card View" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                  <TimelineViewContainer pk={search} />
              </TabPanel>
              <TabPanel value="2">
                  <SearchResults pk={search} />
              </TabPanel>
            </TabContext>
          </Box>
        </QueryClientProvider>
      )}
    </Box>
  );
}
