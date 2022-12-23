import React, { useState } from "react";

import { Box, Typography, Tooltip, Tab, Divider } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import RecentActorsIcon from "@mui/icons-material/RecentActors";
import TimelineIcon from "@mui/icons-material/Timeline";
import ViewListIcon from "@mui/icons-material/ViewList";

import InteractionsDataGrid from "./results/InteractionsDataGrid";
import InteractionsCardList from "./results/InteractionsCardList";
import resultsStore from "../../datastore/resultsStore";
import TimelineView from "./results/TimelineView";

type ResultsPropType = {
  searchTerm: string;
};

export default function InteractionSearchResults(props: ResultsPropType) {
  const [interactionCount] = resultsStore((s) => [s.interactionCount]);
  const [value, setValue] = useState("timeline");
  const searchTerm = props.searchTerm;

  const handlePanelChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  if (!interactionCount) return null;

  return (
    <TabContext value={value}>
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
        <Divider sx={{ background: "darkgrey", width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Tooltip
            title="The names associated to this identifier by devices found in the quest database."
            arrow
            placement="right"
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "1.2em",
                fontFamily: "monospace",
              }}
            >
              {`Interactions x${interactionCount}`}
            </Typography>
          </Tooltip>

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
        </Box>
        <TabPanel sx={{ margin: 0, padding: 0 }} value="timeline">
          <TimelineView searchTerm={searchTerm} />
        </TabPanel>
        <TabPanel sx={{ margin: 0, padding: 0 }} value="cardlist">
          <InteractionsCardList searchTerm={searchTerm} />
        </TabPanel>
        <TabPanel sx={{ margin: 0, padding: 0 }} value="grid">
          <InteractionsDataGrid pk={searchTerm} />
        </TabPanel>
      </Box>
    </TabContext>
  );
}
