import React, { useEffect } from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  Tooltip
} from "@material-ui/core";
import PropTypes from "prop-types";
import Styles from "./userGeneratedContact/Styles";
import { Button } from "@mui/material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import moment from "moment";
import { useState } from "react";
import { API } from 'aws-amplify'
import { createCapturedInteraction as createCapturedInteractionMutation } from '../graphql/mutations';
import { v1 as uuidv1 } from 'uuid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import { randomQuantity } from "@mui/x-data-grid-generator";

const InteractionsCard = props => {
  const {
    classes,
    Id,
    Interaction,
    Direction,
    Partner,
    Duration,
    DateTime,
    Exhibit,
    Organisation,
    FileName,
    DateTimeAdded,
    Pk,
  } = props;

  let DateTimeOfInteraction = moment(DateTime).format('MMM Do YY, h:mma')
  let DateTimeAddedToQuest = moment(DateTimeAdded).format('MMM Do YY, h:mma')

  const initialParamState = { 
    key: randomQuantity(),
    id: uuidv1(),
    identifier: Pk,
    interaction: Interaction,
    direction: Direction,
    partner: Partner,
    duration: Duration,
    datetime: DateTimeOfInteraction,
    exhibit:  Exhibit,
    organisation: Organisation,
    file_name: FileName,
    datetime_added: DateTimeAddedToQuest, 
  }
  const [parameters, setParameters] = useState(initialParamState);

  async function saveCapturedInteractionItem() {
    // Build the create query up here. 
    setParameters(initialParamState); // I don't know why this works but it does. It forces the state to rerender the compnent thereby casuing the new random ints to be generated.  
    console.log(parameters);
    if (!parameters.interaction || !parameters.partner) return;
    await API.graphql({ query: createCapturedInteractionMutation, variables: { input: parameters } });
    console.log("Card saved in interactionsCard"); 
    
  }

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

  function CheckDirection(){
    if(Direction == "OUTBOUND"){
      return(
          <Typography className={classes.body}>
            <PhoneForwardedIcon /><i style={{position: "relative", bottom: "8px"}}>{Direction}</i>
          </Typography>
      )
    }else{
      return(
          <Typography className={classes.body}>
            <PhoneCallbackIcon /><i style={{position: "relative", bottom: "8px"}}>{Direction}</i>
          </Typography>
      )
    }
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Card className={classes.card} elevation={8} style={{color: "white"}}>
      <CardContent>
        <Typography variant="h6" className={classes.name}>
          <PhoneIphoneIcon fontSize="large" /><b style={{position: "relative", bottom: "10px"}}>{Partner}</b>
        </Typography><hr style={{marginBottom: "20px"}} />
        {<CheckDirection />}<br/>
        <Typography className={classes.details}>
          <big>{Interaction}</big>
        </Typography><br />
        <Typography className={classes.details}>
          <i style={{position: "relative", bottom: "3px"}}>{DateTimeOfInteraction}</i>
          <Tooltip title="Date and Time of Interaction">
            <InfoOutlinedIcon fontSize="tiny" sx={{position: "relative", bottom: "10px"}}/>
          </Tooltip>
        </Typography><br />
        <Typography className={classes.details}>
          <i style={{position: "relative", bottom: "5px"}}>{Duration}</i>
          <Tooltip title="Duration">
            <InfoOutlinedIcon fontSize="tiny" sx={{position: "relative", bottom: "10px"}}/>
          </Tooltip>
        </Typography><br />
        <Button variant="contained" onClick={handleOpen}>
            <SaveIcon />
        </Button>
      </CardContent>
    </Card>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <h4>Save interaction with <b>{Partner}</b> into My Captured Interactions List</h4>
        <Button variant="contained" sx={{margin: "5px"}} onClick={saveCapturedInteractionItem}> 
          Yes
        </Button>
        <Button variant="contained" sx={{margin: "5px"}} onClick={handleClose}>
          No
        </Button>
      </Box>
    </Modal>
    </>
  );
};

InteractionsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.string,
  Interaction: PropTypes.string.isRequired,
  Direction: PropTypes.string.isRequired,
  Partner: PropTypes.string.isRequired,
  Duration: PropTypes.string.isRequired,
  DateTime: PropTypes.string.isRequired,
  Exhibit: PropTypes.string.isRequired,
  Organisation: PropTypes.string.isRequired,
  FileName: PropTypes.string.isRequired,
  DateTimeAdded: PropTypes.string.isRequired,
  Pk: PropTypes.string.isRequired,
};

export default withStyles(Styles)(InteractionsCard);


