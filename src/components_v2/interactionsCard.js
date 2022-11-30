import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { API } from "aws-amplify";
import moment from "moment";

import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
    exhibit_ref: Exhibit,
    organisation: Organisation,
    file_hash: FileHash,
    datetime_added: DateTimeAddedToQuest,
    case_ref: CaseRef,
    device_uid: DeviceUid,
    status: Status,
  };
  const [parameters, setParameters] = useState(initialParamState);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function saveCapturedInteractionItem() {
    // Build the create query up here.
    setParameters(initialParamState); // I don't know why this works but it does. It forces the state to rerender the compnent thereby casuing the new random ints to be generated.
    console.log(parameters);
    if (!parameters.device_uid) return;
    await API.graphql({
      query: createCapturedInteractionMutation,
      variables: { input: parameters },
    });
    console.log("Card saved into Intel Drawer in interactionsCard.js");
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

  function CheckDirection() {
    if (Direction === "OUTBOUND") {
      return <PhoneForwardedIcon fontSize="small" />;
    } else {
      return <PhoneCallbackIcon fontSize="small" />;
    }
  }

  return (
    <>
      <Card
        elevation={8}
        sx={{
          color: "black",
          width: "18em",
          height: "8em",
          border: "2px solid black",
          borderRadius: "15px",
          float: "left",
        }}
      >
        <CardContent>
          <small>{Interaction}</small>
          <Typography variant="h6">
            {<CheckDirection sx={{ float: "left" }} />}
            <b
              style={{ position: "relative", bottom: "3px", marginLeft: "5px" }}
            >
              {Status}
            </b>
          </Typography>
          <MoreHorizIcon onClick={handleOpen} />
          <br />
          {Duration}
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
