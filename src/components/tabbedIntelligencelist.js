import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BulkSearchBuilder from './bulkSearchBuilder'
import IntelligenceList from './intelligenceList'


export default function TabbedIntelligenceList() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} variant="fullWidth" >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList centered onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Intelligence List" value="1" />
            <Tab label="Create an Attribution" value="2" />
            <Tab label="Bulk Search Builder" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <h2 style={{textAlign: "center"}}>My Intelligence List</h2>
            <IntelligenceList />
        </TabPanel>
        <TabPanel value="2">
            <h2 style={{textAlign: "center"}}>Create an Attribution</h2>
        </TabPanel>
        <TabPanel value="3">
            <h2 style={{textAlign: "center"}}>Bulk Search Builder</h2>
            <BulkSearchBuilder />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
