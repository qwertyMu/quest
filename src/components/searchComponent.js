import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';
import { Button } from '@mui/material';
import ShowAttributions from './showAttributions';
import ShowInteractions from './showInteractions';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function SearchComponent() {
  const [contacts, setContacts] = useState([]); // All the contacts
  const [searchTerm, setSearchTerm] = useState("");

  let searchTermHandler = (e) => { // Handles the search being inputted
    var searchTermInputted = e.target.value;
    setSearchTerm(searchTermInputted);
  }

  const client = new QueryClient();

  function MyFormHelperText() {
    const { focused } = useFormControl() || {};
    const helperText = React.useMemo(() => {
      if (focused) {
        return (
          'Type your query.'
        )
      }
      return 'You can search for Names | Phone Numbers | Email Addresses | Social Media Identifiers | WiFi Access Points etc...';
    }, [focused]);
  
    return <FormHelperText style={{color: "white"}}>{helperText}</FormHelperText>;
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '90%' }}>
        <OutlinedInput placeholder="Please enter text" style={{backgroundColor: "whitesmoke", borderRadius: "12px", color: "#972021"}} onChange={searchTermHandler}/>
        <MyFormHelperText />
      </FormControl>
      <br />
      <br />
      <br />
      {searchTerm !== "" &&
      <QueryClientProvider client={client}>
        <Router>
          
            <Link to="/showAttributions" style={{textDecoration: "none"}}>
              <Button variant='outlined' sx={{ marginRight: '1%', backgroundColor: '#f05c54', color: 'white', border: 'none' }}>
                Attributions
              </Button>
            </Link>
            {/* //Link needs to have something inside to be able to work */}
          
            <Link to="/showInteractions" style={{textDecoration: "none"}}>
              <Button variant='outlined' sx={{ marginRight: '1%', backgroundColor: '#f05c54', color: 'white', border: 'none' }}>
                Interactions
              </Button>
            </Link>
          
            {/* <Link to="/results/tableData/showDataGrid">
              <Button variant='outlined' sx={{ marginRight: '1%', backgroundColor: '#f05c54', color: 'white', border: 'none' }}>
                Data Grid View
              </Button>
            </Link> */}
          
          <br />
            {/* <GlitchSearchComponent /> */}
            
              <Routes>
                <Route path="/showAttributions" element={<ShowAttributions pk={searchTerm} />} />
                <Route path="/showInteractions" element={<ShowInteractions pk={searchTerm}/>} />
                {/* <Route path="/results/tableData/showDataGrid" element={<ShowDataGrid pk={searchTerm}/>} /> */}
              </Routes>
              
            
        </Router>
      </QueryClientProvider>
      }
      {/* <ContactsData contactsData={contacts}/> */}
    </Box>
  );
}
