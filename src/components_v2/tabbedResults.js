import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PropTypes from "prop-types";
import ShowInteractionsDataGrid from './showInteractionsDataGrid';
import ShowAttributionsDataGrid from './showAttributionsDataGrid';



const TabbedResults = props => {  

  const {pk} = props;
  const {attributionsData} = props;
  const {interactionsData} = props;

  const [value, setValue] = useState('1');

  const handleResultsChange = (event, newValue) => {
    setValue(newValue);
  };

  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>${node.name}</div>`;
  }, []);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} variant="fullWidth" >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList centered onChange={handleResultsChange} aria-label="lab API tabs example">
            <Tab label="Attributions" value="1" />
            <Tab label="Interactions" value="2" />
            <Tab label="Force Graph View" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ShowAttributionsDataGrid pk={pk} attributionsData={attributionsData} />
        </TabPanel>
        <TabPanel value="2">
          <ShowInteractionsDataGrid pk={pk} interactionsData={interactionsData}/>
        </TabPanel>
        <TabPanel value="3">
          {/* Add the force graph UI into here */}
        </TabPanel>
      </TabContext>
    </Box>
  );
}

TabbedResults.propTypes = {
  pk: PropTypes.string.isRequired,
  attributionsData: PropTypes.array,
  interactionsData: PropTypes.array,
};

export default TabbedResults;


