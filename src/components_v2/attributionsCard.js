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

export default function AttributionsCard(props) {
  const {
    Nominal,
    Organisation,
    Attribution,
    FileHash,
    FoundInsidePhone,
    DateTimeAdded,
    Exhibit,
    CaseRef,
    DeviceUid,
    Pk,
  } = props;

  let DateTimeAddedToQuest = moment(DateTimeAdded).format("MMM Do YYYY");

  const cardStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: "#f05c54",
    color: "white",
    borderRadius: "40px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  const initialParamState = {
    key: randomQuantity(),
    id: uuidv1(),
    identifier: Pk,
    nominal: Nominal,
    organisation: Organisation,
    attribution: Attribution,
    fileHash: FileHash,
    dateTimeAdded: DateTimeAdded,
    exhibit: Exhibit,
    caseRef: CaseRef,
    deviceUid: DeviceUid,
  };

  const [parameters, setParameters] = useState(initialParamState);

  async function saveCapturedAttributionItem() {
    // Build the create query up here.
    setParameters(initialParamState); // I don't know why this works but it does. It forces the state to rerender the compnent thereby casuing the new random ints to be generated.
    console.log(parameters);
    if (!parameters.attribution || !parameters.nominal) return;
    await API.graphql({
      query: createCapturedAttributionMutation,
      variables: { input: parameters },
    });
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Card elevation={8} style={cardStyle}>
        <CardContent>
          <small>{Attribution}</small>
          <Typography variant="h6">
            <Tooltip title="The name saved against this number">
              <ContactPhoneIcon fontSize="small" />
            </Tooltip>
            <b
              style={{
                position: "relative",
                bottom: "2px",
                marginLeft: "10px",
              }}
            >
              {Nominal}
            </b>
          </Typography>
          <MoreHorizIcon onClick={handleOpen} />
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={cardStyle}>
          <Typography variant="h6">
            <b>{Pk}</b>
            <hr />
            <Typography variant="h6">
              <Tooltip title="The name saved against this number">
                <ContactPhoneIcon fontSize="small" />
              </Tooltip>
              <b
                style={{
                  position: "relative",
                  fontSize: "50px",
                  bottom: "2px",
                  marginLeft: "10px",
                }}
              >
                {Nominal}
              </b>
            </Typography>
          </Typography>
          Exhibit - {Exhibit}
          <br />
          <small>
            <i>
              (Contributed by {Organisation} on {DateTimeAddedToQuest})
            </i>
          </small>
          <br />
          Found in seized device - {FoundInsidePhone}
          <br />
          <small>
            <i>(Original file hash - {FileHash})</i>
          </small>{" "}
          <Button sx={{ marginLeft: "15px" }} variant="contained" onClick={""}>
            <DownloadForOfflineIcon />
          </Button>
          <hr />
          Capture in Attributions List?
          <br />
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={saveCapturedAttributionItem}
          >
            <SaveIcon sx={{ marginRight: "5px" }} /> Yes
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={handleClose}
          >
            No
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
