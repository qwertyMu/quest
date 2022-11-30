import React from "react";
import { v1 as uuidv1 } from "uuid";
import { API } from "aws-amplify";
import { useState } from "react";
import moment from "moment";

import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import SaveIcon from "@mui/icons-material/Save";

import { Card, CardContent, Typography, Button } from "@mui/material";
import { Tooltip, Box, Modal } from "@mui/material";

import { createCapturedAttribution as createCapturedAttributionMutation } from "../graphql/mutations";

import { randomQuantity } from "@mui/x-data-grid-generator";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  // Typography,
} from '@mui/material';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function AttributionsCard(props) {
  const { case_ref, exhibit_ref, device_uid, file_hash } = props.data;
  const { organisation, datetime_added } = props.data;
  const { pk, name, attribution } = props.data;

  let dateTimeAddedToQuest = moment(datetime_added).format("MMM Do YYYY");

  const cardStyle = {
    minWidth: "18em",
    height: "5em",
    bgcolor: "#f05c54",
    color: "black",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
  }));

  const initialParamState = {
    key: randomQuantity(),
    id: uuidv1(),
    identifier: pk,
    name: name,
    organisation: organisation,
    attribution: attribution,
    exhibit_ref: exhibit_ref,
    case_ref: case_ref,
    file_hash: file_hash,
    device_uid: device_uid,
    datetime_added: dateTimeAddedToQuest,
  };

  const [parameters, setParameters] = useState(initialParamState);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function saveCapturedAttributionItem() {
    setParameters(initialParamState);
    if (!parameters.device_uid) return;
    await API.graphql({
      query: createCapturedAttributionMutation,
      variables: { input: parameters },
    });
    console.log("Card saved into Intel Drawer from AttributionsCard.js");
    handleClose();
  }

  return (
    <Box sx={{ width: 1300, minHeight: 100 }}>
    <Masonry columns={7} spacing={1}>
      {heights.map((height, index) => (
        <Paper key={index}>
          <StyledAccordion sx={{ minHeight: height }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion {index + 1}</Typography>
            </AccordionSummary>
            <AccordionDetails>Contents</AccordionDetails>
          </StyledAccordion>
        </Paper>
      ))}
    </Masonry>
  </Box>
    // <React.Fragment>
    //   <Card elevation={8} style={cardStyle}>
    //     <CardContent>
    //       <small>{attribution}</small>
    //       <Typography variant="h6">
    //         <Tooltip title="The name saved against this number">
    //           <ContactPhoneIcon fontSize="small" />
    //         </Tooltip>
    //         <b
    //           style={{
    //             position: "relative",
    //             bottom: "2px",
    //             marginLeft: "10px",
    //           }}
    //         >
    //           {name}
    //         </b>
    //       </Typography>
    //       <MoreHorizIcon onClick={handleOpen} />
    //     </CardContent>
    //   </Card>

    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={cardStyle}>
    //       <Typography variant="h6">
    //         <b>{pk}</b>
    //         <hr />
    //         <Typography variant="h6">
    //           <Tooltip title="The name saved against this number">
    //             <ContactPhoneIcon fontSize="small" />
    //           </Tooltip>
    //           <b
    //             style={{
    //               position: "relative",
    //               fontSize: "50px",
    //               bottom: "2px",
    //               marginLeft: "10px",
    //             }}
    //           >
    //             {name}
    //           </b>
    //         </Typography>
    //       </Typography>
    //       Exhibit - {exhibit_ref}
    //       <br />
    //       <small>
    //         <i>
    //           (Contributed by {organisation} on {dateTimeAddedToQuest})
    //         </i>
    //       </small>
    //       <br />
    //       Found in seized device - {device_uid}
    //       <br />
    //       <small>
    //         <i>(Original file hash - {file_hash})</i>
    //       </small>{" "}
    //       <Button sx={{ marginLeft: "15px" }} variant="contained" onClick={""}>
    //         <DownloadForOfflineIcon />
    //       </Button>
    //       <hr />
    //       Capture in Attributions List?
    //       <br />
    //       <Button
    //         variant="contained"
    //         sx={{ margin: "5px" }}
    //         onClick={saveCapturedAttributionItem}
    //       >
    //         <SaveIcon sx={{ marginRight: "5px" }} /> Yes
    //       </Button>
    //       <Button
    //         variant="contained"
    //         sx={{ margin: "5px" }}
    //         onClick={handleClose}
    //       >
    //         No
    //       </Button>
    //     </Box>
    //   </Modal>
    // </React.Fragment>
  );
}
