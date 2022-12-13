import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import moment from "moment";

import { Box, Paper, Typography } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";

import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";

import { GET_ATTRIBUTIONS, GET_INTERACTIONS } from "../../queries";

import AttributionWordCloud from "../../components/AttributionWordCloud.tsx";
import AttributionsList from "./results/AttributionsList";

import InteractionsCard from "./results/InteractionsCard";

const SearchResults = (props) => {
  const { pk } = props;

  const [interactionsData, setInteractionsData] = useState([]);

  function ListInteractions({ pk }) {
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
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5em",
            padding: "0.5em",
            width: "100%",
          }}
        >
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
                        <Box
                          sx={{
                            float: "left",
                          }}
                        >
                          {status === "missed" && (
                            <PhoneDisabledIcon
                              fontSize="medium"
                              sx={{ color: "red", marginBottom: -2 }}
                            />
                          )}
                          {status === "answered" && (
                            <PhoneIcon
                              fontSize="medium"
                              sx={{ color: "green", marginBottom: -2 }}
                            />
                          )}
                        </Box>
                        <Box
                          sx={{
                            float: "right",
                          }}
                        >
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
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
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
          padding:'0.2em', 
          borderRadius:'0.3em',
          fontSize:'1.2em',
        }}>
          Attributions - {attributionsCount}<hr/><small>What other devices in the Quest database have attributed to your identifier</small>
        </Typography>
        <AttributionsList searchTerm={pk} />
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
          Interactions - {interactionsCount}<hr/><small>Interactions between your identifier and other devices in the Quest database</small>
        </Typography>
        <ListInteractions pk={pk} />
      </Box>
    </div>
  );
};

export default SearchResults;
