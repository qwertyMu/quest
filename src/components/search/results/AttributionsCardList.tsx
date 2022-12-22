import React, { useEffect } from "react";

import { Masonry } from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import { AccordionDetails, AccordionSummary } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

import resultsState from "../../../datastore/resultsStore";
import StyledAccordion from "../../generic/StyledAccordion";
import AttributionsCard from "./AttributionsCard";

type CardListProps = {
  searchTerm: String;
};

export default function AttributionsCardList(props: CardListProps) {
  const [attributions] = resultsState((s) => [s.attributions]);

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
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5em",
          padding: "0.5em",
          width: "100%",
          textAlign: "left",
        }}
      >
        <Masonry columns={5} spacing={2}>
          {attributions.map((attribution, index) => (
            <Paper key={index}>
              <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    <Box
                      sx={{
                        float: "right",
                      }}
                    >
                      <ContactPhoneIcon
                        fontSize="small"
                        sx={{ color: "#1876D1", marginBottom: -0.5 }}
                      />
                      &nbsp;&nbsp;{index + 1} - <b>{attribution.name}</b> (
                      {attribution.attribution})
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
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
