import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { API } from "aws-amplify";
import moment from "moment";

import SaveIcon from '@mui/icons-material/Save';

import { randomQuantity } from "@mui/x-data-grid-generator";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Box, Modal } from "@mui/material";

import { createCapturedInteraction as createCapturedInteractionMutation } from "../graphql/mutations";

export default function InteractionsCard(props) {
  const {
    Interaction,
    Direction,
    LocalPartner,
    Duration,
    DateTime,
    Exhibit,
    Organisation,
    FileHash,
    DateTimeAdded,
    CaseRef,
    DeviceUid,
    Status,
    Pk,
  } = props;

  let DateTimeOfInteraction = moment(DateTime).format("MMM Do YY, h:mma");
  let DateTimeAddedToQuest = moment(DateTimeAdded).format("MMM Do YY, h:mma");

  const initialParamState = {
    key: randomQuantity(),
    id: uuidv1(),
    identifier: Pk,
    interaction: Interaction,
    direction: Direction,
    local_partner: LocalPartner,
    duration: Duration,
    datetime: DateTimeOfInteraction,
    exhibit: Exhibit,
    organisation: Organisation,
    file_hash: FileHash,
    datetime_added: DateTimeAddedToQuest,
    caseRef: CaseRef,
    deviceUid: DeviceUid,
    status: Status,
  };
  const [parameters, setParameters] = useState(initialParamState);

  async function saveCapturedInteractionItem() {
    // Build the create query up here.
    setParameters(initialParamState); // I don't know why this works but it does. It forces the state to rerender the compnent thereby casuing the new random ints to be generated.
    console.log(parameters);
    if (!parameters.interaction || !parameters.partner) return;
    await API.graphql({
      query: createCapturedInteractionMutation,
      variables: { input: parameters },
    });
    console.log("Card saved in interactionsCard");
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

  return (
    <>
      <Card
        elevation={8}
        sx={{
          color: "black",
          width: "18em",
          borderRadius: "6px",
        }}
      >
        <CardContent sx={{
          textAlign: 'left',
        }}>
          <Typography variant="h7">
            <b>
              Case Reference: {CaseRef}
            </b>
          </Typography>
          <br/>
          Supplied by: {Organisation}
          <br/>
          Exhibit Number: {Exhibit}
          <br/>
          Added to Quest: {DateTimeAddedToQuest}
          <br/>
          <SaveIcon onClick={handleOpen} sx={{color: '#f05c54', float: 'right', marginBottom: '0.5em'}}/>
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
            Save interaction with <b>{Interaction}</b> into My Captured
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
    </>
  );
}
