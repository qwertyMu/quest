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
import PropTypes from "prop-types";

import { createCapturedInteraction as createCapturedInteractionMutation } from "../graphql/mutations";

export default function InteractionsCard(props) {
  const {
    classes,
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
    localPartner: LocalPartner,
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#f05c54",
    color: "white",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  function CheckDirection() {
    if (Direction == "OUTBOUND") {
      return (
        //   <Typography className={classes.body}>
        //     <PhoneForwardedIcon /><i style={{position: "relative", bottom: "8px"}}>{Direction}</i>

        //   </Typography>
        <PhoneForwardedIcon fontSize="small" />
      );
    } else {
      return (
        //   <Typography className={classes.body}>
        //     <PhoneCallbackIcon /><i style={{position: "relative", bottom: "8px"}}>{Direction}</i>
        //   </Typography>
        <PhoneCallbackIcon fontSize="small" />
      );
    }
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        className={classes.interactionCard}
        elevation={8}
        style={{ color: "white" }}
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
        <Box sx={style}>
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

InteractionsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.string,
  Interaction: PropTypes.string.isRequired,
  Direction: PropTypes.string.isRequired,
  LocalPartner: PropTypes.string.isRequired,
  Duration: PropTypes.string.isRequired,
  DateTime: PropTypes.string.isRequired,
  Exhibit: PropTypes.string.isRequired,
  Organisation: PropTypes.string.isRequired,
  FileHash: PropTypes.string.isRequired,
  DateTimeAdded: PropTypes.string.isRequired,
  CaseRef: PropTypes.string.isRequired,
  DeviceUid: PropTypes.string.isRequired,
  Status: PropTypes.string.isRequired,
  Pk: PropTypes.string.isRequired,
};
