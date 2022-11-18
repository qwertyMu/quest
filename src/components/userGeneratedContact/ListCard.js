import React from "react";

import { DeleteOutlined, EditOutlined } from "@mui/icons-material";

import { Card, CardContent, Typography, IconButton } from "@mui/material";

import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { API } from "aws-amplify";

export default function ListCard(props) {
  const {
    classes,
    Id,
    Name,
    PhoneNumber,
    EmailAddress,
    Notes,
    Source,
    Exhibit,
    handleUpdate,
    removeData,
  } = props;

  const contactDetails = {
    name: Name,
    phoneNumber: PhoneNumber,
    emailAddress: EmailAddress,
    notes: Notes,
    source: Source,
    exhibit: Exhibit,
  };

  const addContactsData = `mutation createContact($name:String! $phoneNumber:String! $emailAddress:String! $notes:String! $source:String! $exhibit:String!){
    createContact(input:{
      name: $name
      phoneNumber: $phoneNumber
      emailAddress: $emailAddress
      notes: $notes
      source: $source
      exhibit: $exhibit
    }){
      id
      name
      phoneNumber
      emailAddress
      notes
      source
      exhibit
    }
  }`;

  async function createContact() {
    const newContactRecord = await API.graphql({
      query: addContactsData,
      variables: contactDetails,
      authMode: "API_KEY",
    });
    console.log(JSON.stringify(newContactRecord));
  }

  return (
    <Card className={classes.card} elevation={8} style={{ color: "white" }}>
      <CardContent>
        <IconButton
          aria-label="Update"
          className={classes.edit}
          onClick={(e) => handleUpdate(e, Id)}
        >
          <EditOutlined />
        </IconButton>
        <IconButton
          aria-label="Delete"
          className={classes.delete}
          onClick={() => removeData(Id)}
        >
          <DeleteOutlined />
        </IconButton>
        <Typography variant="h6" className={classes.name}>
          {Name}
        </Typography>
        <br />
        <Typography className={classes.body}>{PhoneNumber}</Typography>
        <br />
        <Typography className={classes.details}>{EmailAddress}</Typography>
        <br />
        <Typography className={classes.details}>{Notes}</Typography>
        <br />
        <Typography className={classes.details}>{Source}</Typography>
        <br />
        <Typography className={classes.details}>{Exhibit}</Typography>
        <br />
        <Button variant="contained" onClick={createContact}>
          Send to DB
        </Button>
      </CardContent>
    </Card>
  );
}

ListCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.number,
  Name: PropTypes.string.isRequired,
  PhoneNumber: PropTypes.string.isRequired,
  EmailAddress: PropTypes.string.isRequired,
  Notes: PropTypes.string.isRequired,
  Source: PropTypes.string.isRequired,
  Exhibit: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  removeData: PropTypes.func.isRequired,
};
