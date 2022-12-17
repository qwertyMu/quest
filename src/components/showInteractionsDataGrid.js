import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useQuery } from '@apollo/client';
import { useState } from "react";
import { GET_INTERACTIONS } from "../queries";
import moment from "moment";
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { API } from 'aws-amplify'
import { createCapturedInteraction as createCapturedInteractionMutation } from '../graphql/mutations';
import { v1 as uuidv1 } from 'uuid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InteractionsModalLogic from "./interactionsModalLogic";
import SaveIcon from '@mui/icons-material/Save';
import { randomQuantity } from "@mui/x-data-grid-generator";

const ShowInteractionsDataGrid = props => {  

  const {pk} = props;

  const initialParamState = { 
    key: '',
    id: '',
    identifier: '',
    interaction: '',
    direction: '',
    partner: '',
    duration: '',
    datetime: '',
    exhibit: '',
    organisation: '',
    file_name: '',
    datetime_added: '', 
  }

  const [parameters, setParameters] = useState(initialParamState);

  async function createCapturedInteractionItem() {
    // Build the create query up here.
    if (!parameters.interaction || !parameters.partner) return;
      await API.graphql({ query: createCapturedInteractionMutation, variables: { input: parameters } }); 
      console.log("Row saved in showInteractionsDataGrid");
      setParameters(initialParamState);   
    handleClose();
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f05c54',
    color: 'white',
    borderRadius: '10px', 
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

  const handleOnCellClick = (params) => {
    console.log(params);
    const selectedRow = params.row;
    setParameters(selectedRow);
    setParameters(parameters => { return {...parameters, identifier:pk }}); //this adds identifier (i.e. user search term) into the selectedParam object
    console.log(parameters);
    handleOpen();
  };

  const { loading, error, data } = useQuery(GET_INTERACTIONS, {
    variables: { pk },
  });
  
  if (loading) return <h2>LOADING... </h2>;
  if (error) return `Error! ${error}`;
  if (data !== undefined){
  }
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
  const rows = data.listInteractions.items.map(({ status, direction, duration, datetime, exhibit_ref, organisation, case_ref, file_hash, device_uid, datetime_added }, index) => {
    let DateTimeOfInteraction = moment(datetime).format('MMM Do YY, h:mma')
    let DateTimeAddedToQuest = moment(datetime_added).format('MMM Do YY, h:mma')
    return({
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
    })
  });

  return(
    <React.Fragment>
      <InfoOutlinedIcon fontSize="tiny" sx={{position: "relative", bottom: "-2px"}}/><i> Select a row for more context;</i>
      <DataGrid 
        style={{color: "white", backgroundImage: "linear-gradient(#ec483e, #f05c54)"}} 
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
          <InteractionsModalLogic pk={pk} parameters={parameters} />
          <Button variant="contained" onClick={createCapturedInteractionItem}>
            <SaveIcon />
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default ShowInteractionsDataGrid;