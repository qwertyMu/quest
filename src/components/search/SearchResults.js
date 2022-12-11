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

const SearchResults = (props) => {
  const { pk } = props;

  const [attributionsData, setAttributionsData] = useState([]);
  const [interactionsData, setInteractionsData] = useState([]);

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

    return (
      <Box
        sx={{
          width: "calc(100vw - 16px)",
          margin: "4px 8px 0 8px",
          padding: "4px 16px",
          // borderRadius: "8px",
        }}
      >
        <AttributionWordCloud data={attributionsData} />
        <Box
          sx={{
            padding: "0.5em",
            // height: "20em",
            display: "flex",
            gap: "0.5em",
            justifyContent: 'center',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {attributionsData.map((attribution, index) => (
            <AttributionsCard data={attribution} key={index} />
          ))}
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
                        Pk={pk}
                        Sk={sk}
                        CaseRef={case_ref}
                        Exhibit={exhibit_ref}
                        DeviceUid={device_uid}
                        FileHash={file_hash}
                        Organisation={organisation}
                        DateTimeAdded={datetime_added}
                        DateTime={datetime}
                        LocalPartner={local_partner}
                        Interaction={interaction}
                        Direction={direction}
                        Duration={duration}
                        Status={status}
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

  const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

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
        <ListAttributions pk={pk} />
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
