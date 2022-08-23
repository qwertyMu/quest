import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  IconButton,
  Tooltip
} from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";
import Styles from "./userGeneratedContact/Styles";
import { Button } from "@mui/material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimerIcon from '@mui/icons-material/Timer';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import moment from "moment";

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

  // const cardDetails = {
  //   nominal: Nominal,
  //   organisation: Organisation,
  //   attribution: Attribution,
  //   file_name: FileName,
  //   datetime_added: DateTimeAdded,
  //   exhibit: Exhibit,
  // };

  async function addToMyIntelList(){
    console.log(Pk + Partner);
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

  // async function createContact(){
  
  //   const newContactRecord = 
  //   await API.graphql({
  //     query: addContactsData,
  //     variables: contactDetails,
  //     authMode: "API_KEY"
  //   });
  //   console.log(JSON.stringify(newContactRecord));
  // };

  return (
    <Card className={classes.card} elevation={8} style={{color: "white"}}>
      <CardContent>
        {/* <IconButton
          aria-label="Update"
          className={classes.edit}
          onClick={e => handleUpdate(e, Id)}
        >
          <EditOutlined />
        </IconButton>
        <IconButton
          aria-label="Delete"
          className={classes.delete}
          onClick={() => removeData(Id)}
        >
          <DeleteOutlined />
        </IconButton> */}
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
        {/* <Typography className={classes.details}>
          {Exhibit}
        </Typography><br />
        <Typography className={classes.details}>
          {Organisation}
        </Typography><br />
        <Typography className={classes.details}>
          {FileName}
        </Typography><br />
        <Typography className={classes.details}>
          {DateTimeAdded}
        </Typography><br /> */}
        {/* <Button variant="contained" onClick={createContact}>
            Send to DB
        </Button> */}
        <Button variant="contained" onClick={addToMyIntelList}>
            Add to My Intel list
        </Button>
      </CardContent>
    </Card>
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
  // handleUpdate: PropTypes.func.isRequired,
  // removeData: PropTypes.func.isRequired
};

export default withStyles(Styles)(InteractionsCard);


