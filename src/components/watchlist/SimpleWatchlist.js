import React, { useState } from "react";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

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
      <TabContext value={attributionsValue} variant="fullWidth">
        <TabPanel value="1">
          <InteractionsIntelligenceList />
        </TabPanel>
        <TabPanel value="2">
          <AttributionsIntelligenceList />
        </TabPanel>
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
      </TabContext>
    </Box>
  );
}
