import React from "react";

import { TextField, Button, Card } from "@mui/material";

export default function CreateData(props) {
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
    isEditing,
  } = props;

  return (
    <Card elevation={8}>
      <form
        onSubmit={addData}
        style={{
          padding: "8px",
          backgroundImage: "linear-gradient(#ffffff, #edd0ce)",
          borderRadius: "5px",
        }}
      >
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
            onClick={(e) => saveUpdate(e, Id)}
            fullWidth
            style={{ backgroundColor: "#edb6b2", color: "white" }}
          >
            Update
          </Button>
        ) : (
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#ec483e", color: "white" }}
          >
            Submit
          </Button>
        )}
      </form>
    </Card>
  );
}
