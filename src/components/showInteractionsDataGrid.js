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
import Typography from '@mui/material/Typography';

const ShowInteractionsDataGrid = props => {  

  const {pk} = props;

  const [finalClickInfo, setFinalClickInfo] = useState("");
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
    console.log("TEST");
    // identifierData.map((data) => {
    //   if (params.value == data.value){
    //     setAttributionNames([])
    //     data.attributions.map(attribution =>{ 
    //         setAttributionNames(attributionNames => [...attributionNames, attribution.nominal.name]) // Add an object to the end of an array
    //     })
    //   } 
    // })
    handleOpen();
  };

  const { loading, error, data } = useQuery(GET_INTERACTIONS, {
    variables: { pk },
  });
  
  if (loading) return <h2>LOADING... </h2>;
  if (error) return `Error! ${error}`;
  if (data !== undefined){
    console.log(data);
  }
  const columns = [
    { field: "interaction", headerName: "Interaction", width: 130 },
    { field: "direction", headerName: "Direction", width: 130 },
    { field: "partner", headerName: "Partner", width: 130 },
    { field: "duration", headerName: "Duration", width: 130 },
    { field: "datetime", headerName: "Date/Time", width: 180 },
    { field: "exhibit", headerName: "Exhibit Number", width: 130 },
    { field: "organisation", headerName: "Organisation", width: 180 },
    { field: "file_name", headerName: "Orignial File", width: 180 },
    { field: "datetime_added", headerName: "Date/Time Added", width: 180 },
  ];
  const rows = data.listInteractions.items.map(({ direction, interaction, partner, duration, datetime, exhibit, organisation, file_name, datetime_added }, index) => {
    let DateTimeOfInteraction = moment(datetime).format('MMM Do YY, h:mma')
    let DateTimeAddedToQuest = moment(datetime_added).format('MMM Do YY, h:mma')
    return({
      key: index,
      id: index,
      interaction: interaction,
      direction: direction,
      partner: partner,
      duration: duration,
      datetime: DateTimeOfInteraction,
      exhibit: exhibit,
      organisation: organisation,
      file_name: file_name,
      datetime_added: DateTimeAddedToQuest,
    })
  });

  return(
    <div>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {finalClickInfo.value}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Nominals attributed to this number; TEST
            {/* {attributionNames.map(name => (
              <div>
                <br />
                <Button variant="outlined" sx={{backgroundColor: "white"}}>{name}</Button>
                <br />
              </div>
            ))} */}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}



ShowInteractionsDataGrid.propTypes = {
  pk: PropTypes.string.isRequired
};

export default ShowInteractionsDataGrid;