import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import moment from "moment";
import { v1 as uuidv1 } from 'uuid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ShowAttributionsDataGrid = props => {  

  const {pk, attributionsData} = props;
  console.log(attributionsData)
  
  const columns = [
    { field: "nominal", headerName: "Nominal", width: 130 },
    { field: "organisation", headerName: "Organisation", width: 180 },
    { field: "attribution", headerName: "Attribution", width: 130 },
    { field: "file_name", headerName: "Original File", width: 180 },
    { field: "datetime_added", headerName: "Date/Time Added", width: 180 },
    { field: "exhibit", headerName: "Exhibit Number", width: 130 },
  ];
  const rows = attributionsData.map(({ nominal, organisation, attribution, file_name, datetime_added, exhibit }, index) => {
    let DateTimeAddedToQuest = moment(datetime_added).format('MMM Do YY, h:mma')
    return({
      key: index,
      id: uuidv1(),
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
      <InfoOutlinedIcon fontSize="tiny" sx={{position: "relative", bottom: "-2px"}}/><i> Select a row for more context;</i>
      <DataGrid style={{color: "white", backgroundImage: "linear-gradient(#ec483e, #f05c54)"}} rows={rows} columns={columns} autoHeight/>
      {/* //Data Grid needs the autoheight property to render */}
    </div>
  )
}



ShowAttributionsDataGrid.propTypes = {
  pk: PropTypes.string.isRequired,
  attributionsData: PropTypes.array
};

export default ShowAttributionsDataGrid;