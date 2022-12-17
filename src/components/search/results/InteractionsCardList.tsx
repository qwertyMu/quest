import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import moment from "moment";

import { Masonry } from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import { AccordionDetails, AccordionSummary } from "@mui/material";

import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";

import { GET_INTERACTIONS } from "../../../queries";
import resultsState from "../../../datastore/resultsStore";
import StyledAccordion from "../../generic/StyledAccordion";
import InteractionsCard from "./InteractionsCard";

type CardListProps = {
  searchTerm: String;
};

export default function InteractionsCardList(props: CardListProps) {
  const [interactions, setInteractions, setInteractionCount] = resultsState(
    (s) => [s.interactions, s.setInteractions, s.setInteractionCount]
  );
  const { loading, error, data } = useQuery(GET_INTERACTIONS, {
    variables: { pk: props.searchTerm },
  });

  useEffect(() => {
    try {
      setInteractions(data.listInteractions.items);
      setInteractionCount(data.listInteractions.items.length);
    } catch (e) {
      setInteractions([]);
      setInteractionCount(0);
    }
  }, [data, setInteractions, setInteractionCount]);

  if (loading) return <h2>LOADING... </h2>;
  if (error) return <h2>`Error! ${error.message}`</h2>;
  if (data === undefined) return null;

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
        {interactions.map(
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
                      {moment(datetime).format("MMM Do YYYY, h:mma")}
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
