import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useQuery } from '@apollo/client';
import { GET_ATTRIBUTIONS } from "../queries";
import moment from "moment";

const ShowAttributionsDataGrid = props => {  

  const {pk} = props;

  const { loading, error, data } = useQuery(GET_ATTRIBUTIONS, {
    variables: { pk },
  });
  
  if (loading) return <h2>LOADING... </h2>;
  if (error) return `Error! ${error}`;
  if (data !== undefined){
    console.log(data);
  }
  // key={index}
  // Id={datetime_added}
  // Nominal={nominal}
  // Organisation={organisation}
  // Attribution={attribution}
  // FileName={file_name}
  // DateTimeAdded={datetime_added}
  // Exhibit={exhibit}
  const columns = [
    { field: "nominal", headerName: "Nominal", width: 130 },
    { field: "organisation", headerName: "Organisation", width: 180 },
    { field: "attribution", headerName: "Attribution", width: 130 },
    { field: "file_name", headerName: "Original File", width: 180 },
    { field: "datetime_added", headerName: "Date/Time Added", width: 180 },
    { field: "exhibit", headerName: "Exhibit Number", width: 130 },
  ];
  const rows = data.listAttributions.items.map(({ nominal, organisation, attribution, file_name, datetime_added, exhibit }, index) => {
    let DateTimeAddedToQuest = moment(datetime_added).format('MMM Do YY, h:mma')
    return({
      key: index,
      id: index,
      nominal: nominal,
      organisation: organisation,
      attribution: attribution,
      file_name: file_name,
      datetime_added: DateTimeAddedToQuest,
      exhibit: exhibit,
    })
  });

  return(
    <div>
      <DataGrid style={{color: "white", backgroundImage: "linear-gradient(#ec483e, #f05c54)"}} rows={rows} columns={columns} autoHeight/>
      {/* //Data Grid needs the autoheight property to render */}
    </div>
  )
}



ShowAttributionsDataGrid.propTypes = {
  pk: PropTypes.string.isRequired
};

export default ShowAttributionsDataGrid;