import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BulkSearchBuilder from './bulkSearchBuilder'
import InteractionsIntelligenceList from './interactionsIntelligenceList'
import AttributionsIntelligenceList from './attributionsIntelligenceList'


export default function TabbedIntelligenceList() {
  const [value, setValue] = useState('1');
  const [attributionsValue, setAttributuonsValue] = useState('1');

  const handleInteractionsChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleAttributionsChange = (event, newValue) => {
    setAttributuonsValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} variant="fullWidth" >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList centered onChange={handleInteractionsChange} aria-label="lab API tabs example">
            <Tab label="Intelligence List" value="1" />
            <Tab label="Create an Attribution" value="2" />
            <Tab label="Bulk Search Builder" value="3" />
            <Tab label="Previous Searches" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <h2 style={{textAlign: "center"}}>Captured Intelligence Lists</h2>
            <TabContext value={attributionsValue} variant="fullWidth" >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList centered onChange={handleAttributionsChange} aria-label="lab API tabs example">
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
            <h2 style={{textAlign: "center"}}>Create an Attribution</h2>
        </TabPanel>
        <TabPanel value="3">
            <h2 style={{textAlign: "center"}}>Bulk Search Builder</h2>
            <BulkSearchBuilder />
        </TabPanel>
        <TabPanel value="4">
            <h2 style={{textAlign: "center"}}>Previous Searches</h2>
            <>Data Grid to go in here</>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
