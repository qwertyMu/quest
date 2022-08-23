import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

export default function IdentifierDataTable(props){


  const identifierData = props.identifierData;

  const [finalClickInfo, setFinalClickInfo] = useState("");
  const [attributionNames, setAttributionNames] = useState([]);
  
  const columns = [
    { field: "identifier", headerName: "Identifier", width: 230 },
  ];

  const rows = identifierData.map(data => { 
    return ({ 
      id: data.id,
      identifier: data.value,
    })
  });

  //Attributions Modal
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
    border: '2px solid #000',
    borderRadius: '10px', 
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

  const handleOnCellClick = (params) => {
    setFinalClickInfo(params);
    console.log(attributionNames);
    identifierData.map((data) => {
      if (params.value == data.value){
        setAttributionNames([])
        data.attributions.map(attribution =>{ 
            setAttributionNames(attributionNames => [...attributionNames, attribution.nominal.name]) // Add an object to the end of an array
        })
      } 
    })
    handleOpen();
  };

  return(
    <div>
      <DataGrid sx={{color: 'white'}} rows={rows} columns={columns} autoHeight onCellClick={handleOnCellClick}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {finalClickInfo.value}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Nominals attributed to this number;
            {attributionNames.map(name => (
              <div>
                <br />
                <Button variant="outlined" sx={{backgroundColor: "white"}}>{name}</Button>
                <br />
              </div>
            ))}
          </Typography>
        </Box>
      </Modal>
    </div>

  )
};

IdentifierDataTable.propTypes = {
  identifierData: PropTypes.array.isRequired,
};

