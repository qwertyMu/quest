import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import { listCapturedAttributions } from "../graphql/queries";
import moment from "moment";

export default function AttributionsIntelligenceList() {

  const [list, setList] = useState([]);

  // useEffect(() => {
  //   setInterval(() => fetchList(), 1000); //This calls fetchList() every second to give the illusion of async db fetch. 
  // }, []);

  useEffect(() => {
    fetchList(); //This calls fetchList() every second to give the illusion of async db fetch. 
  }, []);

  async function fetchList() {
    const apiData = await API.graphql({ query: listCapturedAttributions });
    setList(apiData.data.listCapturedAttributions.items);
  }

  const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: false },
    { field: 'organisation', headerName: 'Organisation', width: 180, editable: false },
    { field: 'attribution', headerName: 'Attribution', width: 180, editable: false },
    { field: 'exhibit_ref', headerName: 'From Exhibit', width: 180, editable: false },
    { field: 'case_ref', headerName: 'Case Ref', width: 180, editable: false },
    { field: 'file_hash', headerName: 'Hash of Original File', width: 180, editable: false },
    { field: 'device_uid', headerName: 'Device Hash', width: 180, editable: false },
    {
      field: 'datetime_added',
      headerName: 'Date Added to Intelligence List',
      type: 'string',
      width: 280,
      editable: false,
    },
    {
      field: 'notes',
      headerName: 'Notes',
      type: 'string',
      width: 300,
      editable: true,
    },
  ];

  const rows = list.map(({ 
      id, 
      name, 
      organisation, 
      attribution, 
      exhibit_ref,
      case_ref, 
      file_hash, 
      device_uid, 
      createdAt, 
      notes, 
    }, index) => {
    let DateTimeAddedToList = moment(createdAt).format('MMM Do YY, h:mma')
    return({
      key: index,
      id: id,
      name: name,
      organisation: organisation,
      attribution: attribution,
      exhibit_ref: exhibit_ref,
      case_ref: case_ref,
      file_hash: file_hash,
      device_uid: device_uid,
      datetime_added: DateTimeAddedToList, //Currently this format does not allow sort by ASC. Date seems fine but time is a bit funny.
      notes: notes,
    })
  });

  return (
    <div style={{ height: 380, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        initialState={{
          ...list.initialState,
          // filter: {
          //   filterModel: {
          //     items: [{ columnField: 'quantity', operatorValue: '>', value: 10000 }],
          //   },
          // },
          sorting: {
            sortModel: [{ field: 'datetime_added', sort: 'desc' }],
          },
        }}
      />
    </div>
  );
}

// const rows = [
//   {
//     id: 1,
//     attributedName: randomTraderName(),
//     nameKnownToMe: randomTraderName(),
//     attributedIdentifier: '0712345678',
//     dateAddedToList: randomUpdatedDate(),
//     notes: '',
//   },
//   {
//     id: 2,
//     attributedName: randomTraderName(),
//     nameKnownToMe: randomTraderName(),
//     attributedIdentifier: '0712345678',
//     dateAddedToList: randomUpdatedDate(),
//     notes: '',
//   },
//   {
//     id: 3,
//     attributedName: randomTraderName(),
//     nameKnownToMe: randomTraderName(),
//     attributedIdentifier: '0712345678',
//     dateAddedToList: randomUpdatedDate(),
//     notes: '',
//   },
//   {
//     id: 4,
//     attributedName: randomTraderName(),
//     nameKnownToMe: randomTraderName(),
//     attributedIdentifier: '0712345678',
//     dateAddedToList: randomUpdatedDate(),
//     notes: '',
//   },
//   {
//     id: 5,
//     attributedName: randomTraderName(),
//     nameKnownToMe: randomTraderName(),
//     attributedIdentifier: '0712345678',
//     dateAddedToList: randomUpdatedDate(),
//     notes: '',
//   },
// ];
