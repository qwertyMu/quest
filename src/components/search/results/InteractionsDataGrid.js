import React, { useState } from "react";
import moment from "moment";

import { v1 as uuidv1 } from "uuid";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Modal, Box } from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";

import InteractionsModalLogic from "../../interactionsModalLogic";
import useResultsStore from "../../../datastore/resultsStore";

export default function ShowInteractionsDataGrid(props) {
  const interactions = useResultsStore((s) => s.interactions);

  const initialParamState = {
    key: "",
    id: "",
    identifier: "",
    interaction: "",
    direction: "",
    partner: "",
    duration: "",
    datetime: "",
    exhibit: "",
    organisation: "",
    file_name: "",
    datetime_added: "",
  };

  const [parameters, setParameters] = useState(initialParamState);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const handleOnCellClick = (params) => {
    console.log(params);
    const selectedRow = params.row;
    setParameters(selectedRow);
    handleOpen();
  };

  const columns = [
    // { field: "interaction", headerName: "Interaction", width: 130, }, No longer returned from the API
    { field: "status", headerName: "Status", width: 130 },
    { field: "direction", headerName: "Direction", width: 130 },
    // { field: "partner", headerName: "Partner", width: 130 }, No longer returned from the API
    { field: "duration", headerName: "Duration", width: 130 },
    { field: "datetime", headerName: "Date/Time", width: 180 },
    { field: "exhibit_ref", headerName: "Exhibit Number", width: 130 },
    { field: "organisation", headerName: "Organisation", width: 180 },
    { field: "case_ref", headerName: "Case Ref", width: 130 },
    { field: "file_hash", headerName: "Orignial File", width: 380 },
    { field: "device_uid", headerName: "Device Hash", width: 180 },
    { field: "datetime_added", headerName: "Date/Time Added", width: 180 },
  ];
  const rows = interactions.map(
    (
      {
        status,
        direction,
        duration,
        datetime,
        exhibit_ref,
        organisation,
        case_ref,
        file_hash,
        device_uid,
        datetime_added,
      },
      index
    ) => {
      let DateTimeOfInteraction = moment(datetime).format("MMM Do YY, h:mma");
      let DateTimeAddedToQuest =
        moment(datetime_added).format("MMM Do YY, h:mma");
      return {
        id: uuidv1(),
        status: status,
        direction: direction,
        duration: duration,
        datetime: DateTimeOfInteraction,
        exhibit_ref: exhibit_ref,
        organisation: organisation,
        case_ref: case_ref,
        file_hash: file_hash,
        device_uid: device_uid,
        datetime_added: DateTimeAddedToQuest,
      };
    }
  );

  return (
    <React.Fragment>
      <DataGrid
        style={{
          color: "white",
          backgroundImage: "linear-gradient(#ec483e, #f05c54)",
        }}
        rows={rows}
        columns={columns}
        autoHeight
        onCellClick={handleOnCellClick}
      />
      {/* //Data Grid needs the autoheight property to render */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InteractionsModalLogic pk={"pewpewpew"} parameters={parameters} />
          <Button variant="contained">
            <SaveIcon />
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
