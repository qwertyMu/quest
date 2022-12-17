import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { v1 as uuidv1 } from "uuid";
import { API } from "aws-amplify";

import { randomQuantity } from "@mui/x-data-grid-generator";
import { Card, CardContent, Button } from "@mui/material";
import { Box, Modal } from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import OutboxIcon from "@mui/icons-material/Outbox";

import { createCapturedAttribution as createCapturedAttributionMutation } from "../../../graphql/mutations";

export default function AttributionsCard(props) {
  const navigate = useNavigate();
  const { case_ref, exhibit_ref, device_uid, file_hash } = props.data;
  const { organisation, datetime_added } = props.data;
  const { pk, name, attribution } = props.data;

  let DateTimeAddedToQuest = moment(datetime_added).format("MMM Do YY, h:mma");

  const initialParamState = {
    key: randomQuantity(),
    id: uuidv1(),
    identifier: pk,
    name: name,
    organisation: organisation,
    attribution: attribution,
    file_hash: file_hash,
    datetime_added: DateTimeAddedToQuest,
    exhibit_ref: exhibit_ref,
    case_ref: case_ref,
    device_uid: device_uid,
  };

  const [parameters, setParameters] = useState(initialParamState);

  async function saveCapturedAttributionItem() {
    // Build the create query up here.
    setParameters(initialParamState); // I don't know why this works but it does. It forces the state to rerender the compnent thereby casuing the new random ints to be generated.
    if (parameters.device_uid === "") return;
    await API.graphql({
      query: createCapturedAttributionMutation,
      variables: { input: parameters },
    });
    console.log("Card saved in attributionsCard");
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

  return (
    <React.Fragment>
      <Card
        elevation={8}
        sx={{
          color: "#ebebeb",
          width: "18em",
          borderRadius: "6px",
          backgroundColor: "#595959",
        }}
      >
        <CardContent
          sx={{
            textAlign: "left",
          }}
        >
          Supplied by: {organisation}
          <br />
          Case Reference: {case_ref}
          <br />
          Exhibit: {exhibit_ref}
          <br />
          Uploaded: {DateTimeAddedToQuest}
          <br />
          Device:
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Button variant="contained">{device_uid}</Button>
          </Box>
          <br/>
          <SaveIcon
            onClick={handleOpen}
            sx={{ color: "#f05c54", float: "right", marginBottom: "0.5em" }}
          />
          <OutboxIcon
            onClick={() => setOpenForceGraph(true)}
            sx={{ color: "#f05c54", float: "right", marginBottom: "0.5em" }}
          />
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <h4>Save attribution into Watchlist?</h4>
          <Button
            variant="contained"
            sx={{ margin: "5px", borderRadius: "20px" }}
            onClick={saveCapturedAttributionItem}
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
        onClick={() => setOpenForceGraph(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <h4>Send to Relationship Map</h4>
          <Button
            variant="contained"
            sx={{ margin: "5px", borderRadius: "20px" }}
            onClick={() => navigate("/network")}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "5px", borderRadius: "20px" }}
            onClick={() => setOpenForceGraph(false)}
          >
            No
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
