import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Styles from "../components/userGeneratedContact/Styles";
import { Button } from "@mui/material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import BadgeIcon from '@mui/icons-material/Badge';
import { Tooltip } from "@material-ui/core";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from "react";
import { API } from 'aws-amplify'
import { createCapturedAttribution as createCapturedAttributionMutation } from '../graphql/mutations';
import { v1 as uuidv1 } from 'uuid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import { randomQuantity } from "@mui/x-data-grid-generator";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment";
import DownloadForOfflineSharpIcon from '@mui/icons-material/DownloadForOfflineSharp';

const AttributionsCard = props => {
  const {
    classes,
    Name,
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

  let DateTimeAddedToQuest = moment(DateTimeAdded).format('MMM Do YYYY')

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30%",
    bgcolor: '#f05c54',
    color: 'white',
    borderRadius: '40px', 
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

  const initialParamState = { 
    key: randomQuantity(),
    id: uuidv1(),
    identifier: Pk,
    name: Name,
    organisation: Organisation,
    attribution: Attribution,
    exhibit_ref: Exhibit,
    case_ref: CaseRef,
    file_hash: FileHash,
    device_uid: DeviceUid,
    datetime_added: DateTimeAdded,
  }

  const [parameters, setParameters] = useState(initialParamState);

  async function saveCapturedAttributionItem() {  
    // Build the create query up here. 
    setParameters(initialParamState); // I don't know why this works but it does. It forces the state to rerender the compnent thereby casuing the new random ints to be generated.  
    console.log("saveCapturedAttributionItem function - " + parameters);
    if (parameters.deviceUid) return;
    await API.graphql({ query: createCapturedAttributionMutation, variables: { input: parameters } });
    console.log("Card saved in attributionsCard"); 
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Card className={classes.card} elevation={8} style={{color: "white"}}>
        <CardContent>
            <small>{Attribution}</small>
            <Typography variant="h6" className={classes.name}>
                <Tooltip title="The name saved against this number">
                    <ContactPhoneIcon fontSize="small" />
                </Tooltip>
                <b style={{position: "relative", bottom: "2px", marginLeft:"10px"}}>{Name}</b>
            </Typography>
            <MoreHorizIcon onClick={handleOpen}/>
        </CardContent>
    </Card>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            
            <Typography variant="h6" className={classes.name}>
                <b>{Pk}</b>
                <hr />
                <Typography variant="h6" className={classes.name}>
                    <Tooltip title="The name saved against this number">
                        <ContactPhoneIcon fontSize="small" />
                    </Tooltip>
                    <b style={{position: "relative", fontSize:"50px", bottom: "2px", marginLeft:"10px"}}>{Name}</b>
                </Typography>
            </Typography>
            
            Exhibit - {Exhibit}
            <br />
            <small><i>(Contributed by {Organisation} on {DateTimeAddedToQuest})</i></small>
            <br />
            Found in seized device - {FoundInsidePhone}
            <br />
            <small><i>(Original file hash - {FileHash})</i></small> <Button sx={{marginLeft: "15px"}} variant="contained" onClick={""}><DownloadForOfflineSharpIcon /></Button>
            <hr />
            Capture in Attributions List?
            <br />
            <Button variant="contained" sx={{margin: "5px"}} onClick={saveCapturedAttributionItem}> 
            <SaveIcon sx={{marginRight: "5px"}}/> Yes
            </Button>
            <Button variant="contained" sx={{margin: "5px"}} onClick={handleClose}>
            No
            </Button>
        </Box>
    </Modal>
    </>
  );
};

AttributionsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.string,
  Nominal: PropTypes.string,
  Organisation: PropTypes.string,
  Attribution: PropTypes.string,
  FileHash: PropTypes.string,
  FoundInsidePhone: PropTypes.string,
  DateTimeAdded: PropTypes.string,
  Exhibit: PropTypes.string,
  DeviceUid: PropTypes.string,
  CaseRef: PropTypes.string,
  Pk: PropTypes.string.isRequired,
};

export default withStyles(Styles)(AttributionsCard);


