import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import moment from "moment";

import { Masonry } from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import { AccordionDetails, AccordionSummary } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

import { GET_ATTRIBUTIONS } from "../../../queries";
import AttributionWordCloud from "./AttributionWordCloud";
import resultsState from "../../../datastore/resultsStore";
import StyledAccordion from "../../generic/StyledAccordion";
import AttributionsCard from "./AttributionsCard";

type AttributionListProps = {
  searchTerm: String;
};

export default function AttributionsList(props: AttributionListProps) {
  const [attributions, setAttributions, setAttributionCount] = resultsState(
    (s) => [s.attributions, s.setAttributions, s.setAttributionCount]
  );

  const { loading, error, data } = useQuery(GET_ATTRIBUTIONS, {
    variables: { pk: props.searchTerm },
  });

  // save attribution data into state as it changes
  useEffect(() => {
    try {
      setAttributions(data.listAttributions.items);
      setAttributionCount(data.listAttributions.items.length);
    } catch (e) {
      setAttributions([]);
      setAttributionCount(0);
    }
  }, [data, setAttributions, setAttributionCount]);

  if (loading) return <h2>LOADING... </h2>;
  if (error) return `Error! ${error.message}`;

  if (attributions.length === 0) return null;

  return (
    <Box
      sx={{
        width: "calc(100vw - 16px)",
        margin: "4px 8px 0 8px",
        padding: "4px 16px",
        // borderRadius: "8px",
      }}
    >
      <AttributionWordCloud data={attributions} />
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
            {attributions.map(
              (
                attribution,
                index
              ) => (
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
                    <AttributionsCard data={attributions} key={index} />
                  </AccordionDetails>
                </StyledAccordion>
              </Paper>
            ))}
          </Masonry>
        </Box>
      </Box>
  );
}
