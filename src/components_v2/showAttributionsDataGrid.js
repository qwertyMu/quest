import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useState } from "react";
import moment from "moment";
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { API } from 'aws-amplify'
import { v1 as uuidv1 } from 'uuid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { createCapturedAttribution as createCapturedAttributionMutation } from '../graphql/mutations';

const ShowAttributionsDataGrid = props => {  

  const {pk, attributionsData} = props;
  console.log(attributionsData)
  
  const initialParamState = { 
    key: '',
    id: '',
    name: '',
    nameKnownToMe: '',
    organisation: '',
    attribution: '',
    file_hash: '',
    datetime_added: '',
    exhibit_ref: '',
    case_ref: '',
    device_uid: '',
  }

  const [parameters, setParameters] = useState(initialParamState);

  async function createCapturedAttributionItem() {
    // Build the create query up here.
    if (!parameters.device_uid) return;
    await API.graphql({ query: createCapturedAttributionMutation, variables: { input: parameters } }); 
    console.log("Row saved in showAttributionsDataGrid");
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
    { field: "name", headerName: "Name", width: 130 },
    { field: "nameKnownToMe", headerName: "Name known to me", width: 130 },
    { field: "organisation", headerName: "Organisation", width: 180 },
    { field: "attribution", headerName: "Attribution", width: 130 },
    { field: "exhibit_ref", headerName: "Exhibit Number", width: 130 },
    { field: "case_ref", headerName: "Case Ref", width: 130 },
    { field: "file_hash", headerName: "File Hash", width: 180 },
    { field: "device_uid", headerName: "Device Hash", width: 130 },
    { field: "datetime_added", headerName: "Date/Time Added", width: 180 },
  ];
  const rows = attributionsData.map(({ name, organisation, attribution, file_hash, datetime_added, exhibit_ref, case_ref, device_uid }, index) => {
    let DateTimeAddedToQuest = moment(datetime_added).format('MMM Do YY, h:mma')
    let nameKnownToMe = ''
    return({
      // key: index,
      id: uuidv1(),
      name: name,
      nameKnownToMe: nameKnownToMe,
      organisation: organisation,
      attribution: attribution,
      file_hash: file_hash,
      datetime_added: DateTimeAddedToQuest,
      exhibit_ref: exhibit_ref,
      case_ref: case_ref,
      device_uid: device_uid,
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
          <Button variant="contained" onClick={createCapturedAttributionItem}>
            <SaveIcon />
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

ShowAttributionsDataGrid.propTypes = {
  pk: PropTypes.string.isRequired,
  attributionsData: PropTypes.array
};

export default ShowAttributionsDataGrid;