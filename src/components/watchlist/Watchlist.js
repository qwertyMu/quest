import React, { useState } from "react";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

import BulkSearchBuilder from "../_bulkSearchBuilder";
import InteractionsIntelligenceList from "./InteractionsIntelligenceList";
import AttributionsIntelligenceList from "./AttributionsIntelligenceList";

export default function Watchlist() {
  const [value, setValue] = useState("1");
  const [attributionsValue, setAttributuonsValue] = useState("1");

  const handleInteractionsChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleAttributionsChange = (event, newValue) => {
    setAttributuonsValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "calc(100vw - 16px)",
        height: "calc(100vh - 80px)",
        margin: "4px 8px 0 8px",
        borderRadius: "6px",
        typography: "body1",
        background: "darkgrey",
      }}
    >
      <TabContext value={value} variant="fullWidth">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            centered
            onChange={handleInteractionsChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Intelligence List" value="1" />
            <Tab label="Create an Attribution" value="2" />
            <Tab label="Bulk Search Builder" value="3" />
            <Tab label="Previous Searches" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <h2 style={{ textAlign: "center" }}>Captured Intelligence Lists</h2>
          <TabContext value={attributionsValue} variant="fullWidth">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                centered
                onChange={handleAttributionsChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Saved Attributions" value="2" />
                <Tab label="Saved Interactions" value="1" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <InteractionsIntelligenceList />
            </TabPanel>
            <TabPanel value="2">
              <AttributionsIntelligenceList />
              {/* <InteractionsIntelligenceList /> */}
              {/* This needs to be AttributionsIntelliegnceList */}
            </TabPanel>
          </TabContext>
        </TabPanel>
        <TabPanel value="2">
          <h2 style={{ textAlign: "center" }}>Create an Attribution</h2>
        </TabPanel>
        <TabPanel value="3">
          <h2 style={{ textAlign: "center" }}>Bulk Search Builder</h2>
          <BulkSearchBuilder />
        </TabPanel>
        <TabPanel value="4">
          <h2 style={{ textAlign: "center" }}>Previous Searches</h2>
          <>Data Grid to go in here</>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
