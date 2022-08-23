import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";


const NominalData = props => {  

  const {nominalData, nominalID} = props;

  console.log(nominalID)

  const columns = [
    { field: "name", headerName: "Name", width: 230 },
    { field: "dateOfBirth", headerName: "Date of Birth", width: 230 },
  ];
  const rows = nominalData.map(data => { 
    return ({ 
      id: "1",
      name: data.name,
      dateOfBirth: data.dateOfBirth,
    })
  });
  return(
    <DataGrid style={{color: "white"}} rows={rows} columns={columns} autoHeight/>    //DataGrid needs the autoHeight property to render the actual table. 
  )
};

NominalData.propTypes = {
  nominalData: PropTypes.array.isRequired,
};

export default NominalData;