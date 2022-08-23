import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CreateData from "./CreateData.js";
import DataLists from "./DataLists.js";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLists: [
        // {
        //   Id: Math.random(),
        //   Name: "Tony Stark",
        //   Occupation: "Endo",
        //   Description:
        //     "14.13"
        // },
        // {
        //   Id: Math.random(),
        //   Name: "Steve Rogers",
        //   Occupation: "Diabetes",
        //   Description: "10.23"
        // },
        // {
        //   Id: Math.random(),
        //   Name: "Thor",
        //   Occupation: "Surgery",
        //   Description: "11.00"
        // }
      ],
      Id: null,
      Name: "",
      Occupation: "",
      Description: "",
      isEditing: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //To add data to the dataList array
  addData = e => {
    e.preventDefault();
    const { Name, Occupation, Description } = this.state;
    if (!Name || !Occupation || !Description) return;
    let dataLists = [
      ...this.state.dataLists,
      {
        Id: Math.random(),
        Name: this.state.Name,
        Occupation: this.state.Occupation,
        Description: this.state.Description
      }
    ];
    this.setState({
      dataLists
    });
    this.reset();
  };

  //To reset the form fields
  reset = () => {
    this.setState({
      Name: "",
      Occupation: "",
      Description: ""
    });
  };

  //To remove the data from the list
  removeData = Id => {
    let dataLists = this.state.dataLists.filter(data => {
      return data.Id !== Id;
    });

    this.setState({
      dataLists
    });
  };

  //To handle the data Update
  handleUpdate = (e, Id) => {
    const index = this.state.dataLists.findIndex(data => {
      return data.Id === Id;
    });
    const data = Object.assign({}, this.state.dataLists[index]);
    this.setState({
      Id: data.Id,
      Name: data.Name,
      Occupation: data.Occupation,
      Description: data.Description,
      isEditing: true
    });
  };

  //To save the updated data
  saveUpdate = (e, Id) => {
    const newData = this.state.dataLists.map(data => {
      if (data.Id === Id) {
        return {
          Name: this.state.Name,
          Occupation: this.state.Occupation,
          Description: this.state.Description
        };
      }
      return data;
    });
    this.setState(
      {
        dataLists: newData,
        isEditing: false
      },
      () => {
        this.reset();
      }
    );
  };

  render() {
    const {
      dataLists,
      Id,
      Name,
      Occupation,
      Description,
      isEditing
    } = this.state;
    return (
      <Grid container spacing={0}>
        <Grid item ls={12} md={12} sm={12} xs={12}>
          <CreateData
            Id={Id}
            Name={Name}
            Occupation={Occupation}
            Description={Description}
            addData={this.addData}
            handleChange={this.handleChange}
            saveUpdate={this.saveUpdate}
            isEditing={isEditing}
          />
        </Grid>
        <Grid item ls={12} md={12} sm={12} xs={12}>
          <DataLists
            lists={dataLists}
            removeData={this.removeData}
            handleUpdate={this.handleUpdate}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Crud;
