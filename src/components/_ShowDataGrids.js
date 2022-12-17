import React, { useState } from "react";

import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import ShowAttributionsDataGrid from "./_showAttributionsDataGrid";
import ShowInteractionsDataGrid from "./search/results/InteractionsDataGrid";

export default function ShowDataGrids(props) {
  const [value, setValue] = useState("1");

  const handlePanelChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          centered
          onChange={handlePanelChange}
          aria-label="lab API tabs example"
        >
          <Tab sx={{ color: "white" }} label="Attributions" value="1" />
          <Tab sx={{ color: "white" }} label="Interactions" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <ShowAttributionsDataGrid pk={props.pk} />
      </TabPanel>
      <TabPanel value="2">
        <ShowInteractionsDataGrid pk={props.pk} />
      </TabPanel>
    </TabContext>
  );
}
