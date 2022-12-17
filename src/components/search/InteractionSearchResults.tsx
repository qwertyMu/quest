import React, { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import TimelineIcon from "@mui/icons-material/Timeline";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ViewListIcon from "@mui/icons-material/ViewList";

import InteractionsDataGrid from "./results/InteractionsDataGrid";
import TimelineViewContainer from "./TimelineViewContainer";
import InteractionsCardList from "./results/InteractionsCardList";
import resultsStore from "../../datastore/resultsStore";

type ResultsPropType = {
  searchTerm: string;
};

export default function InteractionSearchResults(props: ResultsPropType) {
  const [attributionCount, interactionCount] = resultsStore((s) => [
    s.attributionCount,
    s.interactionCount,
  ]);
  const [value, setValue] = useState("timeline");
  const searchTerm = props.searchTerm;

  const handlePanelChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.5em",
        padding: "0.5em",
      }}
    >
      <TabContext value={value}>
        <TabList
          centered
          onChange={handlePanelChange}
          aria-label="interactions-display-tabs"
        >
          <Tab
            sx={{ color: "white" }}
            icon={<TimelineIcon />}
            label="Timeline View"
            value="timeline"
          />
          <Tab
            sx={{ color: "white" }}
            icon={<RecentActorsIcon />}
            label="Data-card View"
            value="cardlist"
          />
          <Tab
            sx={{ color: "white" }}
            icon={<ViewListIcon />}
            label="Data-grid View"
            value="grid"
          />
        </TabList>

        <TabPanel value="timeline">
          <TimelineViewContainer pk={searchTerm} />
        </TabPanel>
        <TabPanel value="cardlist">
          <InteractionsCardList searchTerm={searchTerm} />
        </TabPanel>
        <TabPanel value="grid">
          <InteractionsDataGrid pk={searchTerm} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
