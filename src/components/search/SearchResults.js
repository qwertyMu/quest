import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { Box, Paper } from "@mui/material";

import { GET_ATTRIBUTIONS, GET_INTERACTIONS } from "../../queries";
import TabbedResults from "../../components_v2/tabbedResults";
import AttributionWordCloud from "../../components/AttributionWordCloud.tsx";
import AttributionsCard from "../../components_v2/attributionsCard";
import InteractionsCard from "../../components_v2/interactionsCard";

import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

import moment from "moment";

import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const SearchResults = (props) => {
  const { pk } = props;

  const [attributionsData, setAttributionsData] = useState([]);
  const [interactionsData, setInteractionsData] = useState([]);
  const [attributionsCount, setAttributionsCount] = useState([]);
  const [interactionsCount, setInteractionsCount] = useState([]);

  function ListAttributions({ pk }) {
    const { loading, error, data } = useQuery(GET_ATTRIBUTIONS, {
      variables: { pk },
    });

    useEffect(() => {
      // save attribution data into state as it changes
      try {
        setAttributionsData(data.listAttributions.items);
      } catch (e) {
        setAttributionsData([]);
      }
    }, [data]);

    if (loading) return <h2>LOADING... </h2>;
    if (error) return `Error! ${error.message}`;

    if (attributionsData.length === 0) return null;
    setAttributionsCount(attributionsData.length)

    return (
      // Unfortunately, we need to keep both of the styles (sx) blocks in these box elements if we intend to keep the wordcloud where it is. 
      <Box sx={{
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        gap: "0.5em",
        padding: "0.5em",
        width: '100%',
      }}>
        <AttributionWordCloud data={attributionsData} />
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            gap: "0.5em",
            padding: "0.5em",
            width: '100%',
            textAlign: 'left'
        }}>
          <Masonry columns={5} spacing={2}>
            {attributionsData.map((attribution, index) => (
              <Paper key={index}>
                <StyledAccordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <Box sx={{
                          float: 'right'
                      }}>
                        <ContactPhoneIcon fontSize="small" sx={{ color: '#1876D1', marginBottom:-0.5 }}/>
                        &nbsp;&nbsp;{index + 1} - <b>{attribution.name}</b> ({attribution.attribution})  
                      </Box>
                    </Typography>
                  </AccordionSummary>                    
                  <AccordionDetails>
                    Added to Quest on; {moment(attribution.datetime_added).format('MMM Do YYYY, h:mma')} 
                    <br/><br/>
                    <AttributionsCard data={attribution} key={index} />
                  </AccordionDetails>
                </StyledAccordion>
              </Paper>
            ))}
          </Masonry>
        </Box>
      </Box>
    );
  }

  function ListInteractions({ pk }){
    //Aug 2022 - This is a working prototype of the query behavious i'm looking for.
    const { loading, error, data } = useQuery(GET_INTERACTIONS, {
      variables: { pk },
    });

    if (loading) return <h2>LOADING... </h2>;
    if (error) return `Error! ${error.message}`;
    if (data !== undefined) {
      console.log("Interactions Data - " + data);
      setInteractionsData(data.listInteractions.items);
      setInteractionsCount(interactionsData.length);
      return (
        <Box sx={{
          justifyContent: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          gap: "0.5em",
          padding: "0.5em",
          width: '100%',
        }}>
          <Masonry columns={5} spacing={2}>
            {interactionsData.map(
              (
                {
                  pk,
                  sk,
                  case_ref,
                  exhibit_ref,
                  device_uid,
                  file_hash,
                  organisation,
                  datetime_added,
                  datetime,
                  local_partner,
                  interaction,
                  direction,
                  duration,
                  status,
                },
                index
              ) => (
                <Paper key={index}>
                  <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>
                        <Box sx={{
                          float: 'left'
                        }}>
                          {status === 'missed' && (<PhoneDisabledIcon fontSize="medium" sx={{ color: 'red', marginBottom:-2 }}/>)}
                          {status === 'answered' && (<PhoneIcon fontSize="medium" sx={{ color: 'green', marginBottom:-2 }}/>)}
                        </Box>
                        <Box sx={{
                          float: 'right'
                        }}>
                          &nbsp;&nbsp;{index + 1} - {status} ({duration})  
                          <br />
                          {moment(datetime).format('MMM Do YYYY, h:mma')} 
                          
                        </Box>
                      </Typography>
                    </AccordionSummary>                    
                    <AccordionDetails>
                      <InteractionsCard
                        key={index}
                        pk={pk}
                        sk={sk}
                        case_ref={case_ref}
                        exhibit_ref={exhibit_ref}
                        device_uid={device_uid}
                        file_hash={file_hash}
                        organisation={organisation}
                        datetime_added={datetime_added}
                        datetime={datetime}
                        local_partner={local_partner}
                        interaction={interaction}
                        direction={direction}
                        duration={duration}
                        status={status}
                      />
                    </AccordionDetails>
                  </StyledAccordion>
                </Paper>
              )
            )}
          </Masonry>
        </Box>
      );
    }
  }

  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box sx={{
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        gap: "0.5em",
        padding: "0.5em",
      }}>
        <Typography sx={{
          color:'white', 
          backgroundColor:'#f05c54', 
          paddingTop:'0.5em',
          paddingBottom: '0.5em',
          paddingLeft: '5em',
          paddingRight: '5em', 
          borderRadius:'0.3em',
          fontSize:'1.2em',
        }}>
          <b>Attributions</b> to {pk} 
          <Box sx={{
            backgroundColor: '#72f278',
            float: 'right',
            paddingLeft: '0.3em',
            paddingRight: '0.3em',
            borderRadius: '0.4em',
            color: '#525252'
          }}>
            {attributionsCount}
          </Box>
          <hr/><small>What other devices in the Quest database have attributed to your identifier</small>
        </Typography>
        <ListAttributions pk={pk} />
        <Typography sx={{
          color:'white', 
          backgroundColor:'#f05c54', 
          paddingTop:'0.5em',
          paddingBottom: '0.5em',
          paddingLeft: '5em',
          paddingRight: '5em', 
          borderRadius:'0.3em',
          fontSize:'1.2em',
        }}>
          <b>Interactions</b> with {pk} 
          <Box sx={{
            backgroundColor: '#72f278',
            float: 'right',
            paddingLeft: '0.3em',
            paddingRight: '0.3em',
            borderRadius: '0.5em',
            color: '#525252'
          }}>
            {interactionsCount}
          </Box>
          <hr/><small>Interactions between your identifier and other devices in the Quest database</small>
        </Typography>
        <ListInteractions pk={pk} />
      </Box>
      {attributionsData !== [] && (
        <TabbedResults
          pk={pk}
          attributionsData={attributionsData}
          interactionsData={interactionsData}
        />
      )}
    </div>
  );
};

export default SearchResults;
