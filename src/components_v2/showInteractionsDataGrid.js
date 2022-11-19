import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useState } from "react";
import moment from "moment";
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { API } from 'aws-amplify'
import { createCapturedInteraction as createCapturedInteractionMutation } from '../graphql/mutations';
import { v1 as uuidv1 } from 'uuid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InteractionsModalLogic from "../components/interactionsModalLogic";
import SaveIcon from '@mui/icons-material/Save';
import { randomQuantity } from "@mui/x-data-grid-generator";

const ShowInteractionsDataGrid = props => {  

  const {pk} = props;
  const {interactionsData} = props;
  console.log(interactionsData)

  const initialParamState = { 
    key: '',
    id: '',
    identifier: '',
    interaction: '',
    direction: '',
    local_partner: '',
    duration: '',
    datetime: '',
    exhibit_ref: '',
    organisation: '',
    file_hash: '',
    datetime_added: '',
    case_ref: '', 
    status: '',
    device_uid: '',
  }

  const [parameters, setParameters] = useState(initialParamState);

  async function createCapturedInteractionItem() {
    // Build the create query up here.
    if (!parameters.device_uid) return;
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

  const columns = [
    { field: "interaction", headerName: "Interaction", width: 130, },
    { field: "direction", headerName: "Direction", width: 130 },
    { field: "local_partner", headerName: "Partner", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "duration", headerName: "Duration", width: 130 },
    { field: "datetime", headerName: "Date/Time of Interaction", width: 180 },
    { field: "organisation", headerName: "Organisation", width: 180 },
    { field: "exhibit_ref", headerName: "Exhibit Number", width: 130 },
    { field: "case_ref", headerName: "Case Ref", width: 130 },
    { field: "file_hash", headerName: "File Hash", width: 360 },
    { field: "device_uid", headerName: "Device Hash", width: 180 },
    { field: "datetime_added", headerName: "Date/Time Added", width: 180 },
  ];
  const rows = interactionsData.map(({ direction, interaction, local_partner, duration, datetime, exhibit_ref, organisation, file_hash, datetime_added, case_ref, device_uid, status }, index) => {
    let DateTimeOfInteraction = moment(datetime).format('MMM Do YY, h:mma')
    let DateTimeAddedToQuest = moment(datetime_added).format('MMM Do YY, h:mma')
    return({
      id: uuidv1(),
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
    })
  });

  return(
    <div>
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
    </div>
  )
}



ShowInteractionsDataGrid.propTypes = {
  pk: PropTypes.string.isRequired,
  interactionsData: PropTypes.array,
};

export default ShowInteractionsDataGrid;