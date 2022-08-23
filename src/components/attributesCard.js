import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";
import Styles from "./userGeneratedContact/Styles";
import { Button } from "@mui/material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import BadgeIcon from '@mui/icons-material/Badge';
import { Tooltip } from "@material-ui/core";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const AttributesCard = props => {
  const {
    classes,
    Id,
    Nominal,
    Organisation,
    Attribution,
    FileName,
    DateTimeAdded,
    Exhibit,
    Pk,
  } = props;

  // const cardDetails = {
  //   nominal: Nominal,
  //   organisation: Organisation,
  //   attribution: Attribution,
  //   file_name: FileName,
  //   datetime_added: DateTimeAdded,
  //   exhibit: Exhibit,
  // };

  async function addToMyIntelList(){
  
    console.log(Pk + Nominal);
  };

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
          <BadgeIcon /> {Nominal}
          <Tooltip title="The name saved against this number">
            <InfoOutlinedIcon fontSize="tiny" sx={{position: "relative", bottom: "10px"}}/>
          </Tooltip>
        </Typography><br />
        <Typography className={classes.body}>
          <small>Contributed by: </small> <i>{Organisation}</i>
        </Typography><br />
        <Typography className={classes.details}>
          {Attribution} 
          <br />
          <ContactPhoneIcon fontSize="large" />
        </Typography><br />
        {/* <Typography className={classes.details}>
          {FileName}
        </Typography><br />
        <Typography className={classes.details}>
          {DateTimeAdded}
        </Typography><br />
        <Typography className={classes.details}>
          {Exhibit}
        </Typography><br /> */}
        <Button variant="contained" onClick={addToMyIntelList}>
            Add to My Intel list
        </Button>
      </CardContent>
    </Card>
  );
};

AttributesCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.string,
  Nominal: PropTypes.string.isRequired,
  Organisation: PropTypes.string.isRequired,
  Attribution: PropTypes.string.isRequired,
  FileName: PropTypes.string.isRequired,
  DateTimeAdded: PropTypes.string.isRequired,
  Exhibit: PropTypes.string.isRequired,
  Pk: PropTypes.string.isRequired,
  // handleUpdate: PropTypes.func.isRequired,
  // removeData: PropTypes.func.isRequired
};

export default withStyles(Styles)(AttributesCard);


