import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useQuery, gql } from '@apollo/client';
import { GET_INTERACTIONS, GET_ATTRIBUTIONS } from "../../queries";

const ShowDataGrid = props => {  

  const {pk} = props;

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
  const rows = data.listInteractions.items.map(({ direction, interaction, partner, duration, datetime, exhibit, organisation, file_name, datetime_added }) => {
    return({
      id: datetime,
      interaction: interaction,
      direction: direction,
      partner: partner,
      duration: duration,
      datetime: datetime,
      exhibit: exhibit,
      organisation: organisation,
      file_name: file_name,
      datetime_added: datetime_added,
    })
  });

  return(
    <div>
      <br />
      <h2>Data Grid 🚀</h2>
      <DataGrid style={{color: "white", backgroundImage: "linear-gradient(#ec483e, #f05c54)"}} rows={rows} columns={columns} autoHeight/>
      {/* //Data Grid needs the autoheight property to render */}
    </div>
  )
}



ShowDataGrid.propTypes = {
  pk: PropTypes.string.isRequired
};

export default ShowDataGrid;