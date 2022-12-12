import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { API } from "aws-amplify";
import moment from "moment";

import SaveIcon from '@mui/icons-material/Save';
import OutboxIcon from '@mui/icons-material/Outbox';

import { randomQuantity } from "@mui/x-data-grid-generator";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Box, Modal } from "@mui/material";

import { createCapturedInteraction as createCapturedInteractionMutation } from "../graphql/mutations";

export default function InteractionsCard(props) {
  const {
    interaction,
    direction,
    local_partner,
    duration,
    datetime,
    exhibit_ref,
    organisation,
    file_hash,
    datetime_added,
    case_ref,
    device_uid,
    status,
    pk,
  } = props;

  let DateTimeOfInteraction = moment(datetime).format("MMM Do YY, h:mma");
  let DateTimeAddedToQuest = moment(datetime_added).format("MMM Do YY, h:mma");

  const initialParamState = {
    key: randomQuantity(),
    id: uuidv1(),
    identifier: pk,
    interaction: interaction,
    direction: direction,
    local_partner: local_partner,
    duration: duration,
    datetime: DateTimeOfInteraction,
    exhibit_ref: exhibit_ref,
    organisation: organisation,
    file_hash: file_hash,
    datetime_added: DateTimeAddedToQuest,
    case_ref: case_ref,
    device_uid: device_uid,
    status: status,
  };
  const [parameters, setParameters] = useState(initialParamState);

  async function saveCapturedInteractionItem() {
    // Build the create query up here.
    setParameters(initialParamState); // I don't know why this works but it does. It forces the state to rerender the compnent thereby casuing the new random ints to be generated.
    console.log(parameters);
    if (parameters.device_uid == "") return;
    await API.graphql({
      query: createCapturedInteractionMutation,
      variables: { input: parameters },
    });
    console.log("Card saved in interactionsCard");
    handleClose();
  }

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#f05c54",
    color: "black",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openForceGraph, setOpenForceGraph] = useState(false);
  const handleOpenForceGraph = () => setOpenForceGraph(true);
  const handleCloseForceGraph = () => setOpenForceGraph(false);

  return (
    <>
      <Card
        elevation={8}
        sx={{
          color: "#ebebeb",
          width: "18em",
          borderRadius: "6px",
          backgroundColor: "#595959",
        }}
      >
        <CardContent sx={{
          textAlign: 'left',
        }}>
          <Typography variant="h7">
            <b>
              Case Reference: {case_ref}
            </b>
          </Typography>
          <br/>
          Supplied by: {organisation}
          <br/>
          Exhibit Number: {exhibit_ref}
          <br/> 
          Added to Quest: {DateTimeAddedToQuest}
          <br/>
          <SaveIcon onClick={handleOpen} sx={{color: '#f05c54', float: 'right', marginBottom: '0.5em'}}/>
          <OutboxIcon onClick={handleOpenForceGraph} sx={{color: '#f05c54', float: 'right', marginBottom: '0.5em'}}/>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <h4>
            Save interaction with <b>{interaction}</b> into My Captured
            Interactions List
          </h4>
          <Button
            variant="contained"
            sx={{ margin: "5px", borderRadius: "20px" }}
            onClick={saveCapturedInteractionItem}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "5px", borderRadius: "20px" }}
            onClick={handleClose}
          >
            No
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openForceGraph}
        onClose={handleCloseForceGraph}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <h4>
            Send to Relationship Graph
          </h4>
          <Button
            variant="contained"
            sx={{ margin: "5px", borderRadius: "20px" }}
            onClick={''}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "5px", borderRadius: "20px" }}
            onClick={handleCloseForceGraph}
          >
            No
          </Button>
        </Box>
      </Modal>
    </>
  );
}
