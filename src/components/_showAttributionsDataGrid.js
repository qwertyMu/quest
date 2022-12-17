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
  const columns = [
    { field: "name", headerName: "Name", width: 130 },
    { field: "organisation", headerName: "Organisation", width: 180 },
    { field: "attribution", headerName: "Attribution", width: 130 },
    { field: "case_ref", headerName: "Case Reference", width: 130 },
    { field: "file_hash", headerName: "Original File", width: 380 },
    { field: "device_uid", headerName: "Device Hash", width: 180 },
    { field: "datetime_added", headerName: "Date/Time Added", width: 180 },
    { field: "exhibit_ref", headerName: "Exhibit Number", width: 130 },
  ];
  const rows = data.listAttributions.items.map(({ name, organisation, attribution, case_ref, file_hash, device_uid, datetime_added, exhibit_ref }, index) => {
    let DateTimeAddedToQuest = moment(datetime_added).format('MMM Do YY, h:mma')
    return({
      key: index,
      id: index,
      name: name,
      organisation: organisation,
      attribution: attribution,
      case_ref: case_ref,
      file_hash: file_hash,
      device_uid: device_uid,
      datetime_added: DateTimeAddedToQuest,
      exhibit_ref: exhibit_ref,
    })
  });

  return(
    <React.Fragment>
      <DataGrid style={{color: "white", backgroundImage: "linear-gradient(#ec483e, #f05c54)"}} rows={rows} columns={columns} autoHeight/>
      {/* //Data Grid needs the autoheight property to render */}
    </React.Fragment>
  )
}

export default ShowAttributionsDataGrid;