import React from "react";
import { withStyles, TextField, Button, Card } from "@material-ui/core";
import PropTypes from "prop-types";
import Styles from "./Styles.js";
import { borderRadius } from "@mui/system";

const CreateData = props => {
  const {
    Id,
    Name,
    PhoneNumber,
    EmailAddress,
    Notes,
    Source,
    Exhibit,
    handleChange,
    addData,
    saveUpdate,
    classes,
    isEditing
  } = props;

  return (
    <div className={classes.formWrapper} >
      <Card elevation={8}>
        <form onSubmit={addData} style={{padding: "8px", backgroundImage: "linear-gradient(#ffffff, #edd0ce)", borderRadius: "5px"}}>
          <TextField
            id="name-id"
            name="Name"
            label="Name"
            onChange={handleChange}
            value={Name}
            fullWidth
            required
          />
          <TextField
            id="occupation-id"
            name="PhoneNumber"
            label="Phone Number"
            onChange={handleChange}
            value={PhoneNumber}
            fullWidth
            required
          />
          <TextField
            id="desc-id"
            name="EmailAddress"
            label="Email Address"
            onChange={handleChange}
            value={EmailAddress}
            fullWidth
            required
          />
          <TextField
            id="desc-id"
            name="Notes"
            label="Notes"
            onChange={handleChange}
            value={Notes}
            fullWidth
            required
          />
          <TextField
            id="desc-id"
            name="Source"
            label="Source"
            onChange={handleChange}
            value={Source}
            fullWidth
            required
          />
          <TextField
            id="desc-id"
            name="Exhibit"
            label="Exhibit"
            onChange={handleChange}
            value={Exhibit}
            fullWidth
            required
          />
          {isEditing ? (
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              onClick={e => saveUpdate(e, Id)}
              fullWidth
              style={{backgroundColor: "#edb6b2", color: "white"}}
            >
              Update
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              fullWidth
              style={{backgroundColor: "#ec483e", color: "white"}}
            >
              Submit
            </Button>
          )}
        </form>
      </Card>
    </div>
  );
};

CreateData.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.number,
  Name: PropTypes.string.isRequired,
  PhoneNumber: PropTypes.string.isRequired,
  EmailAddress: PropTypes.string.isRequired,
  Notes: PropTypes.string.isRequired,
  Source: PropTypes.string.isRequired,
  Exhibit: PropTypes.string.isRequired,
  addData: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveUpdate: PropTypes.func.isRequired
};

export default withStyles(Styles)(CreateData);
